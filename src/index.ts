// must be the FIRST import in entry point
import "./styles/tailwind.css";
import "./styles/button.css";

// ✅ Components
export { default as ButtonTA } from "./components/ButtonTA";
export { default as DropdownTA } from "./components/DropDownTA";
export {
  DropdownTriggerTA,
  DropdownContentTA,
  DropdownSearchTA,
  DropdownItemTA,
} from "./components/DropDownTA";

export {default as AlertTA} from  "./components/AlertTA";
export { default as TabTA } from "./components/TabTA";
export { TabListTA } from "./components/TabTA";
export { default as BadgeTA } from "./components/BadgeTA";
export { default as CardTA } from "./components/CardTA";
export { CardTitle, CardContent, CardDescription, CardFooter, CardLeftIcon, CardRightIcon } from "./components/CardTA";
export { default as BreadCrumbTA } from "./components/BreadCrumbTA";
export { BreadCrumb, BreadCrumbItem, BreadCrumbSeparator } from "./components/BreadCrumbTA";
export { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuIcon } from "./components/ContextMenuTA";
export { Radio, RadioLabel, RadioGroupItem } from "./components/CustomRadioTA";
export { default as ModalTA } from "./components/ModalTA";
export { Progress, ProgressLabel, ProgressBar, ProgressGroup } from "./components/ProgressBarTA";
export { Stepper, Step, StepList, StepConnector } from "./components/StepperTA";
export { default as AccordionTA } from "./components/AccordionTA";
export { AccordionPanel, AccordionTitle, AccordionContent } from "./components/AccordionTA";