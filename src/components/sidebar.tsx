export function Sidebar() {
  const categories = [
    { name: "Abbigliamento", isTitle: true },
    { name: "T-shirt e polo" },
    { name: "Camicie" },
    { name: "Maglieria e Felpe" },
    { name: "Pantaloni" },
    { name: "Jeans" },
    { name: "Giacche" },
    { name: "Cappotti" },
    { name: "Maglieria" },
    { name: "Abbigliamento sportivo" },
    { name: "Pantaloni sportivi e joggers" },
    { name: "Completi e cravatte" },
    { name: "Bermuda" },
    { name: "Intimo" },
    { name: "Moda mare" },
    { name: "Per la notte" },
    { name: "OFFERTE" },
  ];

  return (
    <aside className="w-64 hidden md:block">
      <nav className="space-y-2">
        {categories.map((category, index) => (
          <a
            key={index}
            href="#"
            className={`text-sm font-bold block py-1 ${category.isTitle ? "text-purple-600 font-medium" : "hover:text-purple-600"}`}
          >
            {category.name}
          </a>
        ))}
      </nav>
    </aside>
  );
}
