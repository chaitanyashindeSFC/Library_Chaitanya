import React from "react";
import {
  Accordion,
  AccordionPanel,
  AccordionTitle as FlowbiteAccordionTitle,
  AccordionContent,
} from "flowbite-react";

interface AccordionTAProps {
  className?: string;
}

function AccordionTitle(props: any) {
  return (
    <FlowbiteAccordionTitle
      {...props}
      className={`!text-[#1B1B1B] !border-gray-200 
        focus:outline-none active:outline-none focus:ring-0 
        !outline-none !ring-0 ${props.className || ""}`}
    />
  );
}

function StyledAccordion({ className = "", ...props }: AccordionTAProps & any) {
  return (
    <Accordion
      {...props}
      className={`!border !border-gray-200 !rounded-lg !shadow-none ${className}`}
    />
  );
}

export default StyledAccordion;
export { AccordionPanel, AccordionTitle, AccordionContent };
