const Map = () => {
  return (
    <div className="rounded-xl overflow-hidden border border-border h-[400px] shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.4562251844913!2d2.2433157!3d48.918053299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e665ee5c1aaba7%3A0xd0e4fe0ba00c503a!2s11%20Rue%20Antonin%20Georges%20Belin%2C%2095100%20Argenteuil!5e0!3m2!1sen!2sfr!4v1624385000000!5m2!1sen!2sfr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="O'Humm Pizza location"
      ></iframe>
    </div>
  );
};

export default Map;