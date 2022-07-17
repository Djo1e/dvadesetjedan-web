import { Popover as HeadlessPopover } from "@headlessui/react";
import { ReactNode } from "react";

interface PopoverProps {
  options: { value: string; label: string; href: string }[];
  children: ReactNode;
}

export function Popover({ children, options }: PopoverProps) {
  console.log({ options });
  return (
    <HeadlessPopover className="relative">
      <HeadlessPopover.Button>{children}</HeadlessPopover.Button>

      <HeadlessPopover.Panel className="absolute z-10 bg-orange w-full">
        <div className="flex flex-col">
          {options.map(({ value, label, href }) => (
            <a key={value} className="text-sm" href={href}>
              {label}
            </a>
          ))}
        </div>
      </HeadlessPopover.Panel>
    </HeadlessPopover>
  );
}
