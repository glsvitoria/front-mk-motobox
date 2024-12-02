"use client";

import * as React from "react";

import * as Icons from "@/assets/icons";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    const [inputValue, setInputValue] = React.useState(props.value?.toString());

    return (
      <div className="w-full rounded-lg bg-foundation-black-12 p-4">
        <div className="flex items-center gap-2 rounded-sm border border-foundation-orange-300 px-4 py-2 focus-within:ring-1 focus-within:ring-foundation-orange-300">
          <Icons.OrangeDot className="h-4 w-4" />
          <input
            type={type}
            className={cn(
              "flex h-6 w-full bg-transparent px-3 py-2 text-base text-[#7E7D7E] outline-none placeholder:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
              className,
            )}
            ref={ref}
            onChange={(e) => {
              setInputValue(e.target.value);
              props.onChange?.(e);
            }}
            {...props}
          />
          <button
            className="rounded-sm bg-foundation-orange-300 p-2 transition-colors duration-300 hover:bg-foundation-orange-400"
            type="submit"
          >
            <Search size={24} className="text-white" />
          </button>
        </div>

        {inputValue && (
          <p className="mt-2 text-[#7E7D7E]">
            Pesquisando por: &quot;{inputValue}&quot;
          </p>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
