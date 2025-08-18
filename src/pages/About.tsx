import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { Card, CardContent } from '../components/ui/card';
import { CheckCircle, Users, Target, Heart, Award, Calendar, MapPin, GraduationCap } from 'lucide-react';
import aboutImage from '../assets/about-collaboration.jpg';
import conferenceParticipants from '../assets/conference-participants.jpg';
import certificateCeremony from '../assets/certificate-ceremony.jpg';
import networkingEvent from '../assets/networking-event.jpg';

const About = () => {
  const successStories = [
    {
      year: '2024',
      title: 'The Redsea Cultural Foundation, Somaliland',
      subtitle: 'Capacity Building',
      description: 'Pre-HIBF2024 Course: Training for Professional Librarians and Archivists',
      duration: '17th July to 29th July 2024',
      participants: 10,
      icon: GraduationCap,
      image: conferenceParticipants
    },
    {
      year: '2021-2025',
      title: 'Coulson Harney LLP Law Firm, Nairobi',
      subtitle: 'Library Management System Implementation',
      description: 'Implement the KOHA Integrated library management system and physical library setup',
      duration: 'Ongoing with multiple Service Level Agreements',
      participants: null,
      icon: Users,
      image: certificateCeremony
    },
    {
      year: '2022',
      title: 'Gabiley National Library (GNL), Somaliland',
      subtitle: 'Capacity Building',
      description: 'In-house training on Library Science & Information Management',
      duration: '19th - 24th February 2022',
      participants: 15,
      icon: Target,
      image: networkingEvent
    },
    {
      year: '2022',
      title: 'Museum Management for Heritage Tourism',
      subtitle: 'Berbera Public Museum Support Project',
      description: 'Major output: Draft National Museum Policy for Somaliland',
      duration: '5th – 17th February 2022',
      participants: 25,
      icon: Award,
      image: conferenceParticipants
    }
  ];

  const caravanStats = [
    { number: '60+', label: 'Themed Workshops', icon: GraduationCap },
    { number: '35+', label: 'African Countries', icon: MapPin },
    { number: '2000+', label: 'Participants', icon: Users },
    { number: '300+', label: 'Institutions', icon: Target }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest standards in all our knowledge management initiatives.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of partnerships and community-driven solutions.'
    },
    {
      icon: Heart,
      title: 'Impact',
      description: 'Every action we take is measured by its positive impact on African communities.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We embrace new technologies and methodologies to advance knowledge sharing.'
    }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <main className="pt-32 md:pt-28">
        
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="flex justify-center mb-8">
                <img 
                  src="/lovable-uploads/8aaff1d3-8b7c-4922-af75-55f02c4809d6.png" 
                  alt="Information Africa Logo"
                  className="h-24 object-contain"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">About Information Africa</h1>
              <p className="text-xl text-muted-foreground">
                Transforming Africa through knowledge • Empowering communities through evidence-based solutions since 2020
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section id="story" className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Information Africa Organization was founded in September 2020 in Nairobi, Kenya, with a bold vision: 
                    to transform Africa through knowledge. We recognized that across our continent, communities possessed 
                    incredible wisdom and potential, but often lacked access to the structured information and evidence-based 
                    solutions needed to drive sustainable development.
                  </p>
                  <p>
                    Our key objective emerged from a critical need we observed: to build the capacity of African youth in 
                    information and communication technologies (ICT) and knowledge management, enabling them to improve their 
                    livelihoods and become catalysts for continental transformation. We believe that when young Africans are 
                    equipped with these essential skills, they become powerful agents of change in their communities.
                  </p>
                  <p>
                    Since our inception, we have facilitated over 60 knowledge-sharing sessions through our innovative Caravan 
                    program, connecting practitioners, policymakers, and communities across multiple African regions. Through 
                    strategic partnerships and collaborative networks, we continue building a knowledge-driven Africa where 
                    evidence-based solutions guide development decisions at every level.
                  </p>
                  <p>
                    Today, Information Africa stands as a bridge between knowledge and action, transforming how African 
                    communities access, share, and apply information for sustainable development and improved livelihoods.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src={aboutImage} 
                  alt="Information Africa team collaboration"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section id="mission" className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower Africa through access and use of information via knowledge services (Knowledge Management, 
                    Strategic Learning and ICT) for improved livelihoods and sustainable development across the continent.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A transformed Africa where knowledge and information are accessible to all, driving innovation, 
                    sustainable development, and improved quality of life for every African community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section id="values" className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h4 className="text-xl font-semibold mb-3 text-primary">{value.title}</h4>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section id="success-stories" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {successStories.map((story, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {story.year}
                      </span>
                      <story.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-primary">{story.title}</h4>
                    <p className="text-accent font-medium mb-2">{story.subtitle}</p>
                    <p className="text-sm text-muted-foreground mb-3">{story.description}</p>
                    <div className="flex items-center text-xs text-muted-foreground space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{story.duration}</span>
                      </div>
                      {story.participants && (
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3" />
                          <span>{story.participants} participants</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Monthly E-Workshop Caravan Stats */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-center mb-8 text-primary">Monthly E-Workshop Caravan Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {caravanStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">
                  Featured in KM Stories that Matter and Australian Knowledge Management Leadership Forum
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">COVID-19 Innovation</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">4 Diaspora Countries</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">July 2020 - Present</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Impact Areas</h2>
              <p className="text-lg text-muted-foreground mb-12">
                We focus on key areas that drive sustainable development across Africa
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Environmental Science and Climate Change',
                  'Emerging Trends in Information Management',
                  'Peace Building and Conflict Resolution',
                  'Knowledge Management Systems',
                  'ICT Capacity Building',
                  'Policy Development Support',
                  'Community Engagement',
                  'Strategic Learning Initiatives'
                ].map((area, index) => (
                  <div key={index} className="flex items-center space-x-3 text-left">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-lg p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
              <p className="text-xl mb-8 opacity-90">
                Be part of the transformation. Together, we can build a knowledge-driven Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/get-involved" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-md font-semibold transition-colors duration-200">
                  Get Involved
                </a>
                <a href="/contact" className="border border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-md font-semibold transition-colors duration-200">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default About;