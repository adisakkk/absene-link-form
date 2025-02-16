"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import GeneratedLink from "./GeneratedLink"

export default function AbsenceRequestForm() {
  const [formData, setFormData] = useState({
    date: "",
    subject: "",
    professor: "",
    studentName: "",
    studentId: "",
    phoneNumber: "",
    absenceDate: "",
    reason: "",
  })
  const [generatedId, setGeneratedId] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/submit-absence", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (data.id) {
        setGeneratedId(data.id)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  if (generatedId) {
    return <GeneratedLink id={generatedId} />
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <Image src="/placeholder.svg?height=80&width=150" alt="Warwick Institute Logo" width={150} height={80} />
      </div>

      <h1 className="text-2xl font-bold text-center mb-6">Absence Request Form</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="date">Date</Label>
          <Input type="date" id="date" name="date" required onChange={handleChange} value={formData.date} />
        </div>

        <div>
          <Label htmlFor="subject">Subject</Label>
          <Input type="text" id="subject" name="subject" required onChange={handleChange} value={formData.subject} />
        </div>

        <div>
          <Label htmlFor="professor">To Professor</Label>
          <Input
            type="text"
            id="professor"
            name="professor"
            required
            onChange={handleChange}
            value={formData.professor}
          />
        </div>

        <div>
          <Label htmlFor="studentName">Student Name</Label>
          <Input
            type="text"
            id="studentName"
            name="studentName"
            required
            onChange={handleChange}
            value={formData.studentName}
          />
        </div>

        <div>
          <Label htmlFor="studentId">Student ID</Label>
          <Input
            type="text"
            id="studentId"
            name="studentId"
            required
            onChange={handleChange}
            value={formData.studentId}
          />
        </div>

        <div>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            required
            onChange={handleChange}
            value={formData.phoneNumber}
          />
        </div>

        <div>
          <Label htmlFor="absenceDate">Absence Date</Label>
          <Input
            type="date"
            id="absenceDate"
            name="absenceDate"
            required
            onChange={handleChange}
            value={formData.absenceDate}
          />
        </div>

        <div>
          <Label htmlFor="reason">Reason for Absence</Label>
          <Textarea id="reason" name="reason" rows={4} required onChange={handleChange} value={formData.reason} />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="text-center">
            <div className="border-t border-gray-300 mt-12 pt-2">Student's Signature</div>
          </div>
          <div className="text-center">
            <div className="border-t border-gray-300 mt-12 pt-2">Parent's/Guardian's Signature</div>
          </div>
        </div>

        <Button type="submit" className="w-full mt-6">
          Submit
        </Button>
      </form>

      <div className="mt-8 p-4 bg-gray-100 rounded-md">
        <h3 className="font-bold mb-2">Notes:</h3>
        <p className="text-sm mb-2">
          1. Students are allowed to take leave for <span className="font-bold">no more than 25%</span> of the total
          number of classes in the course they are requesting leave for.
        </p>
        <p className="text-sm">
          2. Some classes may not be video recorded as they involve practical exercises or hands-on practice. The
          management of class activities is at the discretion of the instructor.
        </p>
      </div>
    </div>
  )
}

