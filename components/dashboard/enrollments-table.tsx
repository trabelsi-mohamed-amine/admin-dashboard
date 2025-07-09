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

const enrollments = [
  {
    id: "1",
    student: "John Doe",
    email: "john@example.com",
    course: "Introduction to Web Development",
    enrollmentDate: "2023-10-15",
    status: "Active",
    paymentStatus: "Paid",
  },
  {
    id: "2",
    student: "Jane Smith",
    email: "jane@example.com",
    course: "Advanced JavaScript Concepts",
    enrollmentDate: "2023-10-18",
    status: "Active",
    paymentStatus: "Paid",
  },
  {
    id: "3",
    student: "Robert Johnson",
    email: "robert@example.com",
    course: "UX/UI Design Fundamentals",
    enrollmentDate: "2023-10-20",
    status: "Pending",
    paymentStatus: "Unpaid",
  },
  {
    id: "4",
    student: "Emily Davis",
    email: "emily@example.com",
    course: "Data Science Bootcamp",
    enrollmentDate: "2023-10-22",
    status: "Active",
    paymentStatus: "Paid",
  },
  {
    id: "5",
    student: "Michael Wilson",
    email: "michael@example.com",
    course: "Digital Marketing Masterclass",
    enrollmentDate: "2023-10-25",
    status: "Active",
    paymentStatus: "Paid",
  },
  {
    id: "6",
    student: "Sarah Brown",
    email: "sarah@example.com",
    course: "Mobile App Development",
    enrollmentDate: "2023-10-28",
    status: "Inactive",
    paymentStatus: "Refunded",
  },
  {
    id: "7",
    student: "David Lee",
    email: "david@example.com",
    course: "Machine Learning Fundamentals",
    enrollmentDate: "2023-11-01",
    status: "Active",
    paymentStatus: "Paid",
  },
]

export function EnrollmentsTable() {
  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Enrollment Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {enrollments.map((enrollment) => (
              <TableRow key={enrollment.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{enrollment.student}</div>
                    <div className="text-xs text-muted-foreground">{enrollment.email}</div>
                  </div>
                </TableCell>
                <TableCell>{enrollment.course}</TableCell>
                <TableCell>{enrollment.enrollmentDate}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      enrollment.status === "Active"
                        ? "default"
                        : enrollment.status === "Pending"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {enrollment.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      enrollment.paymentStatus === "Paid"
                        ? "default"
                        : enrollment.paymentStatus === "Unpaid"
                          ? "destructive"
                          : "outline"
                    }
                  >
                    {enrollment.paymentStatus}
                  </Badge>
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
                        <DropdownMenuItem>Edit enrollment</DropdownMenuItem>
                        <DropdownMenuItem>Change status</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Send reminder</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Cancel enrollment</DropdownMenuItem>
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
