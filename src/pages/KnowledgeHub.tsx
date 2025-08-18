import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { BookOpen, Download, Play, Search, Calendar, User, ArrowRight, FileText, Video, BookOpenCheck, Users, Award } from 'lucide-react';

const KnowledgeHub = () => {

  const resources = [
    {
      title: 'KM Assessment Framework for African Organizations',
      description: 'Comprehensive framework for evaluating knowledge management maturity in African institutional contexts.',
      type: 'PDF Guide',
      size: '2.3 MB',
      downloads: '1,234',
      icon: FileText
    },
    {
      title: 'Knowledge Sharing Culture Development Toolkit',
      description: 'Practical tools and strategies for building knowledge-sharing cultures in diverse organizational settings.',
      type: 'PDF Toolkit',
      size: '4.1 MB',
      downloads: '892',
      icon: BookOpenCheck
    },
    {
      title: 'Digital Archives Management for NGOs',
      description: 'Best practices guide for establishing and maintaining digital archives in non-profit organizations.',
      type: 'PDF Manual',
      size: '3.7 MB',
      downloads: '567',
      icon: FileText
    },
    {
      title: 'Virtual Workshop Facilitation Handbook',
      description: 'Complete guide for designing and facilitating effective virtual workshops in African contexts.',
      type: 'PDF Handbook',
      size: '5.2 MB',
      downloads: '1,456',
      icon: BookOpen
    }
  ];

  const webinars = [
    {
      title: 'Climate Information Systems for Agricultural Planning',
      description: 'How knowledge management can improve climate information delivery to smallholder farmers.',
      duration: '45 minutes',
      views: '2,345',
      date: 'December 15, 2024',
      thumbnail: '/placeholder-video-1.jpg'
    },
    {
      title: 'Digital Preservation of Cultural Heritage',
      description: 'Strategies for preserving and sharing Africa\'s rich cultural knowledge in digital formats.',
      duration: '38 minutes',
      views: '1,789',
      date: 'November 28, 2024',
      thumbnail: '/placeholder-video-2.jpg'
    },
    {
      title: 'Knowledge Networks for Innovation in Africa',
      description: 'Building collaborative networks that drive innovation across African research institutions.',
      duration: '52 minutes',
      views: '3,112',
      date: 'November 10, 2024',
      thumbnail: '/placeholder-video-3.jpg'
    }
  ];

  const categories = [
    'All Categories',
    'Knowledge Management',
    'Digital Innovation',
    'Climate Change',
    'Community Development',
    'Policy Analysis',
    'ICT for Development',
    'Research Methods'
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <main className="pt-32 md:pt-28">
        
        {/* Hero Section */}
        <section className="py-20 hero-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <img 
                  src="/src/assets/information-africa-logo.png" 
                  alt="Information Africa Logo"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Knowledge Hub
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Access cutting-edge research, practical resources, and expert insights on knowledge management in Africa
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input 
                  placeholder="Search articles, resources, videos..." 
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-card">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <Badge 
                  key={index} 
                  variant={index === 0 ? "default" : "outline"}
                  className="cursor-pointer hover:bg-accent hover:text-accent-foreground"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Knowledge Management Focus */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Knowledge Management Excellence</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Access practical resources, tools, and insights from our extensive experience in knowledge management across Africa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6 hover-lift">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Training Programs</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Comprehensive capacity building programs for librarians, archivists, and knowledge management professionals
                  </p>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover-lift">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Monthly Caravan</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Join our monthly e-workshops connecting 2000+ professionals across 35+ African countries
                  </p>
                  <Button variant="outline" size="sm">
                    Join Caravan
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover-lift">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Conferences</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Host of the Africa Regional Conference on Knowledge Management and related events
                  </p>
                  <Button variant="outline" size="sm">
                    View Events
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Resources & Downloads */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-primary">Toolkits & Resources</h2>
              <Button variant="outline">
                View All Resources
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <resource.icon className="w-6 h-6 text-accent-foreground" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold mb-2 text-primary">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span>{resource.type}</span>
                            <span>{resource.size}</span>
                            <span>{resource.downloads} downloads</span>
                          </div>
                          <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Webinars & Videos */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-primary">Webinars & Videos</h2>
              <Button variant="outline">
                View All Videos
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {webinars.map((webinar, index) => (
                <Card key={index} className="hover-lift overflow-hidden">
                  <div className="aspect-video bg-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-primary ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {webinar.duration}
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 text-primary">{webinar.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{webinar.description}</p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Video className="w-3 h-3" />
                        <span>{webinar.views} views</span>
                      </div>
                      <span>{webinar.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter for the latest insights on knowledge management in Africa
            </p>
            
            <div className="max-w-md mx-auto flex gap-2">
              <Input 
                placeholder="Your email address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm mt-4 opacity-70">
              Join 2,500+ professionals getting weekly insights
            </p>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default KnowledgeHub;