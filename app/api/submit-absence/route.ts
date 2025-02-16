import { NextResponse } from "next/server"
import { v4 as uuidv4 } from "uuid"

export async function POST(request: Request) {
  const data = await request.json()
  const id = uuidv4()

  // Here you would typically save the data to a database
  // For this example, we'll just return the generated ID

  // Simulate a delay to show loading state (remove in production)
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return NextResponse.json({ id })
}

