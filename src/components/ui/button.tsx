import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils.js"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-[#242525] text-white hover:bg-[#3A3A3A] rounded-2xl inline-flex items-center justify-center gap-2",
        //secondary: "bg-[#F4976C] text-white hover:bg-opacity-90 rounded-2xl",
        outline: "bg-white text-[#242525] border border-[#D8D8D8] hover:bg-[#EDEDED] rounded-2xl",
        ghost: "text-[#242525] hover:bg-[#EDEDED] rounded-xl",
        gradient: "bg-gradient-to-r from-[#242525] to-[#4D4D4D] text-white hover:scale-105 rounded-2xl shadow-lg",
        link: "text-[#242525] hover:underline",
        //destructive: "bg-red-500 text-white hover:bg-red-600 rounded-2xl",
        action: " mt-6 w-full bg-[#242525] text-white hover:bg-[#3A3A3A] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 gap-2",
        choose: "mt-8 bg-[#242525] text-white hover:bg-[#3A3A3A] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 gap-2",
      },
      size: {
        default: "h-12 px-5 py-3 text-sm font-medium",
        sm: "h-10 px-4 py-2 text-sm",
        lg: "h-14 px-6 py-4 text-base",
        xl: "h-16 px-8 py-4 text-lg",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
