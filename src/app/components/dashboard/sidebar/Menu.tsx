import MenuIcons from "./MenuIcons";
import Image from "next/image";

export default function Menu() {
  return (
    <ul className="gap-1">
      {MenuIcons.map((item, index) => {
        const isSelected = item.title === "Payments";
        return (
          <li key={item.title} className={`flex cursor-pointer items-center px-4 py-2 gap-3 ${isSelected ? 'bg-white/10 rounded' : 'hover:bg-white/10'}`}>
            <Image src={item.icon} alt={item.title} width={20} height={20} />
            <span className="text-sm font-medium">{item.title}</span>
          </li>
        );
      })}
    </ul>
  );
}
