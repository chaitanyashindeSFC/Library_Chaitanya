"use client";

import React, { createContext, useContext } from "react";

// 🧠 Context for shared styling (optional but scalable)
const BreadCrumbContext = createContext();

function useBreadCrumbContext() {
  const ctx = useContext(BreadCrumbContext);
  if (!ctx) throw new Error("BreadCrumb subcomponents must be used within <BreadCrumb>");
  return ctx;
}

// 🌿 Main BreadCrumb wrapper
function BreadCrumb({ children, className = "", separator = "/", ...props }) {
  return (
    <BreadCrumbContext.Provider value={{ separator }}>
      <nav
        aria-label="breadcrumb"
        className={`w-fit flex items-center gap-2 text-xs font-medium font-['Montserrat'] leading-5 ${className}`}
        {...props}
      >
        {children}
      </nav>
    </BreadCrumbContext.Provider>
  );
}

// 🌿 BreadCrumb Item
function BreadCrumbItem({
  label,
  icon: Icon,
  href,
  active = false,
  className = "",
  ...props
}) {
  const textColor = active ? "#122F3E" : "#6B7280";

  const content = (
    <div
      className={`flex items-center gap-2 transition-colors duration-200 ${className}`}
      style={{ color: textColor }}
      {...props}
    >
      {Icon && <Icon size={16} strokeWidth={1.5} color={textColor} />}
      <span
        className={`leading-5 ${
          active ? "font-semibold" : "hover:text-[#4B5563]"
        }`}
      >
        {label}
      </span>
    </div>
  );

  return href && !active ? (
    <a href={href} className="flex items-center w-fit">
      {content}
    </a>
  ) : (
    <div className="w-fit">{content}</div>
  );
}

// 🌿 BreadCrumb Separator
function BreadCrumbSeparator({ icon: Icon, className = "", ...props }) {
  const { separator } = useBreadCrumbContext();
  return (
    <span
      className={`text-[#9CA3AF] text-sm flex items-center ${className}`}
      {...props}
    >
      {Icon ? <Icon size={14} strokeWidth={1.5} /> : separator}
    </span>
  );
}

// 🌿 Combined Default BreadCrumbT (simple usage)
function BreadCrumbT({ items = [], separator = "/", className = "" }) {
  return (
    <BreadCrumb separator={separator} className={className}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <BreadCrumbItem
            label={item.label}
            icon={item.icon}
            href={item.href}
            active={item.active}
          />
          {index < items.length - 1 && <BreadCrumbSeparator />}
        </React.Fragment>
      ))}
    </BreadCrumb>
  );
}

// ✅ Exports
export default BreadCrumbT;
export { BreadCrumb, BreadCrumbItem, BreadCrumbSeparator };
