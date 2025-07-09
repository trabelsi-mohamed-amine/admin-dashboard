import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CourseStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Performance</CardTitle>
        <CardDescription>Attendance and completion rates</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border p-3">
              <div className="text-xs text-muted-foreground">Average Attendance</div>
              <div className="text-2xl font-bold">87%</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-xs text-muted-foreground">Completion Rate</div>
              <div className="text-2xl font-bold">72%</div>
            </div>
          </div>

          <div className="rounded-lg border p-3">
            <div className="text-xs text-muted-foreground">Most Popular Course</div>
            <div className="text-lg font-medium">Web Development Basics</div>
            <div className="text-xs text-muted-foreground">245 enrollments</div>
          </div>

          <div className="rounded-lg border p-3">
            <div className="text-xs text-muted-foreground">Highest Rated Session</div>
            <div className="text-lg font-medium">JavaScript Advanced Concepts</div>
            <div className="text-xs text-muted-foreground">4.9/5 average rating</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
