import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Mon",
    sessions: 4,
  },
  {
    name: "Tue",
    sessions: 6,
  },
  {
    name: "Wed",
    sessions: 8,
  },
  {
    name: "Thu",
    sessions: 5,
  },
  {
    name: "Fri",
    sessions: 7,
  },
  {
    name: "Sat",
    sessions: 3,
  },
  {
    name: "Sun",
    sessions: 2,
  },
]

export function SessionStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Session Distribution</CardTitle>
        <CardDescription>Number of sessions per day this week</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
              <Bar dataKey="sessions" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-xs text-muted-foreground text-center">Total sessions this week: 35</div>
      </CardContent>
    </Card>
  )
}
