"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import {
  Dialog as ShadcnDialog,
  DialogContent as ShadcnDialogContent,
  DialogDescription as ShadcnDialogDescription,
  DialogFooter as ShadcnDialogFooter,
  DialogHeader as ShadcnDialogHeader,
  DialogTitle as ShadcnDialogTitle,
  DialogTrigger as ShadcnDialogTrigger,
  DialogClose as ShadcnDialogClose,
} from "@/components/ui/dialog";

type DrawerSide = "top" | "right" | "bottom" | "left";

interface DrawerDialogProps {
  children: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  triggerText?: string;
  side?: DrawerSide;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  showCloseButton?: boolean;
}

export function DrawerDialog({
  children,
  title,
  description,
  triggerText = "Open Drawer",
  side = "right",
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
  className,
  showCloseButton = true,
}: DrawerDialogProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);

  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;
  const onOpenChange = controlledOnOpenChange || setUncontrolledOpen;

  // Animation variants based on side
  const variants = {
    top: {
      initial: { y: "-100%" },
      animate: { y: 0 },
      exit: { y: "-100%" },
    },
    right: {
      initial: { x: "100%" },
      animate: { x: 0 },
      exit: { x: "100%" },
    },
    bottom: {
      initial: { y: "100%" },
      animate: { y: 0 },
      exit: { y: "100%" },
    },
    left: {
      initial: { x: "-100%" },
      animate: { x: 0 },
      exit: { x: "-100%" },
    },
  };

  // Styles based on side
  const sideStyles = {
    top: "inset-x-0 top-0 h-auto rounded-b-lg",
    right: "inset-y-0 right-0 h-full w-3/4 max-w-sm rounded-l-lg",
    bottom: "inset-x-0 bottom-0 h-auto rounded-t-lg",
    left: "inset-y-0 left-0 h-full w-3/4 max-w-sm rounded-r-lg",
  };

  return (
    <ShadcnDialog open={open} onOpenChange={onOpenChange}>
      <ShadcnDialogTrigger asChild>
        <Button variant="outline" onClick={() => onOpenChange(true)}>
          {triggerText}
        </Button>
      </ShadcnDialogTrigger>
      <AnimatePresence>
        {open && (
          <ShadcnDialogContent
            className="border-none bg-transparent p-0 shadow-none"
            forceMount
          >
            <motion.div
              className={cn(
                "bg-background fixed z-50 border shadow-lg",
                sideStyles[side],
                className,
              )}
              initial={variants[side].initial}
              animate={variants[side].animate}
              exit={variants[side].exit}
              transition={{ ease: "easeInOut", duration: 0.3 }}
            >
              <div className="flex h-full flex-col p-6">
                {showCloseButton && (
                  <ShadcnDialogClose className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </ShadcnDialogClose>
                )}

                {title && (
                  <ShadcnDialogHeader>
                    <ShadcnDialogTitle>{title}</ShadcnDialogTitle>
                    {description && (
                      <ShadcnDialogDescription>
                        {description}
                      </ShadcnDialogDescription>
                    )}
                  </ShadcnDialogHeader>
                )}

                <div className="flex-1 overflow-auto py-4">{children}</div>

                <ShadcnDialogFooter className="flex justify-end gap-2">
                  <ShadcnDialogClose asChild>
                    <Button variant="outline">Close</Button>
                  </ShadcnDialogClose>
                </ShadcnDialogFooter>
              </div>
            </motion.div>
          </ShadcnDialogContent>
        )}
      </AnimatePresence>
    </ShadcnDialog>
  );
}
