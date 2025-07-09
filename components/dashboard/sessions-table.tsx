import { CalendarDays, Clock, MoreHorizontal, Pencil, Users } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const sessions = [
  {
    id: "1",
    title: "Web Development Basics",
    course: "Introduction to Web Development",
    instructor: "John Smith",
    date: "2023-11-20",
    time: "10:00 AM - 12:00 PM",
    location: "Room 101",
    status: "Scheduled",
    attendees: 24,
    capacity: 30,
  },
  {
    id: "2",
    title: "JavaScript Advanced Concepts",
    course: "Advanced JavaScript",
    instructor: "Emily Johnson",
    date: "2023-11-21",
    time: "2:00 PM - 4:00 PM",
    location: "Room 102",
    status: "Scheduled",
    attendees: 18,
    capacity: 25,
  },
  {
    id: "3",
    title: "UI/UX Design Workshop",
    course: "UX/UI Design Fundamentals",
    instructor: "Michael Brown",
    date: "2023-11-22",
    time: "9:00 AM - 11:00 AM",
    location: "Room 103",
    status: "Scheduled",
    attendees: 15,
    capacity: 20,
  },
  {
    id: "4",
    title: "Data Science Introduction",
    course: "Data Science Bootcamp",
    instructor: "Sarah Wilson",
    date: "2023-11-23",
    time: "1:00 PM - 3:00 PM",
    location: "Room 104",
    status: "Scheduled",
    attendees: 20,
    capacity: 25,
  },
  {
    id: "5",
    title: "Digital Marketing Strategies",
    course: "Digital Marketing Masterclass",
    instructor: "David Lee",
    date: "2023-11-24",
    time: "11:00 AM - 1:00 PM",
    location: "Room 105",
    status: "Scheduled",
    attendees: 12,
    capacity: 20,
  },
  {
    id: "6",
    title: "Mobile App Development Workshop",
    course: "Mobile App Development",
    instructor: "Jennifer Garcia",
    date: "2023-11-25",
    time: "10:00 AM - 12:00 PM",
    location: "Room 101",
    status: "Cancelled",
    attendees: 0,
    capacity: 25,
  },
  {
    id: "7",
    title: "Machine Learning Fundamentals",
    course: "Machine Learning Fundamentals",
    instructor: "Robert Taylor",
    date: "2023-11-26",
    time: "2:00 PM - 4:00 PM",
    location: "Room 102",
    status: "Scheduled",
    attendees: 22,
    capacity: 25,
  },
]

export function SessionsTable() {
  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Session</TableHead>
              <TableHead>Instructor</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Attendees</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sessions.map((session) => (
              <TableRow key={session.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{session.title}</div>
                    <div className="text-xs text-muted-foreground">{session.course}</div>
                  </div>
                </TableCell>
                <TableCell>{session.instructor}</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <div className="flex items-center text-xs">
                      <CalendarDays className="mr-1 h-3 w-3" />
                      {session.date}
                    </div>
                    <div className="flex items-center text-xs">
                      <Clock className="mr-1 h-3 w-3" />
                      {session.time}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{session.location}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      session.status === "Scheduled"
                        ? "default"
                        : session.status === "Cancelled"
                          ? "destructive"
                          : "outline"
                    }
                  >
                    {session.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Users className="mr-1 h-4 w-4" />
                    {session.attendees}/{session.capacity}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">More options</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Edit session</DropdownMenuItem>
                        <DropdownMenuItem>Manage attendees</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Send notification</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Cancel session</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
