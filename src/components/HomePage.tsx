import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Users, Building, Globe, Calendar, Play, ArrowRight, CheckCircle } from 'lucide-react';
import heroImage from '../assets/hero-conference.jpg';
import aboutImage from '../assets/about-collaboration.jpg';
import workshopImage from '../assets/workshop-training.jpg';
import onlineImage from '../assets/online-learning.jpg';

const HomePage = () => {
  const stats = [
    { number: '500+', label: 'Participants', icon: Users },
    { number: '100+', label: 'Institutions', icon: Building },
    { number: '20+', label: 'Countries', icon: Globe },
    { number: '5', label: 'Years of Experience', icon: Calendar },
  ];

  const ctaBlocks = [
    {
      title: 'Become A Participant',
      description: 'Join our community of knowledge professionals and contribute to Africa\'s transformation.',
      image: workshopImage,
      cta: 'Join Us Now',
      href: '/get-involved'
    },
    {
      title: 'Workshop and Training',
      description: 'Participate in capacity building workshops focused on ICT and knowledge management.',
      image: workshopImage,
      cta: 'Register Here',
      href: '/programs'
    },
    {
      title: 'Take A Course From Us',
      description: 'Access our comprehensive online courses designed for African professionals.',
      image: onlineImage,
      cta: 'Sign Up For Course',
      href: '/courses'
    }
  ];

  const upcomingEvents = [
    {
      title: 'The Caravan 60th E-Workshop',
      date: 'July 30, 2025',
      theme: 'Visions for a Transformed Africa - Reflection on the Five-Year Role of the Caravan',
      description: 'Join us for a special milestone celebration marking 5 years of transformative knowledge sharing.',
      featured: true
    },
    {
      title: 'Knowledge Management Workshop',
      date: 'August 15, 2025',
      description: 'Advanced strategies for organizational knowledge management in African contexts.',
      featured: false
    },
    {
      title: 'ICT Capacity Building Seminar',
      date: 'September 5, 2025',
      description: 'Building digital skills for policy makers and development professionals.',
      featured: false
    }
  ];

  const blogPosts = [
    {
      title: 'The Future of Knowledge Management in Africa',
      excerpt: 'Exploring emerging trends and opportunities for knowledge sharing across the continent.',
      date: 'January 10, 2025',
      category: 'Knowledge Management'
    },
    {
      title: 'Digital Transformation in African Organizations',
      excerpt: 'How technology is reshaping the way African institutions manage and share knowledge.',
      date: 'January 5, 2025',
      category: 'Digital Innovation'
    },
    {
      title: 'Building Sustainable Knowledge Networks',
      excerpt: 'Strategies for creating lasting partnerships that drive knowledge exchange.',
      date: 'December 28, 2024',
      category: 'Networking'
    }
  ];

  const partners = [
    'UN Environment Programme', 'African Union', 'NEPAD', 'UNESCO', 'World Bank',
    'African Development Bank', 'Kenya ICT Authority', 'University of Nairobi'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto fade-in">
            <div className="flex justify-center mb-8">
              <img 
                src="/src/assets/information-africa-logo.png" 
                alt="Information Africa Logo"
                className="w-32 h-32 object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Building a Knowledge-Driven Africa
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
              Empowering communities through evidence-based solutions, strategic learning, and sustainable development initiatives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4" asChild>
                <Link to="/programs">
                  Explore Our Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4" asChild>
                <Link to="/get-involved">
                  Join Our Mission
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center fade-in">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Information Africa Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Transforming Africa Through Knowledge
              </h2>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                Information Africa is a non-profit organization with objectives that target to empower Africa through access and use of information. We intend to do this through Knowledge Service (Knowledge Management, Strategic Learning and ICT).
              </p>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                Policy-making plays an important role in development for any given country. Information Africa carries out capacity building for policy-makers within Africa.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  'Environmental Science and Climate Change',
                  'Peace Building and Conflict Resolution',
                  'ICT Capacity Building',
                  'Community Engagement',
                  'Emerging Trends in Information Management',
                  'Knowledge Management Systems',
                  'Policy Development Support',
                  'Strategic Learning Initiatives'
                ].map((expertise, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">{expertise}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link to="/about">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            
            <div className="fade-in-delay">
              <img 
                src={aboutImage} 
                alt="African professionals collaborating on knowledge management"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Blocks */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ctaBlocks.map((block, index) => (
              <Card key={index} className="fade-in group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={block.image} 
                    alt={block.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{block.title}</h3>
                  <p className="text-muted-foreground mb-4">{block.description}</p>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                    <Link to={block.href}>
                      {block.cta}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Participate Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">Don't Miss Any Training or Workshop</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our workshops focus on building capacity in ICT and Knowledge Management, equipping participants with essential skills for Africa's digital transformation.
            </p>
            
            <div className="bg-card rounded-lg p-8 mb-8">
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-16 h-16 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">Featured Video</p>
                  <Button className="mt-4 bg-primary hover:bg-primary/90">
                    PLAY SHORT VIDEO
                  </Button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Watch: Africa Knowledge Management Transformative Caravan Overview
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Upcoming Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className={`fade-in ${event.featured ? 'ring-2 ring-accent' : ''}`}>
                <CardContent className="p-6">
                  {event.featured && (
                    <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit">
                      Featured Event
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-2 text-primary">{event.title}</h3>
                  <p className="text-accent font-medium mb-2">{event.date}</p>
                  {event.theme && (
                    <p className="text-sm font-medium mb-3 text-muted-foreground">Theme: {event.theme}</p>
                  )}
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <Button className={`w-full ${event.featured ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : 'bg-primary hover:bg-primary/90'}`} asChild>
                    <Link to={event.featured ? '/caravan' : '/events'}>
                      {event.featured ? 'Reserve Your Spot' : 'View Details'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View All Events
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Knowledge Spotlight */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Recent Blog & News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="fade-in hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit">
                    {post.category}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <Button variant="ghost" size="sm">
                      Read More
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View All Blog
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="text-center fade-in">
                <div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center mb-2 p-2">
                  <span className="text-xs font-medium text-gray-600">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Quick Access */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Africa Through Knowledge?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join our community and be part of the knowledge revolution across Africa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/get-involved">
                  Get Involved
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;