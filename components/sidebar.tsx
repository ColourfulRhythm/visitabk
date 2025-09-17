"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { 
  Building2, 
  Newspaper, 
  Map, 
  BarChart3, 
  Settings,
  Home,
  TrendingUp
} from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Developments', href: '/developments', icon: Building2 },
  { name: 'News', href: '/news', icon: Newspaper },
  { name: 'Map', href: '/map', icon: Map },
  { name: 'Compare', href: '/compare', icon: BarChart3 },
  { name: 'Analytics', href: '/analytics', icon: TrendingUp },
  { name: 'Admin', href: '/admin', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-card border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <h2 className="text-xl font-bold text-foreground">VisitABK</h2>
        <p className="text-sm text-muted-foreground">Real Estate Tracker</p>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              )}
            >
              <item.icon className="mr-3 h-4 w-4" />
              {item.name}
            </Link>
          )
        })}
      </nav>
      
      <div className="p-4 border-t border-border">
        <div className="text-xs text-muted-foreground">
          <div>Kobape, Abeokuta</div>
          <div>Nigeria</div>
        </div>
      </div>
    </div>
  )
}
