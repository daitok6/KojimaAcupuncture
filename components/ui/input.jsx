import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "w-full flex h-[48px] rounded-lg border border-accent/10 bg-primary px-4 py-5 text-base placeholder:text-accent/50 outline-none transition-all duration-200 focus:border-accent/40 focus:ring-2 focus:ring-accent/10",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
