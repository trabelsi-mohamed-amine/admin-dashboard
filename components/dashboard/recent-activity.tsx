import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const activities = [
  {
    id: "1",
    user: "John Doe",
    action: "created a new post",
    time: "2 hours ago",
  },
  {
    id: "2",
    user: "Jane Smith",
    action: "updated their profile",
    time: "5 hours ago",
  },
  {
    id: "3",
    user: "Robert Johnson",
    action: "commented on a post",
    time: "1 day ago",
  },
  {
    id: "4",
    user: "Emily Davis",
    action: "uploaded a new file",
    time: "1 day ago",
  },
  {
    id: "5",
    user: "Michael Wilson",
    action: "deleted a comment",
    time: "2 days ago",
  },
  {
    id: "6",
    user: "Sarah Brown",
    action: "subscribed to the newsletter",
    time: "3 days ago",
  },
]

interface RecentActivityProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RecentActivity({ className, ...props }: RecentActivityProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Recent actions performed by users.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                {activity.user.charAt(0)}
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  <span className="font-semibold">{activity.user}</span> {activity.action}
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
