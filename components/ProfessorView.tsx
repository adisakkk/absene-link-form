"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import Link from "next/link"

type AbsenceData = {
  id: string
  date: string
  subject: string
  professor: string
  studentName: string
  studentId: string
  phoneNumber: string
  absenceDate: string
  reason: string
}

export default function ProfessorView({ data }: { data: AbsenceData }) {
  const [decision, setDecision] = useState({
    sitInClass: false,
    watchVideo: false,
    completeAssignment: false,
    sitInClassDate: "",
    watchVideoDate: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setDecision((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save the professor's decision
    console.log("Professor decision:", decision)
    alert("Decision submitted successfully!")
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
      <Link href="/" className="mb-4 inline-block">
        <Button variant="outline">← Back to Form</Button>
      </Link>

      <h1 className="text-2xl font-bold text-center mb-6">Absence Request Review</h1>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p>
            <strong>Date:</strong> {data.date}
          </p>
          <p>
            <strong>Subject:</strong> {data.subject}
          </p>
          <p>
            <strong>Student Name:</strong> {data.studentName}
          </p>
          <p>
            <strong>Student ID:</strong> {data.studentId}
          </p>
        </div>
        <div>
          <p>
            <strong>Professor:</strong> {data.professor}
          </p>
          <p>
            <strong>Phone Number:</strong> {data.phoneNumber}
          </p>
          <p>
            <strong>Absence Date:</strong> {data.absenceDate}
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-bold mb-2">Reason for Absence:</h3>
        <p>{data.reason}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="font-bold">Professor's Decision:</h3>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="sitInClass"
            name="sitInClass"
            checked={decision.sitInClass}
            onCheckedChange={(checked) => setDecision((prev) => ({ ...prev, sitInClass: checked as boolean }))}
          />
          <label htmlFor="sitInClass">Sit-in Class on date:</label>
          <Input
            type="date"
            name="sitInClassDate"
            value={decision.sitInClassDate}
            onChange={handleChange}
            disabled={!decision.sitInClass}
            className="ml-2"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="watchVideo"
            name="watchVideo"
            checked={decision.watchVideo}
            onCheckedChange={(checked) => setDecision((prev) => ({ ...prev, watchVideo: checked as boolean }))}
          />
          <label htmlFor="watchVideo">Watch VDO Recording from date:</label>
          <Input
            type="date"
            name="watchVideoDate"
            value={decision.watchVideoDate}
            onChange={handleChange}
            disabled={!decision.watchVideo}
            className="ml-2"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="completeAssignment"
            name="completeAssignment"
            checked={decision.completeAssignment}
            onCheckedChange={(checked) => setDecision((prev) => ({ ...prev, completeAssignment: checked as boolean }))}
          />
          <label htmlFor="completeAssignment">Complete Assignment</label>
        </div>

        <div className="mt-6">
          <Button type="submit" className="w-full">
            Submit Decision
          </Button>
        </div>
      </form>

      <div className="mt-8 text-center">
        <div className="border-t border-gray-300 mt-12 pt-2 inline-block px-8">Professor's Signature</div>
      </div>
    </div>
  )
}

