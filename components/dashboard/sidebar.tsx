"use client"

import { useState } from "react"
import { BarChart3, CalendarDays, ClipboardList, LayoutDashboard, LogOut, Settings, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Enrollments",
    href: "/dashboard/enrollments",
    icon: ClipboardList,
  },
  {
    title: "Sessions",
    href: "/dashboard/sessions",
    icon: CalendarDays,
  },
  {
    title: "Students",
    href: "/dashboard/students",
    icon: Users,
  },
  {
    title: "Statistics",
    href: "/dashboard/statistics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "flex h-screen flex-col border-r bg-muted/40 transition-all duration-300",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="flex h-16 items-center border-b px-4">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          {!collapsed && <span>Admin Dashboard</span>}
          {collapsed && <LayoutDashboard className="h-6 w-6" />}
        </Link>
        <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <LayoutDashboard className="h-5 w-5 rotate-180" /> : <LayoutDashboard className="h-5 w-5" />}
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-muted",
                pathname === link.href ? "bg-muted font-medium" : "text-muted-foreground",
                collapsed && "justify-center py-3",
              )}
            >
              <link.icon className={cn("h-5 w-5", collapsed && "h-6 w-6")} />
              {!collapsed && <span>{link.title}</span>}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto border-t p-4">
        <Button variant="ghost" className={cn("w-full justify-start gap-3", collapsed && "justify-center px-0")}>
          <LogOut className="h-5 w-5" />
          {!collapsed && <span>Log out</span>}
        </Button>
      </div>
    </div>
  )
}
