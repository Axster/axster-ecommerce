export function PopularLinks() {
  const topBrands = [
    ["Adidas", "Asics", "Benetton", "Bershka"],
    ["Billabong", "Birkenstock", "Calvin Klein", "Casio"],
    ["Colmar Originals", "Converse", "Desigual", "Diesel"],
    ["Dr. Martens", "Elisabetta Franchi", "Esprit", "Even&Odd"],
    ["Gap", "Geox", "Gucci", "Guess"],
    ["Kappa", "Lacoste", "Lee Jeans", "Levis"],
    ["Liu Jo", "Mango", "Michael Kors", "Napapijri"],
    ["New Balance", "Nike", "OVS", "Polo Ralph Lauren"],
    ["Puma", "Quiksilver", "Ray-Ban", "Replay"],
    ["Scarpe Black Friday", "Scarpe Jordan", "Stradivarius", "The North Face"],
    ["Tommy Hilfiger", "Topshop", "Triumph", "Under Armour"],
    ["Vans", "", "", ""],
  ];

  const topCategories = [
    ["Abiti da festa", "adidas Ozweego", "Borse", "Cashmere"],
    ["Giacche da uomo", "Giubbotti", "Impermeabili", "Jeans"],
    ["Multipack", "Nike Air Force 1", "Promozioni", "Puma Cali"],
    ["Scarpe Eleganti", "Smoking uomo", "Sneakers", "Stivali"],
    ["Tacchi alti", "Taglie forti", "", ""],
  ];

  return (
    <div className="container mx-auto px-4 pb-12">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">
          I nostri top brand: abbigliamento, scarpe e accessori
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-2">
          {topBrands.map((row, rowIndex) =>
            row.map(
              (brand, colIndex) =>
                brand && (
                  <a
                    key={`${rowIndex}-${colIndex}`}
                    href="#"
                    className="hover:underline"
                  >
                    {brand}
                  </a>
                ),
            ),
          )}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">
          Le nostre top categorie più alla moda
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-2">
          {topCategories.map((row, rowIndex) =>
            row.map(
              (category, colIndex) =>
                category && (
                  <a
                    key={`${rowIndex}-${colIndex}`}
                    href="#"
                    className="hover:underline"
                  >
                    {category}
                  </a>
                ),
            ),
          )}
        </div>
      </section>
    </div>
  );
}
