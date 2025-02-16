"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

export default function GeneratedLink({ id }: { id: string }) {
  const [copied, setCopied] = useState(false)
  const link = `${window.location.origin}/professor/${id}`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true)
      toast({
        title: "Link copied!",
        description: "The professor's link has been copied to your clipboard.",
      })
      setTimeout(() => setCopied(false), 3000)
    })
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">Absence Request Submitted</h1>
      <p className="mb-4">
        Your absence request has been submitted successfully. Please share the following link with your professor:
      </p>

      <div className="flex items-center space-x-2 mb-4">
        <Input value={link} readOnly className="flex-grow" />
        <Button onClick={copyToClipboard}>{copied ? "Copied!" : "Copy"}</Button>
      </div>

      <p className="text-sm text-gray-600">
        Note: This link contains your absence request details. Only share it with your professor through a private
        channel.
      </p>

      <div className="mt-6">
        <Button onClick={() => window.open(link, "_blank")} className="w-full">
          Open Professor's View
        </Button>
      </div>
    </div>
  )
}

