import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const enrollments = [
  {
    id: "1",
    student: "John Doe",
    course: "Introduction to Web Development",
    date: "2023-11-15",
    status: "Active",
  },
  {
    id: "2",
    student: "Jane Smith",
    course: "Advanced JavaScript Concepts",
    date: "2023-11-14",
    status: "Active",
  },
  {
    id: "3",
    student: "Robert Johnson",
    course: "UX/UI Design Fundamentals",
    date: "2023-11-12",
    status: "Pending",
  },
  {
    id: "4",
    student: "Emily Davis",
    course: "Data Science Bootcamp",
    date: "2023-11-10",
    status: "Active",
  },
  {
    id: "5",
    student: "Michael Wilson",
    course: "Digital Marketing Masterclass",
    date: "2023-11-08",
    status: "Active",
  },
]

export function RecentEnrollments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Enrollments</CardTitle>
        <CardDescription>Latest student enrollments in courses.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {enrollments.map((enrollment) => (
            <div key={enrollment.id} className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                {enrollment.student.charAt(0)}
              </div>
              <div className="space-y-1 flex-1">
                <p className="text-sm font-medium leading-none">
                  <span className="font-semibold">{enrollment.student}</span> enrolled in{" "}
                  <span className="font-semibold">{enrollment.course}</span>
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">{enrollment.date}</p>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      enrollment.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {enrollment.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Button variant="outline" size="sm" asChild>
            <a href="/dashboard/enrollments">View All Enrollments</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
