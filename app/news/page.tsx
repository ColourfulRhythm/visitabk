import { NewsFeed } from '@/components/news-feed'
import { NewsFilters } from '@/components/news-filters'

export default function NewsPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Real Estate News</h1>
        <p className="text-muted-foreground">Latest updates and news about developments in Kobape</p>
      </div>
      
      <NewsFilters />
      <NewsFeed />
    </div>
  )
}
