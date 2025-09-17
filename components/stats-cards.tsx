"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, TrendingUp, MapPin, DollarSign } from 'lucide-react'

const stats = [
  {
    title: 'Total Developments',
    value: '14',
    change: '+2 this month',
    icon: Building2,
    color: 'text-blue-500'
  },
  {
    title: 'Active Projects',
    value: '8',
    change: '+1 this week',
    icon: TrendingUp,
    color: 'text-green-500'
  },
  {
    title: 'Avg. Price',
    value: '₦2.4M',
    change: '+12% from last year',
    icon: DollarSign,
    color: 'text-yellow-500'
  },
  {
    title: 'Coverage Area',
    value: '25km²',
    change: 'Kobape region',
    icon: MapPin,
    color: 'text-purple-500'
  }
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="bloomberg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stat.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
