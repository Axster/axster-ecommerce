"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { createQueryString } from "../../utils/createQueryString";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    router.push(
      `?${createQueryString({ search: search })}`
    );
  };

  const handleClear = (
    e: FormEvent<HTMLInputElement>
  ) => {
    if (
      (e.target as HTMLInputElement).value === ""
    ) {
      setSearch("");
      router.push(window.location.pathname);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-50 relative"
    >
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 border-gray-950" />
      <Input
        type="search"
        placeholder="Ricerca"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        onInput={(e) => handleClear(e)}
        className="w-full pl-10 h-9 border-gray-950 rounded-none"
      />
    </form>
  );
};

export default Searchbar;
