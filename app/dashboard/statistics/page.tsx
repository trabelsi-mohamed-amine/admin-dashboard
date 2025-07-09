import { EnrollmentStats } from "@/components/dashboard/enrollment-stats"
import { SessionStats } from "@/components/dashboard/session-stats"
import { CourseStats } from "@/components/dashboard/course-stats"

export default function StatisticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Statistics</h1>
        <p className="text-muted-foreground">Detailed statistics about enrollments and sessions.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <EnrollmentStats />
        <SessionStats />
        <CourseStats />
      </div>
    </div>
  )
}
