"use client"

import { CompareTool } from '@/components/compare-tool'

export default function ComparePage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Compare Developments</h1>
        <p className="text-muted-foreground">Compare up to 3 developments side-by-side</p>
      </div>
      
      <CompareTool />
    </div>
  )
}
