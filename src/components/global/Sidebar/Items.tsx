import { SIDEBAR_MENU } from "@/constants/menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  slug: string;
  page: string;
};
const Items = ({ slug, page }: Props) => {
  console.log("Sidebar items: ", slug, page)
  return SIDEBAR_MENU.map((data, index) => {
    return (
      <Link
        key={data.id}
        href={`/dashboard/${slug}/${data.label === "Home" ? "/" : data.label.toLowerCase()}`}
        className={cn("capitalize flex gap-x-2 rounded-full p-3", 
          page === data.label && "bg-[#0f0f0f]", 
          page === slug && data.label === "Home" ? "bg-[#0f0f0f]" : "text-[#9b9ca1]")}
      >
        {data.icon}
        {data.label}
      </Link>
    );
  });
};
export default Items;
