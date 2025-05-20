"use client"

import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"
import { toast } from "sonner"

export function CopyCode({ code }: { code: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    toast.success("Code copied to clipboard!")
  }

  return (
    <div className="relative mt-3 rounded-md bg-muted p-3 text-sm">
      <pre className="whitespace-pre-wrap font-poppins font-extrabold">
        <code>{code}</code>
      </pre>
      <Button
        size="sm"
        variant="ghost"
        className="absolute cursor-pointer top-2 right-2 text-xs"
        onClick={handleCopy}
      >
        <Copy className="h-4 w-4 mr-1" />
      </Button>
    </div>
  )
}
