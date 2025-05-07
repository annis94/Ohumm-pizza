import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

// Fonction pour nettoyer le texte
function cleanText(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

// Fonction pour extraire le prix d'une chaîne
function extractPrice(priceText: string): number {
  const match = priceText.match(/(\d+[.,]\d{2})/);
  if (match) {
    return parseFloat(match[1].replace(',', '.'));
  }
  console.warn(`Prix invalide trouvé: "${priceText}"`);
  return 0;
}

// Fonction pour mapper les catégories du client vers vos catégories
function mapClientCategoryToYourCategory(clientCategoryName: string): string {
  const clientCat = clientCategoryName.toLowerCase().trim();
  
  // Mapping exact des catégories du site client
  if (clientCat.includes('formules')) return 'Formules';
  if (clientCat.includes('menus enfants')) return 'Menus enfants';
  if (clientCat.includes('pizzas') && !clientCat.includes('signatures')) return 'Pizzas';
  if (clientCat.includes('pizzas signatures')) return 'Pizzas signatures';
  if (clientCat.includes('calzones')) return 'Calzones';
  if (clientCat.includes('tex mex')) return 'Tex mex';
  if (clientCat.includes('desserts')) return 'Desserts';
  if (clientCat.includes('boissons')) return 'Boissons';

  console.warn(`Catégorie client non mappée: "${clientCategoryName}"`);
  return 'Autres';
}

// Fonction pour générer un ID unique
function generateItemId(name: string, category: string): string {
  return `${category.toLowerCase().replace(/\s+/g, '-')}-${name.toLowerCase().replace(/\s+/g, '-')}`;
}

export async function GET() {
  console.log('API Route: Début du scraping du menu');
  const clientSiteUrl = 'https://www.ohummpizzaargenteuil.fr/';
  
  try {
    // URL du site client
    const response = await fetch(clientSiteUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const html = await response.text();
    console.log('HTML récupéré avec succès, longueur:', html.length);
    
    const $ = cheerio.load(html);
    console.log('HTML chargé dans Cheerio');
    
    const menuItems: MenuItem[] = [];

    // Trouver tous les blocs de catégorie
    const categoryBlocks = $('div.menucat.menucard__meals-group');
    console.log(`Nombre de blocs de catégorie trouvés: ${categoryBlocks.length}`);

    // Parcourir chaque bloc de catégorie
    categoryBlocks.each((index, categoryBlock) => {
      const $categoryBlock = $(categoryBlock);
      
      // Nouvelle tentative pour le nom de catégorie
      const clientCategoryName = $categoryBlock.find('div.category > div.category-name').text().trim();
      console.log(`\n--- Catégorie Client Trouvée: "${clientCategoryName}" ---`);

      if (!clientCategoryName) {
        console.warn(`Bloc de catégorie ${index} sans nom (avec le sélecteur 'div.category > div.category-name'), ignoré.`);
        return;
      }

      const mappedCategory = mapClientCategoryToYourCategory(clientCategoryName);
      console.log(`Catégorie Mappée: "${mappedCategory}"`);

      if (mappedCategory === "Autres") {
        console.warn(`La catégorie client "${clientCategoryName}" n'a pas pu être mappée et sera ignorée.`);
        return;
      }

      // Nouvelle tentative pour trouver les produits
      const productContainer = $categoryBlock.find('div.product-container');
      if (productContainer.length === 0) {
        console.warn(`Aucun 'div.product-container' trouvé pour la catégorie "${clientCategoryName}".`);
        return;
      }

      const productElements = productContainer.find('div[itemscope][itemtype="http://schema.org/Product"]');
      console.log(`Nombre de produits trouvés dans "${clientCategoryName}" (via .product-container): ${productElements.length}`);

      // Parcourir les produits
      productElements.each((productIndex, productElement) => {
        const $product = $(productElement);

        // Sélecteurs pour les détails du produit
        const name = $product.find('div.product-name[itemprop="name"]').text().trim();
        const description = $product.find('div.product-description[itemprop="description"]').text().trim() || "";
        const priceString = $product.find('div.product-price[itemprop="price"]').text().trim();
        let price = 0;

        if (priceString) {
          price = parseFloat(priceString.replace(/[^0-9,]/g, '').replace(',', '.').trim());
          if (isNaN(price)) {
            console.warn(`Prix invalide pour "${name}" (cat: ${clientCategoryName}): "${priceString}". Mis à 0.`);
            price = 0;
          }
        }

        // Gestion de l'image
        let imageUrl = '/images/placeholder.jpg';
        const imageElement = $product.find('div.meal__product-image-container img.meal__product-image');
        if (imageElement.length > 0) {
          const src = imageElement.attr('src');
          if (src) {
            if (src.startsWith('//')) {
              imageUrl = 'https:' + src;
            } else if (src.startsWith('http')) {
              imageUrl = src;
            } else {
              try {
                imageUrl = new URL(src, clientSiteUrl).toString();
              } catch(e) {
                console.warn(`URL d'image mal formée pour "${name}": ${src}`);
              }
            }
          }
        }

        if (name && price > 0) {
          const menuItem: MenuItem = {
            id: generateItemId(name, mappedCategory),
            name,
            description,
            price,
            category: mappedCategory,
            imageUrl
          };
          menuItems.push(menuItem);
          console.log(`  Produit ajouté: ${name} | ${price}€ | Cat: ${mappedCategory}`);
        } else {
          console.warn(`  Produit ignoré (nom ou prix manquant/invalide): Nom="${name}" | PrixBrut="${priceString}" | Cat client="${clientCategoryName}"`);
        }
      });
    });

    console.log(`\nAPI Route: Scraping terminé. ${menuItems.length} produits trouvés.`);
    
    if (menuItems.length === 0) {
      console.log('ATTENTION: Aucun item de menu n\'a pu être scrapé. Vérifiez les sélecteurs CSS.');
    }
    
    return NextResponse.json(menuItems);
    
  } catch (error) {
    console.error('API Route: Erreur lors du scraping:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération du menu' },
      { status: 500 }
    );
  }
} 