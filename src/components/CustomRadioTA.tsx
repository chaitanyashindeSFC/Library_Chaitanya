import React from "react";

function Radio({ checked = false, onChange = () => {}, name = "", className = "" }: any) {
  return (
    <div className={`relative w-4 h-4 flex items-center justify-center ${className}`}>
      <div
        className={`w-4 h-4 rounded-full border-2 transition-colors duration-200 ${
          checked ? "border-[#173B4E]" : "border-[#6B7280]"
        }`}
      />
      {checked && <div className="absolute w-2 h-2 rounded-full bg-[#173B4E]" />}
      <input type="radio" name={name} checked={checked} onChange={onChange} className="hidden" />
    </div>
  );
}

function RadioLabel({ children, checked = false, className = "" }: any) {
  return (
    <span
      className={`text-sm font-medium font-['Montserrat'] leading-5 select-none transition-colors duration-200 ${
        checked ? "text-[#111928]" : "text-[#6B7280]"
      } ${className}`}
    >
      {children}
    </span>
  );
}

function RadioGroupItem({ label = "Default radio", name = "custom-radio", checked = false, onChange = () => {}, className = "" }: any) {
  return (
    <label className={`flex items-center gap-2 cursor-pointer ${className}`}>
      <Radio checked={checked} onChange={onChange} name={name} />
      <RadioLabel checked={checked}>{label}</RadioLabel>
    </label>
  );
}

export { Radio, RadioLabel, RadioGroupItem };
