"use client";

import React from "react";
import BadgeT from "./BadgeT";

// 🌿 Main Card wrapper
function CardT({
  children,
  className = "",
  type = "default", // "default" | "metric"
  baseColor = "cyan-900",
  onClick,
}) {
  const types = {
    default:
      "bg-[#f9f9f9] border border-gray-300 text-gray-600 hover:shadow-sm rounded-xl transition-all duration-200",
    metric: `bg-white border-l-4 border-${baseColor} shadow-sm rounded-lg transition-all duration-200`,
  };

  const typeStyle = types[type] || types.default;

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer ${typeStyle} ${className}`}
    >
      {children}
    </div>
  );  
}

// 🌿 Title
function CardTitle({ children, className = "" }) {
  return (
    <div
      className={`text-sm font-semibold font-[Montserrat] text-gray-900 ${className}`}
    >
      {children}
    </div>
  );
}

// 🌿 Content
function CardContent({ children, className = "" }) {
  return (
    <div className={`p-3 flex flex-col space-y-2 ${className}`}>{children}</div>
  );
}

// 🌿 Description
function CardDescription({ children, className = "" }) {
  return (
    <p
      className={`text-xs font-normal font-[Montserrat] text-gray-700 leading-tight ${className}`}
    >
      {children}
    </p>
  );
}

// 🌿 Footer / Badge
function CardFooter({ repos, badgeColor }) {
  return (
    <div className="mt-2">
      <BadgeT
        label="Repositories added"
        value={repos}
        color={badgeColor || "indigo"}
      />
    </div>
  );
}

// 🌿 Left Icon
function CardLeftIcon({ icon: Icon, customCss = "", isVisible = true }) {
  if (!isVisible || !Icon) return null;
  return (
    <div
      className={`p-4 flex items-center justify-center flex-shrink-0 ${customCss}`}
    >
      <Icon className="w-8 h-8" />
    </div>
  );
}

// 🌿 Right Icon
function CardRightIcon({ icon: Icon, isVisible = false }) {
  if (!isVisible || !Icon) return null;
  return <Icon className="w-6 h-6 text-green-700" />;
}

export default CardT;
export {
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
  CardLeftIcon,
  CardRightIcon,
};
