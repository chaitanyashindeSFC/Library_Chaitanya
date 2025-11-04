import React from "react";
import {
  Accordion,
  AccordionPanel,
  AccordionTitle as FlowbiteAccordionTitle,
  AccordionContent,
} from "flowbite-react";

// 🌿 Custom AccordionTitle — no outline + text color + border
function AccordionTitle(props) {
  return (
    <FlowbiteAccordionTitle
      {...props}
      className={`!text-[#1B1B1B] !border-gray-200 
        focus:outline-none active:outline-none focus:ring-0 
        !outline-none !ring-0 ${props.className || ""}`}
    />
  );
}

// 🌿 Styled Accordion wrapper with gray border
function StyledAccordion(props) {
  return (
    <Accordion
      {...props}
      className={`!border !border-gray-200 !rounded-lg !shadow-none ${props.className || ""}`}
    />
  );
}

// ✅ Exports (keeps Flowbite names exactly as requested)
export default StyledAccordion;
export { AccordionPanel, AccordionTitle, AccordionContent };
