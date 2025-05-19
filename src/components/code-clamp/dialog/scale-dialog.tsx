"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  AnimatedDialog,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
  type AnimatedDialogProps,
} from "./base-dialog"

interface ScaleDialogProps extends Omit<AnimatedDialogProps, "variant"> {
  title?: React.ReactNode
  description?: React.ReactNode
  triggerText?: string
  confirmText?: string
  cancelText?: string
  onConfirm?: () => void
  showFooter?: boolean
}

export function ScaleDialog({
  title,
  description,
  children,
  triggerText = "Open Dialog",
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  showFooter = true,
  className,
  ...props
}: ScaleDialogProps) {
  const [open, setOpen] = React.useState(false)

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm()
    }
    setOpen(false)
  }

  return (
    <AnimatedDialog
      trigger={
        <Button variant="outline" onClick={() => setOpen(true)}>
          {triggerText}
        </Button>
      }
      variant="scale"
      duration={0.3}
      open={open}
      onOpenChange={setOpen}
      className={cn("sm:max-w-[425px]", className)}
      {...props}
    >
      {title && (
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
      )}

      <div className="py-4">{children}</div>

      {showFooter && (
        <DialogFooter className="gap-2 sm:gap-0">
          <DialogClose asChild>
            <Button variant="outline">{cancelText}</Button>
          </DialogClose>
          <Button onClick={handleConfirm}>{confirmText}</Button>
        </DialogFooter>
      )}
    </AnimatedDialog>
  )
}
