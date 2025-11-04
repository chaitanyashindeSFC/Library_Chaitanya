"use client";

import React, { useState, useMemo, createContext, useContext, useEffect } from "react";
import { Search, ChevronDown } from "lucide-react";

// Utility
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Context
const DropdownContextTA = createContext(null);

function useDropdownContextTA() {
  const context = useContext(DropdownContextTA);
  if (!context)
    throw new Error("DropdownTA subcomponents must be used within <DropdownTA>");
  return context;
}

// Root
function DropdownTA({
  children,
  items = [],
  placeholder = "Select an option",
  getItemLabel = (item) => item?.name || "",
  showSearch = true,
  className = "",
  debounceMs = 300, // debounce duration
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // Debounce effect: update debouncedSearchTerm after user stops typing
  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, debounceMs);

    return () => clearTimeout(id);
  }, [searchTerm, debounceMs]);

  // Filter using debouncedSearchTerm so typing is debounced
  const filteredItems = useMemo(() => {
    if (!Array.isArray(items)) return [];
    const term = (debouncedSearchTerm || "").toLowerCase().trim();
    if (!term) return items.slice(); // return all items when no search term
    return items.filter((item) =>
      getItemLabel(item).toLowerCase().includes(term)
    );
  }, [items, debouncedSearchTerm, getItemLabel]);

  const value = {
    isOpen,
    setIsOpen,
    selectedItem,
    setSelectedItem,
    searchTerm,
    setSearchTerm,
    filteredItems,
    placeholder,
    getItemLabel,
    showSearch,
  };

  return (
    <DropdownContextTA.Provider value={value}>
      <div className={cn("relative w-80 font-['Montserrat']", className)}>
        {children}
      </div>
    </DropdownContextTA.Provider>
  );
}

// Trigger
function DropdownTriggerTA() {
  const { isOpen, setIsOpen, selectedItem, placeholder, getItemLabel } =
    useDropdownContextTA();

  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "w-full px-4 py-2.5 bg-[#F9FAFB] rounded-lg border border-[#D1D5DB] flex items-center justify-between outline outline-1 outline-offset-[-1px] transition-all",
        isOpen ? "outline-[#173B4E]" : "outline-[#E5E7EB]"
      )}
    >
      <div className="flex items-center gap-2 overflow-hidden">
        {selectedItem?.avatar && (
          <img
            src={selectedItem.avatar}
            alt={getItemLabel(selectedItem)}
            className="w-6 h-6 rounded-full object-cover"
          />
        )}
        <span
          className={cn(
            "text-sm font-medium truncate",
            selectedItem ? "text-[#1B1B1B]" : "text-[#6B7280]"
          )}
        >
          {selectedItem ? getItemLabel(selectedItem) : placeholder}
        </span>
      </div>

      <ChevronDown
        className={`w-4 h-4 text-[#1B1B1B] transition-transform duration-200 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      />
    </button>
  );
}

// Content
function DropdownContentTA({ children }) {
  const { isOpen } = useDropdownContextTA();
  if (!isOpen) return null;

  return (
    <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-md border border-[#E5E7EB] max-h-80 overflow-y-auto">
      {children}
    </div>
  );
}

// Search
function DropdownSearchTA() {
  const { showSearch, searchTerm, setSearchTerm } = useDropdownContextTA();
  if (!showSearch) return null;

  return (
    <div className="p-3 border-b border-[#E5E7EB] bg-[#F9FAFB]">
      <div className="flex items-center w-full bg-white border border-[#D1D5DB] rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#173B4E] transition-all">
        <Search className="text-gray-500 mr-2" strokeWidth={2} size={18} />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent text-sm text-gray-900 placeholder-gray-500 outline-none border-none focus:ring-0"
        />
      </div>
    </div>
  );
}

// Item
function DropdownItemTA({ item }) {
  const { setSelectedItem, setIsOpen, getItemLabel } = useDropdownContextTA();

  return (
    <div
      className="flex items-center gap-3 px-4 py-2.5 cursor-pointer hover:bg-[#F5F8FA] transition-colors border-b border-[#E5E7EB] last:border-b-0"
      onClick={() => {
        setSelectedItem(item);
        setIsOpen(false);
      }}
    >
      {item.avatar && (
        <img
          src={item.avatar}
          alt={getItemLabel(item)}
          className="w-8 h-8 rounded-full object-cover"
        />
      )}
      <span className="text-sm font-semibold text-[#1B1B1B]">
        {getItemLabel(item)}
      </span>
      {item.isYou && (
        <span className="text-sm font-normal text-[#6B7280]">(You)</span>
      )}
    </div>
  );
}

// Exports
export default DropdownTA;
export {
  DropdownTriggerTA,
  DropdownContentTA,
  DropdownSearchTA,
  DropdownItemTA,
};
