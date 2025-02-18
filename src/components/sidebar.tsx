import { GenderParams } from "@/app/[gender]/gender.types";
import { CategoryKeyEnum } from "@/services/api.model";
import {
  useParams,
  usePathname,
} from "next/navigation";

export function Sidebar() {
  const { gender } = useParams<GenderParams>();
  const pathname = usePathname();

  const categoriesByGender = {
    men: [
      {
        name: "Abbigliamento",
        route: `/${gender}`,
      },
      {
        name: "T-shirt e polo",
        route: `/${gender}/t-shirt-and-polo/${CategoryKeyEnum.MensShirts}`,
      },
      {
        name: "Camicie",
        route: `/${gender}/shirts/${CategoryKeyEnum.MensShirts}`,
      },
      {
        name: "Maglieria e Felpe",
        route: `/${gender}/knitwear-and-sweatshirts/${CategoryKeyEnum.MensShirts}`,
      },
      {
        name: "Sport",
        route: `/${gender}/sports/${CategoryKeyEnum.SportsAccessories}`,
      },
    ],
    women: [
      {
        name: "Abbigliamento",
        route: `/${gender}`,
      },
      {
        name: "Vestiti",
        route: `/${gender}/dresses/${CategoryKeyEnum.WomensDresses}`,
      },
      {
        name: "Borse",
        route: `/${gender}/bags/${CategoryKeyEnum.WomensBags}`,
      },
      {
        name: "Gioielli",
        route: `/${gender}/jewellery/${CategoryKeyEnum.WomensJewellery}`,
      },
      {
        name: "Scarpe",
        route: `/${gender}/shoes/${CategoryKeyEnum.WomensShoes}`,
      },
      {
        name: "Orologi",
        route: `/${gender}/watches/${CategoryKeyEnum.WomensWatches}`,
      },
    ],
    children: [
      {
        name: "Abbigliamento",
        route: `/${gender}`,
      },
      {
        name: "T-shirt e polo",
        route: `/${gender}/t-shirt-and-polo/${CategoryKeyEnum.MensShirts}`,
      },
      {
        name: "Maglieria e Felpe",
        route: `/${gender}/knitwear-and-sweatshirts/${CategoryKeyEnum.MensShirts}`,
      },
      {
        name: "Sport",
        route: `/${gender}/sports/${CategoryKeyEnum.SportsAccessories}`,
      },
    ],
  };

  const categories =
    categoriesByGender[
      gender as keyof typeof categoriesByGender
    ] || categoriesByGender.men;

  return (
    <aside className="w-64 hidden md:block">
      <nav className="space-y-2">
        {categories.map((category, index) => {
          const isActive =
            pathname === category.route;
          return (
            <a
              key={index}
              href={category.route ?? "#"}
              className={`text-sm font-bold block py-1 ${isActive ? "text-purple-600 font-bold" : "hover:text-purple-600"}`}
            >
              {category.name}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
