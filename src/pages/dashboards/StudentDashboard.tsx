import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Calendar, 
  Award, 
  Heart, 
  Bell, 
  User, 
  Download,
  Star,
  Clock,
  MapPin,
  Users,
  QrCode,
  MessageSquare,
  Image as ImageIcon,
  Settings,
  LogOut
} from 'lucide-react';

const StudentDashboard: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  // Mock data
  const studentData = {
    name: 'Alex Johnson',
    enrollmentNumber: 'EN123456789',
    department: 'Computer Science',
    year: '3rd Year',
    totalEvents: 12,
    completedEvents: 8,
    upcomingEvents: 4,
    certificates: 6
  };

  const registeredEvents = [
    {
      id: 1,
      title: 'Tech Innovation Summit',
      date: '2024-03-15',
      time: '09:00 AM',
      venue: 'Main Auditorium',
      status: 'confirmed',
      category: 'Technology'
    },
    {
      id: 2,
      title: 'Cultural Night 2024',
      date: '2024-03-20',
      time: '06:00 PM',
      venue: 'Cultural Center',
      status: 'waitlisted',
      category: 'Cultural'
    },
    {
      id: 3,
      title: 'Coding Workshop',
      date: '2024-03-18',
      time: '02:00 PM',
      venue: 'Lab 201',
      status: 'confirmed',
      category: 'Workshop'
    }
  ];

  const completedEvents = [
    {
      id: 4,
      title: 'AI & Machine Learning Seminar',
      date: '2024-02-28',
      rating: 5,
      feedback: 'Excellent content and presentation',
      certificate: true
    },
    {
      id: 5,
      title: 'Entrepreneurship Workshop',
      date: '2024-02-15',
      rating: 4,
      feedback: 'Very informative and practical',
      certificate: true
    }
  ];

  const certificates = [
    {
      id: 1,
      eventTitle: 'AI & Machine Learning Seminar',
      issueDate: '2024-03-01',
      certificateId: 'CERT-AI-001',
      downloadable: true
    },
    {
      id: 2,
      eventTitle: 'Entrepreneurship Workshop',
      issueDate: '2024-02-16',
      certificateId: 'CERT-ENT-002',
      downloadable: true
    }
  ];

  const notifications = [
    {
      id: 1,
      title: 'Event Reminder',
      message: 'Tech Innovation Summit starts tomorrow at 9:00 AM',
      time: '2 hours ago',
      type: 'reminder'
    },
    {
      id: 2,
      title: 'Registration Confirmed',
      message: 'Your registration for Coding Workshop has been confirmed',
      time: '1 day ago',
      type: 'success'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'waitlisted':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl font-heading font-bold">Welcome back, {studentData.name}!</h1>
            <p className="text-muted-foreground">{studentData.department} • {studentData.year}</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-none shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Events</p>
                  <p className="text-2xl font-bold">{studentData.totalEvents}</p>
                </div>
                <Calendar className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-none shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Completed</p>
                  <p className="text-2xl font-bold">{studentData.completedEvents}</p>
                </div>
                <Award className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-none shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Upcoming</p>
                  <p className="text-2xl font-bold">{studentData.upcomingEvents}</p>
                </div>
                <Clock className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-none shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Certificates</p>
                  <p className="text-2xl font-bold">{studentData.certificates}</p>
                </div>
                <Award className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="events">My Events</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="gallery">Saved Media</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Upcoming Events */}
              <Card className="shadow-medium border-none">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Upcoming Events</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {registeredEvents.slice(0, 3).map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="space-y-1">
                        <p className="font-medium text-sm">{event.title}</p>
                        <p className="text-xs text-muted-foreground">{event.date} • {event.time}</p>
                      </div>
                      <Badge className={getStatusColor(event.status)}>
                        {event.status}
                      </Badge>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/student/events">View All Events</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Notifications */}
              <Card className="shadow-medium border-none">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="h-5 w-5" />
                    <span>Recent Notifications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="space-y-2">
                      <div className="flex justify-between items-start">
                        <p className="font-medium text-sm">{notification.title}</p>
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{notification.message}</p>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/student/notifications">View All Notifications</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Progress Section */}
            <Card className="shadow-medium border-none">
              <CardHeader>
                <CardTitle>Event Participation Progress</CardTitle>
                <CardDescription>Track your event journey throughout the semester</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Events Completed</span>
                    <span>{studentData.completedEvents} / {studentData.totalEvents}</span>
                  </div>
                  <Progress 
                    value={(studentData.completedEvents / studentData.totalEvents) * 100} 
                    className="h-2"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <p className="text-2xl font-bold text-primary">{studentData.completedEvents}</p>
                    <p className="text-sm text-muted-foreground">Events Attended</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <p className="text-2xl font-bold text-success">{studentData.certificates}</p>
                    <p className="text-sm text-muted-foreground">Certificates Earned</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <p className="text-2xl font-bold text-accent">4.8</p>
                    <p className="text-sm text-muted-foreground">Average Rating</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Registered Events */}
              <Card className="shadow-medium border-none">
                <CardHeader>
                  <CardTitle>Registered Events</CardTitle>
                  <CardDescription>Events you're registered for</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {registeredEvents.map((event) => (
                    <div key={event.id} className="p-4 border rounded-lg space-y-3">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <h4 className="font-medium">{event.title}</h4>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span>{event.date}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{event.time}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3" />
                              <span>{event.venue}</span>
                            </span>
                          </div>
                        </div>
                        <Badge className={getStatusColor(event.status)}>
                          {event.status}
                        </Badge>
                      </div>
                      {event.status === 'confirmed' && (
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <QrCode className="h-4 w-4 mr-2" />
                            QR Code
                          </Button>
                          <Button size="sm" variant="outline">
                            <Calendar className="h-4 w-4 mr-2" />
                            Add to Calendar
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Completed Events */}
              <Card className="shadow-medium border-none">
                <CardHeader>
                  <CardTitle>Completed Events</CardTitle>
                  <CardDescription>Events you've attended</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {completedEvents.map((event) => (
                    <div key={event.id} className="p-4 border rounded-lg space-y-3">
                      <div className="space-y-1">
                        <h4 className="font-medium">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < event.rating 
                                  ? 'fill-yellow-400 text-yellow-400' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">({event.rating}/5)</span>
                      </div>
                      {event.certificate && (
                        <Button size="sm" variant="success">
                          <Download className="h-4 w-4 mr-2" />
                          Download Certificate
                        </Button>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-6">
            <Card className="shadow-medium border-none">
              <CardHeader>
                <CardTitle>Your Certificates</CardTitle>
                <CardDescription>Download and manage your event certificates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certificates.map((cert) => (
                    <Card key={cert.id} className="border shadow-soft">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-lg mx-auto">
                          <Award className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-center space-y-2">
                          <h4 className="font-medium">{cert.eventTitle}</h4>
                          <p className="text-sm text-muted-foreground">Issued: {cert.issueDate}</p>
                          <p className="text-xs text-muted-foreground">ID: {cert.certificateId}</p>
                        </div>
                        <Button 
                          variant="hero" 
                          size="sm" 
                          className="w-full"
                          disabled={!cert.downloadable}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-6">
            <Card className="shadow-medium border-none">
              <CardHeader>
                <CardTitle>Event Feedback</CardTitle>
                <CardDescription>Share your experience and view peer reviews</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {completedEvents.map((event) => (
                  <div key={event.id} className="p-4 border rounded-lg space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < event.rating 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm">{event.feedback}</p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Edit Feedback
                      </Button>
                      <Button size="sm" variant="outline">
                        View Peer Reviews
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-6">
            <Card className="shadow-medium border-none">
              <CardHeader>
                <CardTitle>Saved Event Media</CardTitle>
                <CardDescription>Your favorited photos and videos from events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="aspect-square bg-muted rounded-lg overflow-hidden group cursor-pointer relative">
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <ImageIcon className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="absolute top-2 right-2">
                        <Button size="sm" variant="outline" className="h-6 w-6 p-0">
                          <Heart className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card className="shadow-medium border-none">
              <CardHeader>
                <CardTitle>All Notifications</CardTitle>
                <CardDescription>Stay updated with event reminders and announcements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className="p-4 border rounded-lg space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">{notification.title}</h4>
                      <span className="text-xs text-muted-foreground">{notification.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{notification.message}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentDashboard;