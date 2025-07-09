import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function EnrollmentStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Enrollment Statistics</CardTitle>
        <CardDescription>Enrollment data by course category</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Web Development</div>
              <div className="text-sm text-muted-foreground">42%</div>
            </div>
            <Progress value={42} />
            <div className="text-xs text-muted-foreground">538 enrollments</div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Data Science</div>
              <div className="text-sm text-muted-foreground">28%</div>
            </div>
            <Progress value={28} />
            <div className="text-xs text-muted-foreground">359 enrollments</div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Design</div>
              <div className="text-sm text-muted-foreground">18%</div>
            </div>
            <Progress value={18} />
            <div className="text-xs text-muted-foreground">231 enrollments</div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Marketing</div>
              <div className="text-sm text-muted-foreground">12%</div>
            </div>
            <Progress value={12} />
            <div className="text-xs text-muted-foreground">156 enrollments</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
