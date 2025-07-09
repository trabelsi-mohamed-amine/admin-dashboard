import { SessionsTable } from "@/components/dashboard/sessions-table"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export default function SessionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Sessions</h1>
          <p className="text-muted-foreground">Manage course sessions and schedules.</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create New Session
        </Button>
      </div>
      <SessionsTable />
    </div>
  )
}
