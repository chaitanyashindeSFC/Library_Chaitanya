import React from "react";

interface AlertTAProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  type?: "info" | "success" | "error" | "warning";
}

/**
 * AlertTA - Simple, reusable alert box.
 */
const AlertTA: React.FC<AlertTAProps> = ({
  title,
  description,
  type = "info",
}) => {
  const colorMap: Record<string, string> = {
    info: "bg-blue-50 border-blue-400 text-blue-700",
    success: "bg-green-50 border-green-400 text-green-700",
    error: "bg-red-50 border-red-400 text-red-700",
    warning: "bg-yellow-50 border-yellow-400 text-yellow-700",
  };

  const colors = colorMap[type] || colorMap.info;

  const resolveNode = (value: React.ReactNode) => {
    if (value == null) return null;
    if (React.isValidElement(value)) return value;
    if (typeof value === "string" || typeof value === "number") return value;
    return String(value);
  };

  return (
    <div
      className={`w-fit border-l-4 p-4 rounded-lg shadow-sm ${colors}`}
      role="alert"
    >
      <p className="font-semibold">{resolveNode(title)}</p>
      {description !== undefined && description !== null && (
        <p className="text-sm mt-1">{resolveNode(description)}</p>
      )}
    </div>
  );
};

export default AlertTA;
