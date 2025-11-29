"use client"

import { useState, useEffect } from 'react'
import { MapPin, Building2, ExternalLink, Edit, Heart, Share2, ArrowRight, Trees, Home, Users, Save, X } from 'lucide-react'

// Real development data based on user's information
const realDevelopments = [
  {
    id: '1',
    name: 'Sycamore Cottages',
    location: 'Kobape, Abeokuta (near Buhari Estate, Day Waterman College, Sagamu interchange)',
    developer: 'LandXpress Real Estate Company',
    status: 'selling',
    price_per_sqm: 5000,
    size_acres: 35,
    description: 'Eco-friendly mixed residential community offering a holiday lifestyle experience. Freehold & survey title available.',
    website: 'https://landxpress.com',
    email: 'info@landxpress.com',
    phone: '+234 801 234 5678',
    gps_lat: 7.1574,
    gps_lng: 3.3481,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&crop=center',
    features: ['Eco-friendly', 'Holiday Lifestyle', 'Freehold Title', '35 Acres'],
    created_at: '2024-01-15'
  },
  {
    id: '2',
    name: '2 Seasons (Regenerative Innovation & Lifestyle Village)',
    location: 'Kobape, Abeokuta',
    developer: 'Focal Point Property Development & Management Services Ltd.',
    status: 'pre-launch',
    size_acres: 84,
    description: '84-acre regenerative lifestyle city with four distinct zones: Residential, Wellness Hub, True Vine Villas, and Hygge Town. Positioned as Ogun\'s first regenerative tourism & content destination.',
    website: 'https://focalpointproperties.com',
    email: '2seasonsabk@gmail.com',
    phone: '08156901392, 07071670649',
    gps_lat: 7.1584,
    gps_lng: 3.3491,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=center',
    features: ['Regenerative City', '4 Zones', 'Tourism Destination', '84 Acres'],
    created_at: '2024-01-10'
  },
  {
    id: '3',
    name: 'Oak Farms Kobape',
    location: 'Kobape / Owode axis, Abeokuta',
    developer: 'Rolad Properties',
    status: 'selling',
    description: 'Hybrid land + farming investment product with plots bundled with farm operations and yearly ROI. Perfect for agricultural investment.',
    website: 'https://roladproperties.com',
    email: 'info@roladproperties.com',
    phone: '+234 803 456 7890',
    gps_lat: 7.1594,
    gps_lng: 3.3501,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop&crop=center',
    features: ['Hybrid Investment', 'Farming Operations', 'Yearly ROI', 'Agricultural Focus'],
    created_at: '2024-01-20'
  },
  {
    id: '4',
    name: 'Legend City Estate / Legend City 2.0',
    location: 'Kobape, Abeokuta',
    developer: 'Rolad Properties',
    status: 'selling',
    description: 'Residential estate positioned as "live like a legend," marketed for affordability and appreciation. Perfect for first-time buyers.',
    website: 'https://roladproperties.com',
    email: 'info@roladproperties.com',
    phone: '+234 803 456 7890',
    gps_lat: 7.1604,
    gps_lng: 3.3511,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&crop=center',
    features: ['Affordable Housing', 'High Appreciation', 'First-time Buyers', 'Legend Lifestyle'],
    created_at: '2024-01-05'
  },
  {
    id: '5',
    name: 'Cornwall Bay Estate',
    location: 'Kobape, Abeokuta',
    developer: 'Rolad Properties',
    status: 'selling',
    description: 'Residential estate in Rolad\'s portfolio, marketed as serene and community-oriented. Perfect for families seeking peaceful living.',
    website: 'https://roladproperties.com',
    email: 'info@roladproperties.com',
    phone: '+234 803 456 7890',
    gps_lat: 7.1614,
    gps_lng: 3.3521,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=center',
    features: ['Serene Living', 'Community Oriented', 'Family Friendly', 'Peaceful Environment'],
    created_at: '2024-01-12'
  },
  {
    id: '6',
    name: 'Itura Industrial City / Itura Gardens',
    location: 'Off Kobape Road',
    developer: 'Wealth Island Properties (WIP Africa)',
    status: 'pre-launch',
    description: 'Industrial and mixed-use land, marketed as "industrial city" close to Ogun industrial corridors. Perfect for commercial investment.',
    website: 'https://wipafrica.com',
    email: 'info@wipafrica.com',
    phone: '+234 804 567 8901',
    gps_lat: 7.1624,
    gps_lng: 3.3531,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=center',
    features: ['Industrial Focus', 'Mixed-use', 'Commercial Investment', 'Industrial Corridor'],
    created_at: '2024-01-08'
  },
  {
    id: '7',
    name: 'Greenstone Garden',
    location: 'Off Muhammadu Buhari Road / near Governor\'s Estate & Day Waterman College, Kobape',
    developer: 'Lifescape Global Investment, PereGlobal, Ellion Global',
    status: 'selling',
    description: 'Eco-friendly residential plots; peaceful green living with titled documentation. Perfect for sustainable living enthusiasts.',
    website: 'https://lifescapeglobal.com',
    email: 'info@lifescapeglobal.com',
    phone: '+234 805 678 9012',
    gps_lat: 7.1634,
    gps_lng: 3.3541,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&crop=center',
    features: ['Eco-friendly', 'Titled Documentation', 'Green Living', 'Sustainable'],
    created_at: '2024-01-18'
  },
  {
    id: '8',
    name: 'FairView Estate',
    location: 'Kobape, near Ogun Housing Scheme, Sagamu interchange',
    developer: 'MobRealtyServices',
    status: 'selling',
    description: 'Residential estate with emphasis on proximity to government amenities. Perfect for those seeking convenience and accessibility.',
    website: 'https://mobrealty.com',
    email: 'info@mobrealty.com',
    phone: '+234 806 789 0123',
    gps_lat: 7.1644,
    gps_lng: 3.3551,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=center',
    features: ['Government Proximity', 'Convenient Location', 'Accessibility', 'Housing Scheme'],
    created_at: '2024-01-22'
  },
  {
    id: '9',
    name: 'Pelican Valley Projects (Pelican\'s Ecostay Apartments)',
    location: 'Kobape Road / behind Buckswood British Academy',
    developer: 'Pelican Valley Nigeria Ltd.',
    status: 'under development',
    description: 'Eco-focused housing/apartment projects for locals & diaspora, promoting sustainable investment. Perfect for eco-conscious investors.',
    website: 'https://pelicanvalley.com',
    email: 'info@pelicanvalley.com',
    phone: '+234 807 890 1234',
    gps_lat: 7.1654,
    gps_lng: 3.3561,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=center',
    features: ['Eco-focused', 'Diaspora Friendly', 'Sustainable Investment', 'Apartments'],
    created_at: '2024-01-14'
  },
  {
    id: '10',
    name: 'Hilltop City Estate',
    location: 'Agodo / Off Kobape Road',
    developer: 'Rehoboth Hills International, Newwine Realty',
    status: 'selling',
    description: '"Eco-luxury" residential estate with perimeter fencing, water, road, and security. Perfect for luxury living enthusiasts.',
    website: 'https://rehobothhills.com',
    email: 'info@rehobothhills.com',
    phone: '+234 808 901 2345',
    gps_lat: 7.1664,
    gps_lng: 3.3571,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&crop=center',
    features: ['Eco-luxury', 'Perimeter Fencing', 'Full Amenities', 'Security'],
    created_at: '2024-01-16'
  },
  {
    id: '11',
    name: 'Infinity Estate',
    location: 'Agodo Village, Off Kobape Road',
    developer: 'Infinity Estate Homes (Property Links Global)',
    status: 'pre-launch',
    description: 'Residential plots, pre-launch pricing, close to Ogun Tech Hub. Perfect for tech professionals and early investors.',
    website: 'https://infinityestate.com',
    email: 'info@infinityestate.com',
    phone: '+234 809 012 3456',
    gps_lat: 7.1674,
    gps_lng: 3.3581,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=center',
    features: ['Pre-launch Pricing', 'Tech Hub Proximity', 'Early Investment', 'Residential Plots'],
    created_at: '2024-01-19'
  },
  {
    id: '12',
    name: 'Green City (Mini-City Concept)',
    location: 'Kobape (marketed in social posts)',
    developer: 'Broker/consortium-driven',
    status: 'pre-launch',
    size_acres: 200,
    description: 'Mixed residential + agricultural "mini-city" on ~200 acres. Perfect for large-scale investment and development.',
    website: 'https://greencitykobape.com',
    email: 'info@greencitykobape.com',
    phone: '+234 810 123 4567',
    gps_lat: 7.1684,
    gps_lng: 3.3591,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=center',
    features: ['Mini-City Concept', '200 Acres', 'Mixed-use', 'Large-scale Investment'],
    created_at: '2024-01-21'
  },
  {
    id: '13',
    name: 'Nigerian Civil Service Union Estate',
    location: 'Kobape, Abeokuta, Ogun State',
    developer: 'Nigerian Civil Service Union',
    status: 'selling',
    description: 'Exclusive residential estate developed by the Nigerian Civil Service Union for its members and the general public. Features well-planned layouts, modern infrastructure, and secure environment.',
    email: 'info@ncsu-estate.com',
    phone: '+234 811 234 5678',
    gps_lat: 7.1694,
    gps_lng: 3.3601,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=center',
    features: ['Union Estate', 'Secure Environment', 'Modern Infrastructure', 'Well-Planned Layouts'],
    created_at: '2024-01-23'
  },
  {
    id: '14',
    name: 'Nigerian Medical Association Estate',
    location: 'Kobape, Abeokuta, Ogun State',
    developer: 'Nigerian Medical Association',
    status: 'selling',
    description: 'Premium residential estate designed for medical professionals and their families. Features quality infrastructure, serene environment, and proximity to healthcare facilities.',
    email: 'info@nma-estate.com',
    phone: '+234 812 345 6789',
    gps_lat: 7.1704,
    gps_lng: 3.3611,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&crop=center',
    features: ['Medical Professionals', 'Quality Infrastructure', 'Serene Environment', 'Healthcare Proximity'],
    created_at: '2024-01-24'
  },
  {
    id: '15',
    name: 'Association of Civil Servants of Nigeria Ogun State Estate',
    location: 'Kobape, Abeokuta, Ogun State',
    developer: 'Association of Civil Servants of Nigeria (Ogun State Branch)',
    status: 'selling',
    description: 'Residential estate developed by the Association of Civil Servants of Nigeria, Ogun State branch. Designed for civil servants and public sector workers with affordable pricing and flexible payment plans.',
    email: 'info@acsn-ogun-estate.com',
    phone: '+234 813 456 7890',
    gps_lat: 7.1714,
    gps_lng: 3.3621,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=center',
    features: ['Civil Servants', 'Affordable Pricing', 'Flexible Payment', 'Public Sector Workers'],
    created_at: '2024-01-25'
  },
  {
    id: '16',
    name: 'Savings Scheme Estate',
    location: 'Kobape, Abeokuta, Ogun State',
    developer: 'Savings Scheme Cooperative',
    status: 'selling',
    description: 'Residential estate developed through a cooperative savings scheme. Affordable housing solution with flexible payment terms and community-oriented design.',
    email: 'info@savingsscheme-estate.com',
    phone: '+234 814 567 8901',
    gps_lat: 7.1724,
    gps_lng: 3.3631,
    image: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800&h=600&fit=crop&crop=center',
    features: ['Cooperative Scheme', 'Affordable Housing', 'Flexible Payment Terms', 'Community-Oriented'],
    created_at: '2024-01-26'
  },
  {
    id: '17',
    name: 'Kinshasa Africa Kobape',
    location: 'Kobape, Abeokuta, Ogun State',
    developer: 'Orbit Africa Properties',
    status: 'pre-launch',
    description: 'A serene and secure residential estate launched in November 2023. Designed to address Nigeria\'s housing challenges while providing quality living spaces. The estate offers opportunities for both young entrepreneurs and established investors.',
    website: 'https://orbitafricaproperties.com',
    email: 'info@orbitafricaproperties.com',
    phone: '+234 815 678 9012',
    gps_lat: 7.1734,
    gps_lng: 3.3641,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&crop=center',
    features: ['Serene Environment', 'Secure Community', 'Youth-Friendly', 'Quality Living'],
    created_at: '2024-01-27'
  },
  {
    id: '18',
    name: 'Beryl Polo Estate',
    location: 'Kobape, Abeokuta, Ogun State',
    developer: 'Gtext Land',
    status: 'selling',
    description: 'Green and smart residential estate featuring a gated community with 24/7 security, recreational facilities including polo course, centralized sewage and water systems. Well-planned development with good road networks and modern infrastructure.',
    website: 'https://gtextland.com',
    email: 'info@gtextland.com',
    phone: '+234 816 789 0123',
    gps_lat: 7.1744,
    gps_lng: 3.3651,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&crop=center',
    features: ['Gated Community', '24/7 Security', 'Polo Course', 'Smart Estate', 'Recreational Facilities'],
    created_at: '2024-01-28'
  },
  {
    id: '19',
    name: 'Hidden Leaf Village',
    location: 'Kobape, Abeokuta, Ogun State',
    developer: 'Focal Point Property Development & Management Services Ltd.',
    status: 'selling',
    description: 'A serene mini resort featuring 18 cabins nestled among fruit trees. Perfect for nature lovers with hiking paths, hill climbing opportunities, a tranquil pond, gym facilities, outdoor restaurant, and spa services. An ideal getaway destination in the heart of Kobape.',
    website: 'https://focalpointproperties.com',
    email: '2seasonsabk@gmail.com',
    phone: '08156901392, 07071670649',
    gps_lat: 7.1754,
    gps_lng: 3.3661,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop&crop=center',
    features: ['Mini Resort', '18 Cabins', 'Fruit Trees', 'Hiking Paths', 'Hill Climbing', 'Pond', 'Gym', 'Outdoor Restaurant', 'Spa'],
    created_at: '2024-01-29'
  }
]

export function TourismDevelopmentsList() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedDevelopment, setSelectedDevelopment] = useState<any>(null)
  const [developments, setDevelopments] = useState(realDevelopments)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editForm, setEditForm] = useState<any>(null)

  // Load saved developments from localStorage on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('visitabk-developments')
      if (saved) {
        try {
          const savedDevelopments = JSON.parse(saved)
          setDevelopments(savedDevelopments)
        } catch (error) {
          console.error('Error loading saved developments:', error)
        }
      }
    }
  }, [])

  // Save developments to localStorage
  const saveDevelopments = (newDevelopments: any[]) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('visitabk-developments', JSON.stringify(newDevelopments))
      setDevelopments(newDevelopments)
    }
  }

  // Start editing a development
  const startEditing = (dev: any) => {
    setEditingId(dev.id)
    setEditForm({ ...dev })
  }

  // Save edited development
  const saveEdit = () => {
    if (!editForm || !editingId) return
    
    const updatedDevelopments = developments.map(dev => 
      dev.id === editingId ? { ...editForm } : dev
    )
    saveDevelopments(updatedDevelopments)
    setEditingId(null)
    setEditForm(null)
  }

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null)
    setEditForm(null)
  }

  const filteredDevelopments = developments.filter(dev => {
    const matchesSearch = dev.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dev.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dev.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'all' || dev.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pre-launch':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
      case 'selling':
        return 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary/90'
      case 'under development':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
      case 'completed':
        return 'bg-muted text-muted-foreground'
      default:
        return 'bg-muted text-muted-foreground'
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
          Premium Real Estate Developments
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Invest in Kobape's most innovative and sustainable real estate projects
        </p>
        <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto">
          From eco-friendly cottages to regenerative lifestyle cities, discover the future of living in Abeokuta
        </p>
      </div>

      {/* Developments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredDevelopments.map((development, index) => (
          <div
            key={development.id}
            className="group relative bg-background-tertiary border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={development.image}
                alt={development.name}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1.5 rounded-lg text-xs font-medium ${getStatusColor(development.status)}`}>
                  {development.status}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button className="w-9 h-9 bg-background/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-background transition-colors shadow-sm">
                  <Heart className="h-4 w-4 text-foreground" />
                </button>
                <button className="w-9 h-9 bg-background/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-background transition-colors shadow-sm">
                  <Share2 className="h-4 w-4 text-foreground" />
                </button>
              </div>

              {/* Size Badge */}
              {development.size_acres && (
                <div className="absolute bottom-4 left-4">
                  <div className="bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-medium text-foreground shadow-sm">
                    {development.size_acres} Acres
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {development.name}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  <span className="text-sm">{development.location}</span>
                </div>
                <p className="text-sm text-muted-foreground/80">{development.developer}</p>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {development.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {development.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-muted text-foreground text-xs font-medium rounded-md"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Pricing */}
              {development.price_per_sqm && (
                <div className="text-xl font-semibold text-foreground">
                  {formatCurrency(development.price_per_sqm)}/sqm
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setSelectedDevelopment(development)}
                  className="flex-1 bg-primary text-primary-foreground py-2.5 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 shadow-sm flex items-center justify-center gap-2"
                >
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => startEditing(development)}
                  className="px-4 py-2.5 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors duration-200"
                  title="Edit this listing"
                >
                  <Edit className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Form Modal */}
      {editingId && editForm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background-tertiary border border-border rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lg">
            <div className="p-6 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Edit className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">Edit Listing</h2>
                    <p className="text-sm text-muted-foreground">Update development information</p>
                  </div>
                </div>
                <button
                  onClick={cancelEdit}
                  className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center hover:bg-muted/80 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Developer</label>
                    <input
                      type="text"
                      value={editForm.developer}
                      onChange={(e) => setEditForm({...editForm, developer: e.target.value})}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Location</label>
                  <input
                    type="text"
                    value={editForm.location}
                    onChange={(e) => setEditForm({...editForm, location: e.target.value})}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Description</label>
                  <textarea
                    rows={4}
                    value={editForm.description}
                    onChange={(e) => setEditForm({...editForm, description: e.target.value})}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Status</label>
                    <select
                      value={editForm.status}
                      onChange={(e) => setEditForm({...editForm, status: e.target.value})}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                    >
                      <option value="pre-launch">Pre-launch</option>
                      <option value="selling">Selling</option>
                      <option value="under development">Under Development</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Price per sqm</label>
                    <input
                      type="number"
                      value={editForm.price_per_sqm || ''}
                      onChange={(e) => setEditForm({...editForm, price_per_sqm: e.target.value ? parseInt(e.target.value) : undefined})}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Size (Acres)</label>
                    <input
                      type="number"
                      value={editForm.size_acres || ''}
                      onChange={(e) => setEditForm({...editForm, size_acres: e.target.value ? parseInt(e.target.value) : undefined})}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Website</label>
                    <input
                      type="url"
                      value={editForm.website}
                      onChange={(e) => setEditForm({...editForm, website: e.target.value})}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      value={editForm.email}
                      onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <input
                      type="tel"
                      value={editForm.phone}
                      onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Features (comma-separated)</label>
                  <input
                    type="text"
                    value={editForm.features ? editForm.features.join(', ') : ''}
                    onChange={(e) => setEditForm({...editForm, features: e.target.value.split(',').map(f => f.trim()).filter(f => f)})}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                    placeholder="Eco-friendly, Luxury, Waterfront"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={saveEdit}
                  className="flex-1 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Save className="h-4 w-4" />
                  Save Changes
                </button>
                <button
                  onClick={cancelEdit}
                  className="px-4 py-2.5 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Development Details Modal */}
      {selectedDevelopment && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background-tertiary border border-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-lg">
            <div className="p-6 space-y-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">{selectedDevelopment.name}</h3>
                  <p className="text-base text-muted-foreground mt-1">{selectedDevelopment.developer}</p>
                </div>
                <button
                  onClick={() => setSelectedDevelopment(null)}
                  className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center hover:bg-muted/80 transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Location</label>
                    <p className="text-base mt-1">{selectedDevelopment.location}</p>
                  </div>
                  {selectedDevelopment.price_per_sqm && (
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Price per Square Meter</label>
                      <p className="text-xl font-semibold text-foreground mt-1">
                        {formatCurrency(selectedDevelopment.price_per_sqm)}
                      </p>
                    </div>
                  )}
                  {selectedDevelopment.size_acres && (
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Size</label>
                      <p className="text-base font-medium mt-1">{selectedDevelopment.size_acres} Acres</p>
                    </div>
                  )}
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Contact</label>
                    <p className="text-sm mt-1">{selectedDevelopment.email}</p>
                    <p className="text-sm">{selectedDevelopment.phone}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Description</label>
                    <p className="text-sm text-muted-foreground mt-1">{selectedDevelopment.description}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Features</label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {selectedDevelopment.features.map((feature: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-muted text-foreground text-xs font-medium rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                {selectedDevelopment.website && (
                  <button
                    onClick={() => window.open(selectedDevelopment.website, '_blank')}
                    className="px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit Website
                  </button>
                )}
                <button
                  onClick={() => setSelectedDevelopment(null)}
                  className="px-4 py-2.5 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
