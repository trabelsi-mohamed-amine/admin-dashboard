import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock } from "lucide-react"

const sessions = [
  {
    id: "1",
    title: "Web Development Basics",
    instructor: "John Smith",
    date: "2023-11-20",
    time: "10:00 AM - 12:00 PM",
    students: 24,
  },
  {
    id: "2",
    title: "JavaScript Advanced Concepts",
    instructor: "Emily Johnson",
    date: "2023-11-21",
    time: "2:00 PM - 4:00 PM",
    students: 18,
  },
  {
    id: "3",
    title: "UI/UX Design Workshop",
    instructor: "Michael Brown",
    date: "2023-11-22",
    time: "9:00 AM - 11:00 AM",
    students: 15,
  },
  {
    id: "4",
    title: "Data Science Introduction",
    instructor: "Sarah Wilson",
    date: "2023-11-23",
    time: "1:00 PM - 3:00 PM",
    students: 20,
  },
  {
    id: "5",
    title: "Digital Marketing Strategies",
    instructor: "David Lee",
    date: "2023-11-24",
    time: "11:00 AM - 1:00 PM",
    students: 12,
  },
]

export function UpcomingSessions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Sessions</CardTitle>
        <CardDescription>Scheduled course sessions for the next few days.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sessions.map((session) => (
            <div key={session.id} className="rounded-lg border p-3">
              <h3 className="font-medium">{session.title}</h3>
              <p className="text-sm text-muted-foreground">Instructor: {session.instructor}</p>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center text-xs text-muted-foreground">
                  <CalendarDays className="mr-1 h-3 w-3" />
                  {session.date}
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="mr-1 h-3 w-3" />
                  {session.time}
                </div>
              </div>
              <div className="mt-2 text-xs">
                <span className="rounded-full bg-muted px-2 py-0.5">{session.students} students</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Button variant="outline" size="sm" asChild>
            <a href="/dashboard/sessions">View All Sessions</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
