import { notFound } from "next/navigation"
import ProfessorView from "@/components/ProfessorView"

export default function ProfessorPage({ params }: { params: { id: string } }) {
  // Here you would typically fetch the absence request data from your database using the ID
  // For this example, we'll use mock data
  const mockData = {
    id: params.id,
    date: "2023-05-01",
    subject: "Mathematics",
    professor: "Dr. Smith",
    studentName: "John Doe",
    studentId: "12345",
    phoneNumber: "123-456-7890",
    absenceDate: "2023-05-10",
    reason: "Family emergency",
  }

  if (!mockData) {
    notFound()
  }

  return <ProfessorView data={mockData} />
}

