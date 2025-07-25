import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Users, BookOpen, Globe, Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: 'KM Workshops',
      description: 'Comprehensive knowledge management capacity building programs designed for African professionals.',
      features: [
        'Organizational Knowledge Assessment',
        'Knowledge Sharing Strategy Development',
        'Digital Knowledge Platforms',
        'KM Culture Building'
      ],
      duration: '3-5 days',
      mode: 'Hybrid (Online & In-person)',
      participants: '20-50 professionals',
      icon: BookOpen
    },
    {
      title: 'The Caravan E-Workshops',
      description: 'Monthly virtual workshops focusing on transformative knowledge sharing across Africa.',
      features: [
        'Expert Panel Discussions',
        'Case Study Presentations',
        'Interactive Q&A Sessions',
        'Networking Opportunities'
      ],
      duration: '2 hours monthly',
      mode: 'Virtual via Zoom',
      participants: '500+ participants',
      icon: Globe,
      featured: true
    },
    {
      title: 'Regional Conferences',
      description: 'Annual conferences bringing together knowledge management professionals from across Africa.',
      features: [
        'Keynote Presentations',
        'Research Paper Sessions',
        'Workshop Breakouts',
        'Cultural Exchange'
      ],
      duration: '3-4 days',
      mode: 'In-person',
      participants: '200-500 delegates',
      icon: Users
    },
    {
      title: 'Research & Publications',
      description: 'Collaborative research initiatives addressing knowledge management challenges in Africa.',
      features: [
        'Policy Research Papers',
        'Best Practice Guides',
        'Case Study Documentation',
        'Academic Publications'
      ],
      duration: 'Ongoing',
      mode: 'Collaborative',
      participants: 'Research teams',
      icon: BookOpen
    }
  ];

  const upcomingPrograms = [
    {
      title: 'The Caravan 60th E-Workshop',
      date: 'July 30, 2025',
      time: 'Multiple time zones',
      location: 'Virtual via Zoom',
      theme: 'Visions for a Transformed Africa - Five-Year Reflection',
      registration: 'Open',
      featured: true
    },
    {
      title: 'Knowledge Management Fundamentals',
      date: 'August 15-17, 2025',
      time: '9:00 AM - 5:00 PM EAT',
      location: 'Nairobi, Kenya',
      theme: 'Building KM Capacity in Public Sector',
      registration: 'Early Bird'
    },
    {
      title: 'ICT for Development Workshop',
      date: 'September 5-7, 2025',
      time: '10:00 AM - 4:00 PM WAT',
      location: 'Lagos, Nigeria',
      theme: 'Digital Transformation in African Organizations',
      registration: 'Opening Soon'
    }
  ];

  const benefits = [
    {
      title: 'Professional Development',
      description: 'Gain internationally recognized knowledge management skills and certifications.',
      icon: BookOpen
    },
    {
      title: 'Networking Opportunities',
      description: 'Connect with KM professionals from across Africa and build lasting partnerships.',
      icon: Users
    },
    {
      title: 'Practical Tools',
      description: 'Access proven frameworks, templates, and methodologies for immediate application.',
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <main className="pt-32 md:pt-28">
        
        {/* Hero Section */}
        <section className="py-20 hero-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Programs
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Comprehensive knowledge management capacity building for African professionals
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4">
                Register Now
              </Button>
            </div>
          </div>
        </section>

        {/* Programs Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-primary">What We Offer</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our programs are designed to build knowledge management capacity across Africa, 
                focusing on practical skills and collaborative learning.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <Card key={index} className={`hover-lift ${program.featured ? 'ring-2 ring-accent' : ''}`}>
                  <CardContent className="p-6">
                    {program.featured && (
                      <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit">
                        Featured Program
                      </div>
                    )}
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <program.icon className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-primary">{program.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">{program.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-accent" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span>{program.mode}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-accent" />
                        <span>{program.participants}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className={`w-full ${program.featured ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : 'bg-primary hover:bg-primary/90'}`}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Programs */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Upcoming Programs</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {upcomingPrograms.map((program, index) => (
                <Card key={index} className={`hover-lift ${program.featured ? 'ring-2 ring-accent' : ''}`}>
                  <CardContent className="p-6">
                    {program.featured && (
                      <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit">
                        Milestone Event
                      </div>
                    )}
                    
                    <h3 className="text-lg font-bold mb-3 text-primary">{program.title}</h3>
                    <p className="text-sm font-medium text-accent mb-4">{program.theme}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>{program.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{program.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span>{program.location}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-sm">
                        <span className="text-muted-foreground">Registration: </span>
                        <span className="font-medium text-accent">{program.registration}</span>
                      </div>
                      <Button size="sm" className={program.featured ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : 'bg-primary hover:bg-primary/90'}>
                        Register
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Program Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-primary">Why Choose Our Programs?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our programs offer unique value propositions designed specifically for the African context
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your KM Capacity?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of professionals who have transformed their organizations through our programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                View All Programs
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Us
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Programs;