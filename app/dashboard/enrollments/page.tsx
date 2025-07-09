import { EnrollmentsTable } from "@/components/dashboard/enrollments-table"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export default function EnrollmentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Enrollments</h1>
          <p className="text-muted-foreground">Manage student enrollments in courses.</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Enrollment
        </Button>
      </div>
      <EnrollmentsTable />
    </div>
  )
}
