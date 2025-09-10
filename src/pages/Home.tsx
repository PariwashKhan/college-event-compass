import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Search, 
  Filter,
  ArrowRight,
  Star,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import heroImage from '@/assets/hero-graduation.jpg';

// Mock data for events
const featuredEvent = {
  id: 1,
  title: "Annual Tech Summit 2024",
  description: "Join us for the biggest technology conference of the year featuring industry leaders, innovative workshops, and networking opportunities.",
  date: "2024-03-15",
  time: "09:00 AM",
  venue: "Main Auditorium",
  category: "Technology",
  availableSeats: 150,
  totalSeats: 300,
  organizer: "Computer Science Department",
  image: heroImage
};

const upcomingEvents = [
  {
    id: 2,
    title: "Cultural Fest 2024",
    description: "Celebrate diversity with music, dance, and art from around the world.",
    date: "2024-03-20",
    time: "06:00 PM",
    venue: "Cultural Center",
    category: "Cultural",
    availableSeats: 75,
    totalSeats: 200,
    rating: 4.8
  },
  {
    id: 3,
    title: "Entrepreneurship Workshop",
    description: "Learn from successful entrepreneurs and develop your business ideas.",
    date: "2024-03-22",
    time: "02:00 PM",
    venue: "Business Hall",
    category: "Workshop",
    availableSeats: 30,
    totalSeats: 50,
    rating: 4.9
  },
  {
    id: 4,
    title: "Sports Championship",
    description: "Inter-college sports competition featuring multiple sports categories.",
    date: "2024-03-25",
    time: "08:00 AM",
    venue: "Sports Complex",
    category: "Sports",
    availableSeats: 500,
    totalSeats: 1000,
    rating: 4.7
  },
  {
    id: 5,
    title: "Academic Symposium",
    description: "Research presentations and academic discussions across departments.",
    date: "2024-03-28",
    time: "10:00 AM",
    venue: "Conference Hall",
    category: "Academic",
    availableSeats: 80,
    totalSeats: 120,
    rating: 4.6
  },
  {
    id: 6,
    title: "Art Exhibition",
    description: "Showcase of student artwork and creative installations.",
    date: "2024-03-30",
    time: "11:00 AM",
    venue: "Art Gallery",
    category: "Cultural",
    availableSeats: 200,
    totalSeats: 250,
    rating: 4.5
  }
];

const categories = [
  { name: 'All', count: 25 },
  { name: 'Technology', count: 8 },
  { name: 'Cultural', count: 6 },
  { name: 'Academic', count: 5 },
  { name: 'Sports', count: 4 },
  { name: 'Workshop', count: 2 }
];

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const getCategoryColor = (category: string) => {
    const colors = {
      Technology: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
      Cultural: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
      Academic: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      Sports: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
      Workshop: 'bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
  };

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Announcement Strip */}
      <div className="bg-gradient-primary text-primary-foreground">
        <div className="container py-2">
          <div className="flex items-center justify-center space-x-2 text-sm">
            <span className="font-medium">🎉 New!</span>
            <span>Registration for Spring Events is now open!</span>
            <Link to="/events" className="underline hover:no-underline">
              View All Events
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
                  Discover Amazing
                  <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    College Events
                  </span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                  Join thousands of students in creating unforgettable memories. Find, register, and participate in events that matter to you.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Calendar className="mr-2 h-5 w-5" />
                  Explore Events
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <Users className="mr-2 h-5 w-5" />
                  Join Community
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">2.5K+</div>
                  <div className="text-white/80 text-sm">Active Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">150+</div>
                  <div className="text-white/80 text-sm">Events Monthly</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">25+</div>
                  <div className="text-white/80 text-sm">Categories</div>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <img
                src={heroImage}
                alt="College graduation celebration"
                className="rounded-2xl shadow-strong w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Featured Event</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't miss out on our most anticipated event of the month
            </p>
          </div>

          <Card className="max-w-4xl mx-auto shadow-strong bg-gradient-card border-none overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(featuredEvent.category)}>
                    {featuredEvent.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <CardTitle className="text-2xl font-heading">
                    {featuredEvent.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {featuredEvent.description}
                  </CardDescription>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{new Date(featuredEvent.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{featuredEvent.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{featuredEvent.venue}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{featuredEvent.availableSeats} seats available</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Registration Progress</span>
                    <span>{Math.round(((featuredEvent.totalSeats - featuredEvent.availableSeats) / featuredEvent.totalSeats) * 100)}% filled</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${((featuredEvent.totalSeats - featuredEvent.availableSeats) / featuredEvent.totalSeats) * 100}%` 
                      }}
                    ></div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button variant="hero" size="lg" className="flex-1">
                    <Calendar className="mr-2 h-5 w-5" />
                    Register Now
                  </Button>
                  <Button variant="outline" size="lg">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Events Listing */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Upcoming Events</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover events tailored to your interests and academic goals
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="md:w-auto">
                <Filter className="mr-2 h-4 w-4" />
                Advanced Filters
              </Button>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.name)}
                  className="rounded-full"
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-none overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getCategoryColor(event.category)}>
                      {event.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{event.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="font-heading text-lg group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {event.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                      <Clock className="h-4 w-4 text-muted-foreground ml-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{event.availableSeats} of {event.totalSeats} seats available</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Availability</span>
                      <span>{Math.round((event.availableSeats / event.totalSeats) * 100)}% available</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div 
                        className="bg-success h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${(event.availableSeats / event.totalSeats) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-0 space-x-2">
                  <Button variant="default" size="sm" className="flex-1">
                    <Calendar className="mr-2 h-4 w-4" />
                    Register
                  </Button>
                  <Button variant="outline" size="sm">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Events
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Media Gallery Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Event Memories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Relive the best moments from our recent events
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square bg-muted rounded-lg overflow-hidden group cursor-pointer">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-muted-foreground text-sm">Event Photo {i}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;