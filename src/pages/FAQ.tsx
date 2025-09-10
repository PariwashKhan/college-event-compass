import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search,
  HelpCircle,
  Users,
  Calendar,
  Award,
  Settings,
  Shield,
  Mail,
  Phone,
  MessageCircle
} from 'lucide-react';

const FAQ: React.FC = () => {
  const faqCategories = [
    {
      id: 'general',
      title: 'General Questions',
      icon: HelpCircle,
      color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
      faqs: [
        {
          question: 'What is EventSphere?',
          answer: 'EventSphere is a comprehensive college event management platform designed to help students discover, register for, and manage their participation in various academic and extracurricular events. It connects students, organizers, and administrators in one seamless platform.'
        },
        {
          question: 'How do I create an account?',
          answer: 'Click the "Sign Up" button in the top navigation, choose your account type (Student, Organizer, or Admin), and follow the step-by-step registration process. You\'ll need a valid college email address to register.'
        },
        {
          question: 'Is EventSphere free to use?',
          answer: 'Yes! EventSphere is completely free for all students, organizers, and administrators. There are no hidden fees or premium subscriptions required to access any features.'
        },
        {
          question: 'What types of events can I find on EventSphere?',
          answer: 'You can find a wide variety of events including academic seminars, cultural festivals, sports competitions, technical workshops, career fairs, guest lectures, and student organization meetings.'
        }
      ]
    },
    {
      id: 'registration',
      title: 'Event Registration',
      icon: Calendar,
      color: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      faqs: [
        {
          question: 'How do I register for an event?',
          answer: 'Browse events on the homepage or events page, click on an event you\'re interested in, and click the "Register Now" button. Make sure you\'re logged in to your account before registering.'
        },
        {
          question: 'Can I cancel my event registration?',
          answer: 'Yes, you can cancel your registration up to 24 hours before the event starts. Go to your dashboard, find the event under "My Events," and click the cancel button.'
        },
        {
          question: 'What happens if an event is full?',
          answer: 'If an event reaches its maximum capacity, you can join the waitlist. You\'ll be automatically notified if a spot becomes available due to cancellations.'
        },
        {
          question: 'How do I know if my registration is confirmed?',
          answer: 'You\'ll receive an email confirmation immediately after registering. You can also check your registration status in your student dashboard under "My Events."'
        }
      ]
    },
    {
      id: 'certificates',
      title: 'Certificates & Attendance',
      icon: Award,
      color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
      faqs: [
        {
          question: 'How do I get my attendance marked?',
          answer: 'Show your QR code (available in your dashboard) to the event organizer, or they may mark attendance manually. Make sure to arrive on time as late arrivals may not be marked present.'
        },
        {
          question: 'When will I receive my certificate?',
          answer: 'Certificates are typically available 2-3 business days after the event concludes. You\'ll receive an email notification when your certificate is ready for download.'
        },
        {
          question: 'Can I download my certificates later?',
          answer: 'Yes! All your certificates are permanently stored in your dashboard under the "Certificates" section. You can download them anytime, even after graduation.'
        },
        {
          question: 'What if I attended an event but didn\'t receive a certificate?',
          answer: 'Contact the event organizer or our support team with your event details and enrollment number. We\'ll verify your attendance and issue the certificate if you\'re eligible.'
        }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Support',
      icon: Settings,
      color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
      faqs: [
        {
          question: 'I forgot my password. How can I reset it?',
          answer: 'Click "Forgot Password" on the login page, enter your email address, and follow the instructions sent to your email to reset your password.'
        },
        {
          question: 'Why can\'t I access certain features?',
          answer: 'Some features are role-specific. Students can register for events and view certificates, while organizers can create events, and admins have full platform access. Make sure you\'re logged into the correct account type.'
        },
        {
          question: 'The website is not loading properly. What should I do?',
          answer: 'Try refreshing the page, clearing your browser cache, or using a different browser. If the problem persists, contact our technical support team.'
        },
        {
          question: 'Can I access EventSphere on my mobile device?',
          answer: 'Yes! EventSphere is fully responsive and works seamlessly on all devices including smartphones and tablets. You can access all features through your mobile browser.'
        }
      ]
    },
    {
      id: 'organizers',
      title: 'For Event Organizers',
      icon: Users,
      color: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
      faqs: [
        {
          question: 'How do I create an event?',
          answer: 'Log into your organizer account, go to "Create Event" in your dashboard, fill out the event details including title, description, date, venue, and capacity, then submit for admin approval.'
        },
        {
          question: 'How long does event approval take?',
          answer: 'Event approval typically takes 24-48 hours. You\'ll receive an email notification once your event is approved or if changes are requested.'
        },
        {
          question: 'Can I edit my event after it\'s published?',
          answer: 'Yes, you can edit most event details before the registration deadline. However, major changes like date or venue may require re-approval from administrators.'
        },
        {
          question: 'How do I manage event registrations?',
          answer: 'Use the "Manage Registrations" section in your organizer dashboard to view registered participants, approve waitlisted attendees, and export attendance lists.'
        }
      ]
    },
    {
      id: 'privacy',
      title: 'Privacy & Security',
      icon: Shield,
      color: 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400',
      faqs: [
        {
          question: 'How is my personal information protected?',
          answer: 'We use industry-standard encryption and security measures to protect your data. Your personal information is never shared with third parties without your consent.'
        },
        {
          question: 'Can I delete my account?',
          answer: 'Yes, you can request account deletion by contacting our support team. Note that this will permanently remove all your data including event history and certificates.'
        },
        {
          question: 'Who can see my event registrations?',
          answer: 'Only you, the event organizers, and platform administrators can see your registration details. Other students cannot view your event participation history.'
        },
        {
          question: 'Do you use cookies on the website?',
          answer: 'Yes, we use essential cookies for functionality and optional cookies for analytics. You can manage your cookie preferences in your account settings.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-hero">
        <div className="container py-24">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mx-auto">
              <HelpCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Find answers to common questions about EventSphere. Can't find what you're looking for? Our support team is here to help.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search FAQs..."
                className="pl-10 bg-white/95 backdrop-blur"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container">
          {/* Quick Categories */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {faqCategories.map((category) => (
              <Card key={category.id} className="cursor-pointer hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-4 text-center space-y-2">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mx-auto group-hover:shadow-glow transition-all duration-300">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-medium text-sm">{category.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Sections */}
          <div className="space-y-12">
            {faqCategories.map((category) => (
              <div key={category.id} className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-lg">
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-bold">{category.title}</h2>
                    <p className="text-muted-foreground">Common questions about {category.title.toLowerCase()}</p>
                  </div>
                </div>

                <Card className="shadow-medium border-none">
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`${category.id}-${index}`} className="border-b last:border-b-0">
                          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-muted/30">
                            <span className="font-medium">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Contact Support Section */}
          <div className="mt-16">
            <Card className="bg-gradient-card border-none shadow-strong">
              <CardContent className="p-8 text-center space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-heading font-bold">Still have questions?</h2>
                  <p className="text-muted-foreground">
                    Our support team is available 24/7 to help you with any questions or issues.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium">Email Support</h3>
                    <p className="text-sm text-muted-foreground">support@eventsphere.edu</p>
                    <p className="text-xs text-muted-foreground">Response within 24 hours</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-center w-12 h-12 bg-success/10 rounded-lg mx-auto">
                      <Phone className="h-6 w-6 text-success" />
                    </div>
                    <h3 className="font-medium">Phone Support</h3>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-xs text-muted-foreground">Mon-Fri, 9AM-6PM</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mx-auto">
                      <MessageCircle className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-medium">Live Chat</h3>
                    <p className="text-sm text-muted-foreground">Available 24/7</p>
                    <p className="text-xs text-muted-foreground">Instant responses</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Support
                  </Button>
                  <Button variant="outline" size="lg">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Start Live Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;