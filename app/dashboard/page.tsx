import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { RecentEnrollments } from "@/components/dashboard/recent-enrollments"
import { UpcomingSessions } from "@/components/dashboard/upcoming-sessions"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Overview of enrollments, sessions, and platform statistics.</p>
      </div>
      <DashboardStats />
      <div className="grid gap-6 md:grid-cols-2">
        <RecentEnrollments />
        <UpcomingSessions />
      </div>
    </div>
  )
}
