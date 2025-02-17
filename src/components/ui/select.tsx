"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<
    typeof SelectPrimitive.Trigger
  >,
  React.ComponentPropsWithoutRef<
    typeof SelectPrimitive.Trigger
  >
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between border border-black bg-background px-4 py-2 text-sm hover:bg-gray-300 transition-all",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName =
  SelectPrimitive.Trigger.displayName;

interface SelectContentProps
  extends React.ComponentPropsWithoutRef<
    typeof SelectPrimitive.Content
  > {
  onSave?: () => void;
  onCancel?: () => void;
}

const SelectContent = React.forwardRef<
  React.ElementRef<
    typeof SelectPrimitive.Content
  >,
  SelectContentProps
>(
  (
    {
      className,
      children,
      position = "popper",
      onSave,
      onCancel,
      ...props
    },
    ref
  ) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cn(
          "relative z-50 min-w-[200px] overflow-hidden border border-black bg-white text-black shadow-md",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectPrimitive.Viewport className="p-0">
          {children}
        </SelectPrimitive.Viewport>
        <div className="flex border-t border-black">
          <button
            onClick={(e) => {
              e.preventDefault();
              onCancel?.();
            }}
            className="flex-1 px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 transition-colors"
          >
            Annulla
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              onSave?.();
            }}
            className="flex-1 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            Salva
          </button>
        </div>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
);
SelectContent.displayName =
  SelectPrimitive.Content.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<
    typeof SelectPrimitive.Item
  >
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center justify-between border-b border-black last:border-b-0 py-3 px-6 text-sm outline-none hover:bg-gray-100 transition-colors data-[state=checked]:font-bold",
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>
      {children}
    </SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator>
      <Check className="h-4 w-4" />
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
));
SelectItem.displayName =
  SelectPrimitive.Item.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
};
