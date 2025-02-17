import { getMenProducts } from "@/services/api";
import { Sidebar } from "@/components/sidebar";
import { Filters } from "@/components/filters";
import { InfoSection } from "@/components/info-section";

export default async function Page() {
  const products = await getMenProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-2 text-sm mb-4">
        <a
          href="/uomo"
          className="font-extrabold"
        >
          Uomo
        </a>
        <span className="text-gray-400">
          &gt;
        </span>
        <span className="text-gray-400 font-extrabold">
          Abbigliamento
        </span>
      </div>

      <h1 className="text-4xl font-extrabold mb-6">
        Abbigliamento da uomo
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        <Sidebar />
        <main className="flex-1">
          <Filters products={products} />
        </main>
      </div>

      <InfoSection />
    </div>
  );
}
