import { MoreHorizontal, Pencil } from "lucide-react"

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

const students = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    enrolledCourses: 3,
    completedCourses: 2,
    status: "Active",
    joinDate: "2023-05-12",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    enrolledCourses: 5,
    completedCourses: 4,
    status: "Active",
    joinDate: "2023-04-18",
  },
  {
    id: "3",
    name: "Robert Johnson",
    email: "robert@example.com",
    enrolledCourses: 2,
    completedCourses: 0,
    status: "Inactive",
    joinDate: "2023-06-24",
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily@example.com",
    enrolledCourses: 7,
    completedCourses: 5,
    status: "Active",
    joinDate: "2023-03-15",
  },
  {
    id: "5",
    name: "Michael Wilson",
    email: "michael@example.com",
    enrolledCourses: 1,
    completedCourses: 0,
    status: "Active",
    joinDate: "2023-10-30",
  },
  {
    id: "6",
    name: "Sarah Brown",
    email: "sarah@example.com",
    enrolledCourses: 4,
    completedCourses: 3,
    status: "Active",
    joinDate: "2023-07-22",
  },
  {
    id: "7",
    name: "David Lee",
    email: "david@example.com",
    enrolledCourses: 0,
    completedCourses: 0,
    status: "Pending",
    joinDate: "2023-11-05",
  },
]

export function StudentsTable() {
  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Enrolled Courses</TableHead>
              <TableHead>Completed</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell className="font-medium">{student.name}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.enrolledCourses}</TableCell>
                <TableCell>{student.completedCourses}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      student.status === "Active" ? "default" : student.status === "Inactive" ? "outline" : "secondary"
                    }
                  >
                    {student.status}
                  </Badge>
                </TableCell>
                <TableCell>{student.joinDate}</TableCell>
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
                        <DropdownMenuItem>View profile</DropdownMenuItem>
                        <DropdownMenuItem>View enrollments</DropdownMenuItem>
                        <DropdownMenuItem>Send message</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Reset password</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Deactivate account</DropdownMenuItem>
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
