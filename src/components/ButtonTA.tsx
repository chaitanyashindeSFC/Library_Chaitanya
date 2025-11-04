import React from "react";

interface ButtonTAProps {
  label?: string;
  customCss?: string;
  icon?: React.ReactNode;
  iconPosition?: "before" | "after";
  buttonType?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function ButtonTA({
  label = "Click Me",
  customCss = "",
  icon,
  iconPosition = "after",
  buttonType = "primary",
  disabled = false,
  onClick,
  type = "button",
}: ButtonTAProps) {  // ✅ tell TS this function uses ButtonTAProps
  const baseClass =
    "flex items-center justify-center gap-2 rounded-md px-3 py-2 w-32 h-9 text-sm font-medium font-[Montserrat] transition-all duration-200 ease-in-out";

  const variants = {
    primary:
      "bg-[#173B4E] text-white border-none hover:bg-[#102A3A] disabled:bg-[#C4C4C4] disabled:text-white disabled:cursor-not-allowed",
    secondary:
      "text-[#173B4E] bg-white border border-[#173B4E] hover:bg-[#F5F8FA] disabled:text-[#C4C4C4] disabled:border-[#C4C4C4] disabled:cursor-not-allowed",
    tertiary:
      "text-[rgba(8,51,68,0.8)] bg-transparent border border-transparent hover:bg-[#F0F4F7] hover:underline disabled:text-[#C4C4C4] disabled:cursor-not-allowed",
  };

  const variantClass = variants[buttonType] || variants.primary;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClass} ${variantClass} ${customCss}`}
    >
      <div
        className={`flex items-center justify-center gap-2 ${
          iconPosition === "after" ? "" : "flex-row-reverse"
        }`}
      >
        {icon && <span>{icon}</span>}
        <span>{label}</span>
      </div>
    </button>
  );
}
