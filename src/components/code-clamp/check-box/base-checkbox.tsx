"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

export interface AnimatedCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  duration?: number;
  className?: string;
  checkboxClassName?: string;
  labelClassName?: string;
  descriptionClassName?: string;
}

export const BaseCheckbox = React.forwardRef<
  HTMLInputElement,
  AnimatedCheckboxProps
>(
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
    ref,
  ) => {
    const id = React.useId();
    const [checked, setChecked] = React.useState(props.checked || false);

    React.useEffect(() => {
      if (props.checked !== undefined) {
        setChecked(props.checked);
      }
    }, [props.checked]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (props.onChange) {
        props.onChange(e);
      }
      if (props.checked === undefined) {
        setChecked(e.target.checked);
      }
    };

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
            animate={{
              backgroundColor: checked
                ? "var(--checkbox-bg, hsl(var(--primary)))"
                : "transparent",
              borderColor: checked
                ? "var(--checkbox-border, hsl(var(--primary)))"
                : "hsl(var(--input))",
            }}
            transition={{ duration }}
            className={cn(
              "flex h-5 w-5 items-center justify-center rounded border",
              "focus-within:ring-2 focus-within:ring-offset-2 focus-within:outline-none",
              "focus-within:ring-ring focus-within:ring-offset-background",
              checkboxClassName,
            )}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: checked ? 1 : 0 }}
              transition={{ duration }}
            >
              <CheckIcon className="text-primary-foreground h-3 w-3" />
            </motion.div>
          </motion.div>
        </div>
        {(label || description) && (
          <div className="grid gap-1.5 leading-none">
            {label && (
              <label
                htmlFor={props.id || id}
                className={cn(
                  "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                  labelClassName,
                )}
              >
                {label}
              </label>
            )}
            {description && (
              <p
                className={cn(
                  "text-muted-foreground text-sm",
                  descriptionClassName,
                )}
              >
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    );
  },
);

BaseCheckbox.displayName = "BaseCheckbox";
