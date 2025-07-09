import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const progressData = [
  {
    id: "1",
    course: "Introduction to Web Development",
    progress: 85,
    students: 1245,
  },
  {
    id: "2",
    course: "Advanced JavaScript Concepts",
    progress: 72,
    students: 982,
  },
  {
    id: "3",
    course: "UX/UI Design Fundamentals",
    progress: 68,
    students: 745,
  },
  {
    id: "4",
    course: "Data Science Bootcamp",
    progress: 56,
    students: 892,
  },
]

export function StudentProgress() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Student Progress</CardTitle>
        <CardDescription>Average completion rate by course.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {progressData.map((item) => (
            <div key={item.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">{item.course}</div>
                <div className="text-sm text-muted-foreground">{item.progress}%</div>
              </div>
              <Progress value={item.progress} />
              <div className="text-xs text-muted-foreground">{item.students} students enrolled</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
