import * as React from "react";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(function Input(
  { className, type, ...props },
  ref
) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-[#F6F6F6] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

const InputSearch = React.forwardRef(function Input(
  { className, type, ...props },
  ref
) {
  return (
    <div className="w-[267px] h-[44px] flex items-center gap-2 px-4 rounded-md  bg-[#F6F6F6] text-[#807D7E] ">
      <Search size={20} />
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md bg-[#F6F6F6] px-3 py-2 text-sm text-[#3C4242] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});

Input.displayName = "Input";
InputSearch.displayName = "InputSearch";

export { Input, InputSearch };
