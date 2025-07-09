import { MoreHorizontal, Pencil, Star, Trash2 } from "lucide-react"

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

const courses = [
  {
    id: "1",
    title: "Introduction to Web Development",
    instructor: "John Smith",
    category: "Programming",
    status: "Published",
    students: 1245,
    rating: 4.8,
    lastUpdated: "2023-10-15",
  },
  {
    id: "2",
    title: "Advanced JavaScript Concepts",
    instructor: "Emily Johnson",
    category: "Programming",
    status: "Published",
    students: 982,
    rating: 4.9,
    lastUpdated: "2023-11-02",
  },
  {
    id: "3",
    title: "UX/UI Design Fundamentals",
    instructor: "Michael Brown",
    category: "Design",
    status: "Published",
    students: 745,
    rating: 4.7,
    lastUpdated: "2023-09-28",
  },
  {
    id: "4",
    title: "Data Science Bootcamp",
    instructor: "Sarah Wilson",
    category: "Data Science",
    status: "Published",
    students: 892,
    rating: 4.6,
    lastUpdated: "2023-10-20",
  },
  {
    id: "5",
    title: "Digital Marketing Masterclass",
    instructor: "David Lee",
    category: "Marketing",
    status: "Published",
    students: 678,
    rating: 4.5,
    lastUpdated: "2023-11-10",
  },
  {
    id: "6",
    title: "Mobile App Development with React Native",
    instructor: "Jennifer Garcia",
    category: "Programming",
    status: "Draft",
    students: 0,
    rating: 0,
    lastUpdated: "2023-11-15",
  },
  {
    id: "7",
    title: "Machine Learning Fundamentals",
    instructor: "Robert Taylor",
    category: "Data Science",
    status: "Review",
    students: 0,
    rating: 0,
    lastUpdated: "2023-11-12",
  },
]

export function CoursesTable() {
  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course</TableHead>
              <TableHead>Instructor</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Students</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell className="font-medium">{course.title}</TableCell>
                <TableCell>{course.instructor}</TableCell>
                <TableCell>{course.category}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      course.status === "Published" ? "default" : course.status === "Draft" ? "outline" : "secondary"
                    }
                  >
                    {course.status}
                  </Badge>
                </TableCell>
                <TableCell>{course.students}</TableCell>
                <TableCell>
                  {course.rating > 0 ? (
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4 fill-amber-400 text-amber-400" />
                      {course.rating}
                    </div>
                  ) : (
                    "N/A"
                  )}
                </TableCell>
                <TableCell>{course.lastUpdated}</TableCell>
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
                        <DropdownMenuItem>View course</DropdownMenuItem>
                        <DropdownMenuItem>Edit course</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate course</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View analytics</DropdownMenuItem>
                        <DropdownMenuItem>View enrollments</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete course
                        </DropdownMenuItem>
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
