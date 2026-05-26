import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import { cn } from "@/lib/utils.js"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {

        default:
          "bg-primary text-primary-foreground hover:bg-primary/90",

        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",

        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",

        ghost:
          "hover:bg-accent hover:text-accent-foreground",

        link:
          "text-primary underline-offset-4 hover:underline",

        /* =========================
           YOUR CUSTOM VARIANTS
        ========================= */

        dark:
          "bg-[#242525] text-white hover:bg-black border border-[#242525]",

        light:
          "bg-[#FDFCFD] text-[#242525] border border-[#C6C6C6] hover:bg-[#E6E6E6]",

        soft:
          "bg-[#E6E6E6] text-[#242525] hover:bg-[#DADADA]",

        danger:
          "bg-red-500 text-white hover:bg-red-600",

      },

      size: {

        default: "h-10 px-4 py-2",

        sm: "h-9 rounded-md px-3",

        lg: "h-11 rounded-md px-8",

        icon: "h-10 w-10",

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
