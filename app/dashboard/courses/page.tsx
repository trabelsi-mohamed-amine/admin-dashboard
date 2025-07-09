import { CoursesTable } from "@/components/dashboard/courses-table"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
          <p className="text-muted-foreground">Manage your e-learning courses and content.</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Course
        </Button>
      </div>
      <CoursesTable />
    </div>
  )
}
