import React, { createContext, useContext } from "react";

type BadgeTheme = { bg: string; text: string };

const BadgeContext = createContext<BadgeTheme | null>(null);

function useBadgeContext() {
  const ctx = useContext(BadgeContext);
  if (!ctx) throw new Error("Badge subcomponents must be used within <Badge>");
  return ctx;
}

const colorThemes: Record<string, BadgeTheme> = {
  failure: { bg: "#FDE8E8", text: "#9B1C1C" },
  success: { bg: "#E6F9EE", text: "#166534" },
  warning: { bg: "#FFF7E0", text: "#92400E" },
  info: { bg: "#E0F2FE", text: "#1E3A8A" },
  neutral: { bg: "#F3F4F6", text: "#1B1B1B" },
};

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

function Badge({ color = "info", children, className = "", style, ...props }: BadgeProps) {
  const theme = colorThemes[color] || colorThemes.info;
  return (
    <BadgeContext.Provider value={theme}>
      <div
        className={`w-auto inline-flex self-start items-center gap-1.5 px-2.5 py-0.5 rounded-md ${className}`}
        style={{ backgroundColor: theme.bg, ...(style || {}) }}
        {...props}
      >
        {children}
      </div>
    </BadgeContext.Provider>
  );
}

function BadgeIcon({ icon: Icon, className = "" }: { icon?: any; className?: string }) {
  const { text } = useBadgeContext();
  if (!Icon) return null;
  return <Icon className={`w-3.5 h-3.5 ${className}`} strokeWidth={2} color={text} />;
}

function BadgeLabel({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
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

function BadgeTA({ icon: Icon, label, color = "info", className = "", style }: any) {
  return (
    <Badge color={color} className={className} style={style}>
      {Icon && <BadgeIcon icon={Icon} />}
      <BadgeLabel>{label}</BadgeLabel>
    </Badge>
  );
}

export default BadgeTA;
export { Badge, BadgeIcon, BadgeLabel };
