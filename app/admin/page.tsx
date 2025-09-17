"use client"

import { AdminDashboard } from '@/components/admin-dashboard'

export default function AdminPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage developments, news, and analytics</p>
      </div>
      
      <AdminDashboard />
    </div>
  )
}
