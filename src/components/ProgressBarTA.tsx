import React from "react";

function Progress({ children, className = "" }: any) {
  return <div className={`flex flex-col items-center gap-1 w-80 ${className}`}>{children}</div>;
}

function ProgressLabel({ value = 0, className = "" }: any) {
  return (
    <div className={`w-full flex justify-end ${className}`}>
      <span className="text-[#6B7280] font-medium text-sm">{value}%</span>
    </div>
  );
}

function ProgressBar({ progress = 25, height = "h-2", className = "" }: any) {
  return (
    <div className={`relative w-full ${height} bg-[#E5E7EB] rounded-full overflow-hidden ${className}`}>
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

function ProgressGroup({ progress = 25, height = "h-2", showLabel = true, className = "" }: any) {
  return (
    <Progress className={className}>
      {showLabel && <ProgressLabel value={progress} />}
      <ProgressBar progress={progress} height={height} />
    </Progress>
  );
}

export { Progress, ProgressLabel, ProgressBar, ProgressGroup };
