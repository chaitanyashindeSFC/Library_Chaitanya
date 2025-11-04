"use client";

import React, { createContext, useContext } from "react";

// 🧠 Context for internal composability (optional)
const BadgeContext = createContext();

function useBadgeContext() {
  const ctx = useContext(BadgeContext);
  if (!ctx) throw new Error("Badge subcomponents must be used within <Badge>");
  return ctx;
}

// 🎨 Define color themes (expandable)
const colorThemes = {
  failure: { bg: "#FDE8E8", text: "#9B1C1C" },
  success: { bg: "#E6F9EE", text: "#166534" },
  warning: { bg: "#FFF7E0", text: "#92400E" },
  info: { bg: "#E0F2FE", text: "#1E3A8A" },
  neutral: { bg: "#F3F4F6", text: "#1B1B1B" },
};

// 🌿 Root Badge Wrapper
function Badge({ color = "info", children, className = "", ...props }) {
  const theme = colorThemes[color] || colorThemes.info;
  return (
    <BadgeContext.Provider value={theme}>
      <div
        className={`w-auto inline-flex self-start items-center gap-1.5 px-2.5 py-0.5 rounded-md ${className}`}
        style={{ backgroundColor: theme.bg }}
        {...props}
      >
        {children}
      </div>
    </BadgeContext.Provider>
  );
}

// 🌿 Badge Icon
function BadgeIcon({ icon: Icon, className = "" }) {
  const { text } = useBadgeContext();
  if (!Icon) return null;
  return <Icon className={`w-3.5 h-3.5 ${className}`} strokeWidth={2} color={text} />;
}

// 🌿 Badge Label
function BadgeLabel({ children, className = "" }) {
  const { text } = useBadgeContext();
  return (
    <span
      className={`text-xs font-semibold font-['Montserrat'] uppercase leading-4 ${className}`}
      style={{ color: text }}
    >
      {children}
    </span>
  );
}

// 🌿 Combined default BadgeTA (for simple usage)
function BadgeTA({ icon: Icon, label, color = "info", className = "" }) {
  return (
    <Badge color={color} className={className}>
      {Icon && <BadgeIcon icon={Icon} />}
      <BadgeLabel>{label}</BadgeLabel>
    </Badge>
  );
}

// 🧩 Exports
export default BadgeTA;
export { Badge, BadgeIcon, BadgeLabel };
