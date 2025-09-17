import { DevelopmentsList } from '@/components/developments-list'
import { SearchAndFilter } from '@/components/search-and-filter'

export default function DevelopmentsPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">All Developments</h1>
        <p className="text-muted-foreground">Browse and filter all real estate developments in Kobape</p>
      </div>
      
      <SearchAndFilter />
      <DevelopmentsList />
    </div>
  )
}
