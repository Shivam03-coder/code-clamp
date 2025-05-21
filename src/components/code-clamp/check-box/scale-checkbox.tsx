"use client"

import * as React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { CheckIcon } from 'lucide-react'
import type { AnimatedCheckboxProps } from "./base-checkbox"

export const ScaleCheckbox = React.forwardRef<HTMLInputElement, AnimatedCheckboxProps>(
  (
    {
      className,
      checkboxClassName,
      labelClassName,
      descriptionClassName,
      label,
      description,
      duration = 0.2,
      ...props
    },
    ref
  ) => {
    const id = React.useId()
    const [checked, setChecked] = React.useState(props.checked || false)

    React.useEffect(() => {
      if (props.checked !== undefined) {
        setChecked(props.checked)
      }
    }, [props.checked])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (props.onChange) {
        props.onChange(e)
      }
      if (props.checked === undefined) {
        setChecked(e.target.checked)
      }
    }

    const checkVariants = {
      checked: {
        backgroundColor: "var(--checkbox-bg, hsl(var(--primary)))",
        borderColor: "var(--checkbox-border, hsl(var(--primary)))",
        transition: { duration }
      },
      unchecked: {
        backgroundColor: "transparent",
        borderColor: "hsl(var(--input))",
        transition: { duration }
      }
    }

    const iconVariants = {
      checked: {
        scale: 1,
        opacity: 1,
        transition: { duration }
      },
      unchecked: {
        scale: 0,
        opacity: 0,
        transition: { duration }
      }
    }

    return (
      <div className={cn("flex items-start space-x-2", className)}>
        <div className="relative flex h-6 items-center">
          <input
            type="checkbox"
            id={props.id || id}
            className="sr-only"
            ref={ref}
            checked={checked}
            {...props}
            onChange={handleChange}
          />
          <motion.div
            initial={false}
            animate={checked ? "checked" : "unchecked"}
            variants={checkVariants}
            className={cn(
              "flex h-5 w-5 items-center justify-center rounded border",
              "focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2",
              "focus-within:ring-ring focus-within:ring-offset-background",
              checkboxClassName
            )}
          >
            <motion.div
              initial={false}
              animate={checked ? "checked" : "unchecked"}
              variants={iconVariants}
            >
              <CheckIcon className="h-3 w-3 text-primary-foreground" />
            </motion.div>
          </motion.div>
        </div>
        {(label || description) && (
          <div className="grid gap-1.5 leading-none">
            {label && (
              <label
                htmlFor={props.id || id}
                className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", labelClassName)}
              >
                {label}
              </label>
            )}
            {description && (
              <p className={cn("text-sm text-muted-foreground", descriptionClassName)}>
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    )
  }
)

ScaleCheckbox.displayName = "ScaleCheckbox"
