import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar,
  Users,
  Award,
  Target,
  Heart,
  Shield,
  Zap,
  Globe,
  Star,
  ArrowRight,
  CheckCircle,
  Mail,
  Linkedin,
  Twitter
} from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Comprehensive Event Management',
      description: 'From creation to completion, manage every aspect of your college events with ease.'
    },
    {
      icon: Users,
      title: 'Seamless Registration',
      description: 'Quick and easy event registration with real-time availability tracking.'
    },
    {
      icon: Award,
      title: 'Digital Certificates',
      description: 'Automated certificate generation and distribution for event participants.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security protecting your data and privacy.'
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Instant notifications about event changes, registrations, and announcements.'
    },
    {
      icon: Globe,
      title: 'Mobile Friendly',
      description: 'Access EventSphere anywhere, anytime on any device.'
    }
  ];

  const stats = [
    { label: 'Active Students', value: '10,000+', icon: Users },
    { label: 'Events Hosted', value: '5,000+', icon: Calendar },
    { label: 'Certificates Issued', value: '25,000+', icon: Award },
    { label: 'Universities', value: '50+', icon: Globe }
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Product Vision',
      description: 'Former Dean of Student Affairs with 15+ years in educational technology.',
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Engineering Lead',
      description: 'Full-stack developer passionate about creating seamless user experiences.',
      avatar: 'MC'
    },
    {
      name: 'Emma Rodriguez',
      role: 'UX Design',
      description: 'Design expert focused on accessibility and inclusive user interfaces.',
      avatar: 'ER'
    },
    {
      name: 'David Thompson',
      role: 'Community Manager',
      description: 'Connects with users to ensure EventSphere meets real-world needs.',
      avatar: 'DT'
    }
  ];

  const values = [
    {
      title: 'Student-Centric',
      description: 'Every feature is designed with students\' needs and experiences at the forefront.',
      icon: Heart
    },
    {
      title: 'Innovation',
      description: 'We continuously evolve our platform with the latest technology and best practices.',
      icon: Zap  
    },
    {
      title: 'Accessibility',
      description: 'EventSphere is built to be inclusive and accessible to all users, regardless of ability.',
      icon: Globe
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our platform and user experience.',
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero">
        <div className="container py-24">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
              About EventSphere
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
              Transforming College 
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Event Experiences
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              EventSphere is the premier platform connecting students, organizers, and administrators to create 
              memorable college experiences through seamless event management and participation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                <Target className="mr-2 h-5 w-5" />
                Our Mission
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Users className="mr-2 h-5 w-5" />
                Meet the Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center bg-gradient-card border-none shadow-soft">
                <CardContent className="p-6 space-y-2">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mx-auto">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary">Our Mission</Badge>
                <h2 className="text-3xl md:text-4xl font-heading font-bold">
                  Empowering Educational Communities
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe that college events are more than just activities—they're opportunities for growth, 
                  connection, and discovery. EventSphere was created to eliminate the barriers between students 
                  and these transformative experiences.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What drives us:</h3>
                <ul className="space-y-3">
                  {[
                    'Making event discovery effortless for every student',
                    'Streamlining event management for organizers',
                    'Creating meaningful connections within campus communities',
                    'Providing equal access to educational opportunities'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative">
              <Card className="shadow-strong bg-gradient-card border-none p-8">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mx-auto">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">Our Vision</h3>
                  </div>
                  <p className="text-center text-muted-foreground leading-relaxed">
                    To become the global standard for college event management, fostering vibrant educational 
                    communities where every student can discover, engage, and thrive through meaningful event experiences.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <Badge className="bg-accent/10 text-accent">Platform Features</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Why Choose EventSphere?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the powerful features that make EventSphere the preferred choice for educational institutions worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-none">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg group-hover:shadow-glow transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <Badge className="bg-success/10 text-success">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">What We Stand For</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The core principles that guide everything we do at EventSphere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="shadow-medium border-none bg-gradient-card">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg shrink-0">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Meet the Minds Behind EventSphere</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A passionate team of educators, developers, and designers committed to revolutionizing college event experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center group hover:shadow-strong transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-none">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mx-auto text-white text-2xl font-bold group-hover:shadow-glow transition-all duration-300">
                    {member.avatar}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <Badge variant="outline" className="text-xs">{member.role}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                  <div className="flex justify-center space-x-3">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <Card className="bg-gradient-hero border-none shadow-strong text-center">
            <CardContent className="p-12 space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                  Ready to Transform Your Event Experience?
                </h2>
                <p className="text-white/90 text-lg max-w-2xl mx-auto">
                  Join thousands of students and educators who are already using EventSphere to create 
                  unforgettable college experiences.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Users className="mr-2 h-5 w-5" />
                  Get Started Today
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Our Team
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;