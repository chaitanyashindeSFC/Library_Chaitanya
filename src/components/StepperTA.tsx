import React from "react";
import { Check, ArrowRight } from "lucide-react";

function Stepper({ children, className = "" }: any) {
  return (
    <div className={`w-full bg-white rounded-md shadow-sm px-6 py-3 flex flex-wrap items-center gap-6 ${className}`}>{children}</div>
  );
}

function Step({ index, label, currentStep = 1, color = "#173B4E", totalSteps }: any) {
  const stepNumber = index + 1;
  const isCompleted = stepNumber < currentStep;
  const isActive = stepNumber === currentStep;

  const circleStyle: any = {
    backgroundColor: isCompleted ? color : "transparent",
    borderColor: isCompleted || isActive ? color : "#D1D5DB",
    color: isCompleted ? "#fff" : isActive ? color : "#9CA3AF",
  };

  const labelStyle = { color: isCompleted || isActive ? color : "#9CA3AF" };

  return (
    <div className="flex items-center">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-6 h-6 rounded-full border text-sm font-semibold transition-all duration-300" style={circleStyle}>
          {isCompleted ? <Check size={14} /> : stepNumber}
        </div>
        <span className="text-sm font-medium" style={labelStyle}>
          {label}
        </span>
      </div>
      {stepNumber < totalSteps && <StepConnector color={color} />}
    </div>
  );
}

function StepConnector({ color = "#D1D5DB" }: any) {
  return (
    <div className="flex items-center justify-center mx-2">
      <ArrowRight size={16} style={{ color }} />
    </div>
  );
}

function StepList({ steps = [], currentStep = 1, color = "#173B4E" }: any) {
  return <>{steps.map((step: any, i: number) => (<Step key={i} index={i} label={step.label} currentStep={currentStep} totalSteps={steps.length} color={color} />))}</>;
}

function StepperRoot({ steps = [], currentStep = 1, color = "#173B4E", className = "" }: any) {
  return (
    <Stepper className={className}>
      <StepList steps={steps} currentStep={currentStep} color={color} />
    </Stepper>
  );
}

export { StepperRoot as Stepper, Step, StepList, StepConnector };
