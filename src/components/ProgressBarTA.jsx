"use client";
import React from "react";

/* -------------------------------------------------------------------------- */
/* ⚙️ Root Container                                                          */
/* -------------------------------------------------------------------------- */
function Progress({ children, className = "" }) {
  return <div className={`flex flex-col items-center gap-1 w-80 ${className}`}>{children}</div>;
}

/* -------------------------------------------------------------------------- */
/* 🏷️ Label                                                                  */
/* -------------------------------------------------------------------------- */
function ProgressLabel({ value = 0, className = "" }) {
  return (
    <div className={`w-full flex justify-end ${className}`}>
      <span className="text-[#6B7280] font-medium text-sm">{value}%</span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 📊 Bar                                                                     */
/* -------------------------------------------------------------------------- */
function ProgressBar({ progress = 25, height = "h-2", className = "" }) {
  return (
    <div
      className={`relative w-full ${height} bg-[#E5E7EB] rounded-full overflow-hidden ${className}`}
    >
      <div
        className="absolute left-0 top-0 h-full rounded-full transition-all duration-300 ease-in-out"
        style={{
          width: `${progress}%`,
          backgroundColor: "#173B4E",
        }}
      ></div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 🧩 Compound Wrapper                                                        */
/* -------------------------------------------------------------------------- */
function ProgressGroup({ progress = 25, height = "h-2", showLabel = true, className = "" }) {
  return (
    <Progress className={className}>
      {showLabel && <ProgressLabel value={progress} />}
      <ProgressBar progress={progress} height={height} />
    </Progress>
  );
}

/* -------------------------------------------------------------------------- */
/* 📤 Exports                                                                 */
/* -------------------------------------------------------------------------- */
export { Progress, ProgressLabel, ProgressBar, ProgressGroup };
