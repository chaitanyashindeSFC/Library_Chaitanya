import React, { useState, useRef, useEffect, useContext, createContext } from "react";

const ContextMenuContext = createContext<any>(null);

function ContextMenu({ children, className = "" }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <ContextMenuContext.Provider value={{ isOpen, setIsOpen, menuRef }}>
      <div className={`relative inline-block ${className}`} ref={menuRef}>
        {children}
      </div>
    </ContextMenuContext.Provider>
  );
}

function ContextMenuTrigger({ label, icon, type = "outline", className = "" }: any) {
  const { isOpen, setIsOpen } = useContext(ContextMenuContext);

  const buttonStyles: Record<string, string> = {
    primary: "bg-[#173B4E] text-white px-3 py-2 rounded-md hover:bg-[#0f2530] transition",
    outline: "border border-gray-300 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-100 transition",
    ghost: "text-gray-700 p-2 rounded-md hover:bg-gray-100 transition",
  };

  const Icon = icon;

  return (
    <button onClick={() => setIsOpen((prev: boolean) => !prev)} className={`flex items-center gap-2 ${buttonStyles[type]} ${className}`}>
      {Icon && <Icon size={18} />}
      {label && <span className="text-sm font-medium">{label}</span>}
    </button>
  );
}

function ContextMenuContent({ children, className = "" }: any) {
  const { isOpen } = useContext(ContextMenuContext);
  if (!isOpen) return null;

  return (
    <div className={`absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50 animate-fadeIn ${className}`}>
      <div className="py-1">{children}</div>
    </div>
  );
}

function ContextMenuItem({ icon, label, onClick, className = "" }: any) {
  const { setIsOpen } = useContext(ContextMenuContext);
  const Icon = icon;

  return (
    <button
      onClick={() => {
        setIsOpen(false);
        onClick?.();
      }}
      className={`w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-800 hover:bg-[#F1F5F9] transition ${className}`}
    >
      {Icon && <Icon size={16} />}
      {label}
    </button>
  );
}

function ContextMenuLabel({ children }: any) {
  return <p className="text-xs text-gray-500 px-3 pt-2 pb-1">{children}</p>;
}

function ContextMenuSeparator() {
  return <div className="my-1 border-t border-gray-200" />;
}

function ContextMenuIcon({ icon: Icon, size = 16, className = "" }: any) {
  return Icon ? <Icon size={size} className={className} /> : null;
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuIcon,
};
