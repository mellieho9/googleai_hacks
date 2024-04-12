import { ReactNode } from "react";

interface SidebarItemProps {
  icon: ReactNode;
  redirectTo?: () => void;
  title: string;
}

export function SidebarItem({ icon, redirectTo, title }: SidebarItemProps) {
  return (
    <button
      className="z-5 border-transparent flex flex-row p-1 hover:pl-2 active:pl-2 space-x-3 items-center transition ease-in-out delay-150 hover:bg-baby-lime border-l-2 hover:py-2 hover:border-teal focus:border-teal focus:py-2 focus:bg-baby-lime cursor-pointer"
      onClick={redirectTo}
      tabIndex={0}
    >
      <span className="w-5 h-5 text-teal">{icon}</span>
      <h3 className="text-sm font-medium">{title}</h3>
    </button>
  );
}
