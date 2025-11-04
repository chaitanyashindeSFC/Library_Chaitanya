import React from "react";
import BadgeTA from "./BadgeTA";

interface CardTProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "default" | "metric";
  baseColor?: string;
}

function CardT({ children, className = "", type = "default", baseColor = "cyan-900", onClick, ...props }: CardTProps) {
  const types: Record<string, string> = {
    default:
      "bg-[#f9f9f9] border border-gray-300 text-gray-600 hover:shadow-sm rounded-xl transition-all duration-200",
    metric: `bg-white border-l-4 border-${baseColor} shadow-sm rounded-lg transition-all duration-200`,
  };

  const typeStyle = types[type] || types.default;

  return (
    <div onClick={onClick} className={`cursor-pointer ${typeStyle} ${className}`} {...props}>
      {children}
    </div>
  );
}

function CardTitle({ children, className = "" }: any) {
  return <div className={`text-sm font-semibold font-[Montserrat] text-gray-900 ${className}`}>{children}</div>;
}

function CardContent({ children, className = "" }: any) {
  return <div className={`p-3 flex flex-col space-y-2 ${className}`}>{children}</div>;
}

function CardDescription({ children, className = "" }: any) {
  return (
    <p className={`text-xs font-normal font-[Montserrat] text-gray-700 leading-tight ${className}`}>{children}</p>
  );
}

function CardFooter({ repos, badgeColor }: any) {
  return (
    <div className="mt-2">
      <BadgeTA label="Repositories added" value={repos} color={badgeColor || "indigo"} />
    </div>
  );
}

function CardLeftIcon({ icon: Icon, customCss = "", isVisible = true }: any) {
  if (!isVisible || !Icon) return null;
  return <div className={`p-4 flex items-center justify-center flex-shrink-0 ${customCss}`}><Icon className="w-8 h-8" /></div>;
}

function CardRightIcon({ icon: Icon, isVisible = false }: any) {
  if (!isVisible || !Icon) return null;
  return <Icon className="w-6 h-6 text-green-700" />;
}

export default CardT;
export { CardTitle, CardContent, CardDescription, CardFooter, CardLeftIcon, CardRightIcon };
