const MenuHeader = () => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent whitespace-nowrap">
        Notre Menu
      </h1>
      <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
      <p className="text-muted-foreground text-base sm:text-lg">
        Découvrez notre large sélection de pizzas artisanales, calzones et autres délices
      </p>
    </div>
  );
};

export default MenuHeader;