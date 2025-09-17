"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Building2, 
  Newspaper, 
  Upload, 
  Plus, 
  Edit, 
  Trash2, 
  BarChart3,
  Users,
  Settings
} from 'lucide-react'

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bloomberg-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Developments</p>
                <p className="text-2xl font-bold">14</p>
              </div>
              <Building2 className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bloomberg-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">News Articles</p>
                <p className="text-2xl font-bold">47</p>
              </div>
              <Newspaper className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bloomberg-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Users</p>
                <p className="text-2xl font-bold">1,234</p>
              </div>
              <Users className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bloomberg-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Page Views</p>
                <p className="text-2xl font-bold">8,456</p>
              </div>
              <BarChart3 className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Admin Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="developments">Developments</TabsTrigger>
          <TabsTrigger value="news">News</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bloomberg-card">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm">New development added: Cornwall Bay</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm">News article published: Oak Farms Phase 2</p>
                      <p className="text-xs text-muted-foreground">4 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm">Development updated: Legend City</p>
                      <p className="text-xs text-muted-foreground">1 day ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bloomberg-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button className="h-20 flex flex-col gap-2">
                    <Plus className="h-5 w-5" />
                    Add Development
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <Newspaper className="h-5 w-5" />
                    Add News
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <Upload className="h-5 w-5" />
                    Bulk Import
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <BarChart3 className="h-5 w-5" />
                    View Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="developments" className="space-y-4">
          <Card className="bloomberg-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Manage Developments</CardTitle>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Development
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Development List with Actions */}
                {[
                  { name: 'Oak Farms Estate', status: 'selling', developer: 'Oak Properties Ltd' },
                  { name: 'Legend City', status: 'under development', developer: 'Legend Properties' },
                  { name: 'Cornwall Bay', status: 'pre-launch', developer: 'Cornwall Developments' },
                  { name: 'Greenstone Garden', status: 'completed', developer: 'Greenstone Properties' },
                  { name: 'FairView Estate', status: 'selling', developer: 'FairView Homes' }
                ].map((dev, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold">{dev.name}</h4>
                      <p className="text-sm text-muted-foreground">{dev.developer}</p>
                      <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                        {dev.status}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-3 w-3 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="news" className="space-y-4">
          <Card className="bloomberg-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Manage News</CardTitle>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Article
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: 'Oak Farms Estate Launches Phase 2', source: 'Property News Nigeria', date: '2024-01-20' },
                  { title: 'Legend City Receives Planning Approval', source: 'Abeokuta Times', date: '2024-01-18' },
                  { title: 'Cornwall Bay Pre-Launch Event Draws 200+ Investors', source: 'Real Estate Weekly', date: '2024-01-15' }
                ].map((article, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold">{article.title}</h4>
                      <p className="text-sm text-muted-foreground">{article.source} • {article.date}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-3 w-3 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card className="bloomberg-card">
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">API Keys</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">MapTiler API Key</span>
                      <Button variant="outline" size="sm">Configure</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">News API Key</span>
                      <Button variant="outline" size="sm">Configure</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Social Media APIs</span>
                      <Button variant="outline" size="sm">Configure</Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Data Management</h4>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Upload className="h-4 w-4 mr-2" />
                      Import CSV Data
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Settings className="h-4 w-4 mr-2" />
                      Export Data
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
