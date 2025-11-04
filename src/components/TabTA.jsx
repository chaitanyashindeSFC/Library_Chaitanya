"use client";
import React from "react";

/* -------------------------------------------------------------------------- */
/* 🌟 Tab Item (Pure UI) */
/* -------------------------------------------------------------------------- */
function TabTA({ title, icon: Icon, active, disabled, onClick }) {
  const baseStyles =
    "inline-flex items-center justify-center p-3 border-b-2 rounded-t-lg transition-all duration-150 font-medium text-sm font-['Montserrat']";

  const activeStyles = active
    ? "text-[#173B4E] border-[#173B4E] font-semibold"
    : "text-gray-500 border-transparent hover:text-[#173B4E]/80 hover:border-gray-300";

  const iconColor = active ? "#173B4E" : "#9CA3AF";

  return (
    <button
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      className={`${baseStyles} ${activeStyles} ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`}
    >
      {Icon && <Icon size={16} color={iconColor} className="mr-2" />}
      {title}
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/* 🌿 Tabs List Wrapper */
/* -------------------------------------------------------------------------- */
function TabListTA({ tabs = [], activeTab, onChange }) {
  return (
    <ul className="flex flex-wrap border-b border-gray-200">
      {tabs.map((tab) => (
        <li key={tab.title}>
          <TabTA
            title={tab.title}
            icon={tab.icon}
            disabled={tab.disabled}
            active={activeTab === tab.title}
            onClick={() => onChange(tab.title)}
          />
        </li>
      ))}
    </ul>
  );
}

/* -------------------------------------------------------------------------- */
/* ✅ Exports (only UI components, no internal logic) */
/* -------------------------------------------------------------------------- */
export { TabTA, TabListTA };
