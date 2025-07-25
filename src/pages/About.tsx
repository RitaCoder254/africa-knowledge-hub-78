import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { Card, CardContent } from '../components/ui/card';
import { CheckCircle, Users, Target, Heart, Award } from 'lucide-react';
import aboutImage from '../assets/about-collaboration.jpg';

const About = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Mwangi',
      role: 'Executive Director',
      bio: 'Leading expert in knowledge management with over 15 years of experience in African development.',
      education: 'PhD in Information Science, University of Nairobi'
    },
    {
      name: 'Prof. James Achieng',
      role: 'Head of Research',
      bio: 'Renowned researcher in ICT and sustainable development across Africa.',
      education: 'PhD in Development Studies, Makerere University'
    },
    {
      name: 'Mary Okonkwo',
      role: 'Program Manager',
      bio: 'Specialist in capacity building and community engagement with extensive field experience.',
      education: 'MSc in Development Management, University of Cape Town'
    },
    {
      name: 'Daniel Kibaki',
      role: 'ICT Coordinator',
      bio: 'Technology expert focused on digital transformation in African organizations.',
      education: 'BSc in Computer Science, Kenyatta University'
    }
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">About Information Africa</h1>
              <p className="text-xl text-muted-foreground">
                Empowering Africa through access and use of information via knowledge services since 2020
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
                    Information Africa Organization (IAO) was registered in September 2020 in Nairobi, Kenya, 
                    with a clear mission to enable access and use of knowledge and information through knowledge 
                    services including Knowledge Management, Archives & Records Management, and Libraries & Resource Centres.
                  </p>
                  <p>
                    Our journey began with a vision to improve livelihoods across Africa by bridging the knowledge gap 
                    that often hinders development progress. We recognized that information is power, and access to 
                    relevant, timely knowledge can transform communities, organizations, and entire nations.
                  </p>
                  <p>
                    Today, IAO is accredited as an observer to the Governing Body of United Nations Environment Programme 
                    (UN Environment), reflecting our commitment to environmental sustainability and global partnerships 
                    in our knowledge management initiatives.
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

        {/* Our Team */}
        <section id="team" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="h-64 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-1 text-primary">{member.name}</h4>
                    <p className="text-accent font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-3">{member.bio}</p>
                    <p className="text-xs text-muted-foreground font-medium">{member.education}</p>
                  </CardContent>
                </Card>
              ))}
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