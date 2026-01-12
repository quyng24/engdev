import { ReactNode } from "react";

type TagVariant = "green" | "blue" | "yellow" | "gray";

interface TagProps {
  label: string;
  className?: string;
  variant?: TagVariant;
  iconTag?: ReactNode;
}

export function Tag({ label,className = '', variant = "gray", iconTag }: TagProps) {
  const styles: Record<TagVariant, string> = {
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
    yellow: "bg-yellow-100 text-yellow-700 border-2 border-yellow-300",
    gray: "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={`px-2 py-1 text-sm rounded-2xl flex items-center w-fit ${styles[variant]} ${className}`}
    >
        {iconTag}
      {label}
    </span>
  );
}
