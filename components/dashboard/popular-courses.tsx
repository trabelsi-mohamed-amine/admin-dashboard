import type React from "react"
import { MoreHorizontal, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
    category: "Programming",
    students: 1245,
    rating: 4.8,
    revenue: "$12,450",
  },
  {
    id: "2",
    title: "Advanced JavaScript Concepts",
    category: "Programming",
    students: 982,
    rating: 4.9,
    revenue: "$9,820",
  },
  {
    id: "3",
    title: "UX/UI Design Fundamentals",
    category: "Design",
    students: 745,
    rating: 4.7,
    revenue: "$7,450",
  },
  {
    id: "4",
    title: "Data Science Bootcamp",
    category: "Data Science",
    students: 892,
    rating: 4.6,
    revenue: "$8,920",
  },
  {
    id: "5",
    title: "Digital Marketing Masterclass",
    category: "Marketing",
    students: 678,
    rating: 4.5,
    revenue: "$6,780",
  },
]

interface PopularCoursesProps extends React.HTMLAttributes<HTMLDivElement> {}

export function PopularCourses({ className, ...props }: PopularCoursesProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Popular Courses</CardTitle>
        <CardDescription>Your top performing courses this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course</TableHead>
              <TableHead>Students</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Revenue</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell className="font-medium">
                  <div>
                    <div>{course.title}</div>
                    <div className="text-xs text-muted-foreground">{course.category}</div>
                  </div>
                </TableCell>
                <TableCell>{course.students}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Star className="mr-1 h-4 w-4 fill-amber-400 text-amber-400" />
                    {course.rating}
                  </div>
                </TableCell>
                <TableCell>{course.revenue}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View course</DropdownMenuItem>
                      <DropdownMenuItem>Edit course</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>View analytics</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
