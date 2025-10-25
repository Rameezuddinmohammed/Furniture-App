import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  name: string;
  icon: LucideIcon;
  onClick?: () => void;
}

export const CategoryCard = ({ name, icon: Icon, onClick }: CategoryCardProps) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 p-4 bg-badge/10 rounded-xl hover:bg-badge/20 transition-colors min-w-[80px]"
    >
      <div className="w-12 h-12 bg-badge/20 rounded-xl flex items-center justify-center">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <span className="text-xs font-medium text-center">{name}</span>
    </button>
  );
};
