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
}: ButtonTAProps) {
  React.useEffect(() => {
    if (document.getElementById("truearmor-buttonTA-styles")) return;

    const style = document.createElement("style");
    style.id = "truearmor-buttonTA-styles";
    style.innerHTML = `
      .buttonTA {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        border-radius: 8px;
        padding: 8px 12px;
        width: 128px;
        height: 37px;
        position: relative;
        overflow: hidden;
        font-size: 14px;
        font-weight: 500;
        font-family: 'Montserrat', sans-serif;
        transition: all 0.2s ease;
      }
      .buttonTA-primary { background-color: #173B4E; color: #fff; border: none; }
      .buttonTA-primary:hover:not(:disabled) { background-color: #102A3A; }
      .buttonTA-primary:disabled { background-color: #C4C4C4; color: #fff; cursor: not-allowed; }

      .buttonTA-secondary { color: #173B4E; background-color: #fff; border: 1px solid #173B4E; }
      .buttonTA-secondary:hover:not(:disabled) { background-color: #F5F8FA; }
      .buttonTA-secondary:disabled { color: #C4C4C4; border: 1px solid #C4C4C4; cursor: not-allowed; }

      .buttonTA-tertiary { color: rgba(8,51,68,0.8); background-color: transparent; border: 1px solid transparent; }
      .buttonTA-tertiary:hover:not(:disabled) { background-color: #F0F4F7; text-decoration: underline; }
      .buttonTA-tertiary:disabled { color: #C4C4C4; background-color: transparent; cursor: not-allowed; }

      .buttonTA-inner { display: flex; align-items: center; justify-content: center; gap: 8px; }
      .buttonTA-inner.reverse { flex-direction: row-reverse; }
    `;
    document.head.appendChild(style);
  }, []);

  const variantClass = `buttonTA-${buttonType}`;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`buttonTA ${variantClass} ${customCss}`}
    >
      <div
        className={`buttonTA-inner ${
          iconPosition === "after" ? "" : "reverse"
        }`}
      >
        {icon && <span>{icon}</span>}
        <span>{label}</span>
      </div>
    </button>
  );
}
