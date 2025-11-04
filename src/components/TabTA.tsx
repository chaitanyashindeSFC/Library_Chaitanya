import React from "react";

interface TabTAProps {
  title: React.ReactNode;
  icon?: React.ComponentType<{
    size?: number;
    color?: string;
    className?: string;
  }>;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

/**
 * TabTA - small, focused tab button used inside TabListTA.
 * Accepts a `style` prop so callers can pass inline styles like other TA components.
 */
export const TabTA: React.FC<TabTAProps> = ({
  title,
  icon: Icon,
  active = false,
  disabled = false,
  onClick,
  style,
}) => {
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
      style={style}
      className={`${baseStyles} ${activeStyles} ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`}
    >
      {Icon && <Icon size={16} color={iconColor} className="mr-2" />}
      {title}
    </button>
  );
};

interface TabListTAProps {
  tabs?: Array<{
    title: string;
    icon?: React.ComponentType<any>;
    disabled?: boolean;
  }>;
  activeTab?: string;
  onChange?: (title: string) => void;
  style?: React.CSSProperties;
}

export const TabListTA: React.FC<TabListTAProps> = ({
  tabs = [],
  activeTab,
  onChange = () => {},
  style,
}) => {
  return (
    <ul className="flex flex-wrap border-b border-gray-200" style={style}>
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
};

export default TabTA;
