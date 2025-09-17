"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Newspaper, ExternalLink, Calendar } from 'lucide-react'
import { formatDate } from '@/lib/utils'

// Mock news data
const mockNews = [
  {
    id: '1',
    title: 'Oak Farms Estate Launches Phase 2 Development',
    content: 'Oak Properties Ltd announces the launch of Phase 2 of Oak Farms Estate, featuring 50 new luxury homes with modern amenities.',
    source: 'Property News Nigeria',
    url: 'https://propertynews.ng/oak-farms-phase2',
    published_at: '2024-01-20',
    tags: ['Oak Farms', 'Development', 'Luxury']
  },
  {
    id: '2',
    title: 'Legend City Receives Planning Approval',
    content: 'The mixed-use development project has received final planning approval from Ogun State government.',
    source: 'Abeokuta Times',
    url: 'https://abeokutatimes.com/legend-city-approval',
    published_at: '2024-01-18',
    tags: ['Legend City', 'Planning', 'Approval']
  },
  {
    id: '3',
    title: 'Cornwall Bay Pre-Launch Event Draws 200+ Investors',
    content: 'The waterfront luxury estate pre-launch event was a huge success with over 200 potential investors in attendance.',
    source: 'Real Estate Weekly',
    url: 'https://realestateweekly.com/cornwall-bay-pre-launch',
    published_at: '2024-01-15',
    tags: ['Cornwall Bay', 'Pre-launch', 'Investors']
  },
  {
    id: '4',
    title: 'Greenstone Garden Wins Eco-Friendly Award',
    content: 'The residential community has been recognized for its sustainable building practices and green initiatives.',
    source: 'Green Building Magazine',
    url: 'https://greenbuildingmag.com/greenstone-award',
    published_at: '2024-01-12',
    tags: ['Greenstone Garden', 'Award', 'Eco-friendly']
  }
]

export function NewsFeed() {
  return (
    <Card className="bloomberg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Newspaper className="h-5 w-5" />
          Latest News
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockNews.map((article) => (
          <div
            key={article.id}
            className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-semibold text-foreground text-sm leading-tight">
                {article.title}
              </h4>
              {article.url && (
                <Button variant="ghost" size="sm" asChild>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {article.content}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {formatDate(new Date(article.published_at))}
                <span>•</span>
                <span>{article.source}</span>
              </div>
              <div className="flex gap-1">
                {article.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
        <Button variant="outline" className="w-full">
          View All News
        </Button>
      </CardContent>
    </Card>
  )
}
