import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Star, Users, Building, Globe, BookOpen, TrendingUp, Award, Quote, ArrowRight } from 'lucide-react';

const Impact = () => {
  const impactStats = [
    {
      icon: Users,
      number: '5,000+',
      label: 'Professionals Trained',
      description: 'Knowledge management professionals across Africa',
      progress: 85
    },
    {
      icon: Building,
      number: '150+',
      label: 'Organizations Served',
      description: 'Public and private sector institutions',
      progress: 78
    },
    {
      icon: Globe,
      number: '36+',
      label: 'African Countries',
      description: 'Countries participating in our programs',
      progress: 92
    },
    {
      icon: BookOpen,
      number: '60',
      label: 'Workshops Conducted',
      description: 'Monthly Caravan e-workshops since 2020',
      progress: 100
    }
  ];

  const caseStudies = [
    {
      title: 'Digital Transformation at Kenya ICT Authority',
      challenge: 'The Kenya ICT Authority needed to modernize their knowledge management systems and build internal capacity for digital transformation.',
      solution: 'Information Africa provided a comprehensive 6-month knowledge management capacity building program, including strategy development, staff training, and system implementation support.',
      results: [
        '40% improvement in information retrieval efficiency',
        '60% increase in cross-departmental knowledge sharing',
        'Successful implementation of digital knowledge repository',
        '25 staff members certified in KM best practices'
      ],
      impact: 'The Authority now serves as a model for KM excellence in East African government institutions.',
      category: 'Government Sector',
      location: 'Kenya',
      year: '2023-2024'
    },
    {
      title: 'Climate Information Network in West Africa',
      challenge: 'Agricultural communities in rural Nigeria lacked access to reliable climate information for farming decisions.',
      solution: 'Established a knowledge network connecting meteorological services, agricultural extension workers, and farming communities through digital platforms and training programs.',
      results: [
        '500+ farmers trained in climate information use',
        '30% improvement in crop yield forecasting',
        'Establishment of 15 community information hubs',
        'Partnership with Nigerian Meteorological Agency'
      ],
      impact: 'The network now provides climate information to over 10,000 farmers across three states.',
      category: 'Agriculture & Climate',
      location: 'Nigeria',
      year: '2022-2023'
    },
    {
      title: 'University Knowledge Management Initiative',
      challenge: 'University of Nairobi faced challenges in managing research outputs and facilitating collaboration between departments.',
      solution: 'Implemented a comprehensive research knowledge management system with training for faculty and students on knowledge sharing best practices.',
      results: [
        '200+ research papers properly archived and indexed',
        '50% increase in interdisciplinary collaborations',
        'Digital repository with global access',
        '100+ faculty members trained in KM practices'
      ],
      impact: 'The university has become a leading example of academic knowledge management in East Africa.',
      category: 'Academic Sector',
      location: 'Kenya',
      year: '2021-2022'
    }
  ];

  const testimonials = [
    {
      quote: "Information Africa's knowledge management training transformed how our organization handles information. The practical approaches and African context made all the difference.",
      author: "Dr. Grace Mutegi",
      position: "Director of Policy Planning",
      organization: "Ministry of Education, Kenya",
      rating: 5
    },
    {
      quote: "The Caravan workshops have been invaluable for our team. The monthly sessions keep us updated on global best practices while addressing African-specific challenges.",
      author: "Prof. Adebayo Oladele",
      position: "Dean of Information Sciences",
      organization: "University of Lagos, Nigeria",
      rating: 5
    },
    {
      quote: "Working with Information Africa helped us establish a knowledge management culture that has improved our efficiency and innovation capacity significantly.",
      author: "Marie-Claire Uwimana",
      position: "Chief Information Officer",
      organization: "Rwanda Development Board",
      rating: 5
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'UN Environment Observer Status',
      description: 'Accredited as an observer to the Governing Body of United Nations Environment Programme',
      year: '2021'
    },
    {
      icon: Star,
      title: 'Excellence in KM Training',
      description: 'Recognized by African Union for outstanding contribution to knowledge management in Africa',
      year: '2023'
    },
    {
      icon: TrendingUp,
      title: '5 Years of Consistent Growth',
      description: 'Sustained growth in program reach and impact across the African continent',
      year: '2020-2025'
    },
    {
      icon: Globe,
      title: 'Continental Reach',
      description: 'Expanded to serve professionals in over 36 African countries',
      year: '2024'
    }
  ];

  const outcomes = [
    {
      metric: 'Knowledge Retention',
      before: '45%',
      after: '85%',
      improvement: '+89%'
    },
    {
      metric: 'Cross-Departmental Collaboration',
      before: '25%',
      after: '78%',
      improvement: '+212%'
    },
    {
      metric: 'Information Access Speed',
      before: '24 hours',
      after: '2 hours',
      improvement: '+1,100%'
    },
    {
      metric: 'Staff KM Competency',
      before: '30%',
      after: '92%',
      improvement: '+207%'
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
                Our Impact Across Africa
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Transforming organizations and communities through knowledge management excellence
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4">
                View Success Stories
              </Button>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-primary">Impact by Numbers</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Five years of consistent growth and measurable impact across Africa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <Card key={index} className="hover-lift text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-2">{stat.number}</h3>
                    <p className="font-semibold mb-2">{stat.label}</p>
                    <p className="text-sm text-muted-foreground mb-4">{stat.description}</p>
                    <Progress value={stat.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-2">{stat.progress}% of target achieved</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-primary">Success Stories</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Real-world examples of how our programs have transformed organizations across Africa
              </p>
            </div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                            {study.category}
                          </div>
                          <span className="text-sm text-muted-foreground">{study.location} • {study.year}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-4 text-primary">{study.title}</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2 text-primary">Challenge</h4>
                            <p className="text-muted-foreground">{study.challenge}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2 text-primary">Solution</h4>
                            <p className="text-muted-foreground">{study.solution}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2 text-primary">Impact</h4>
                            <p className="text-muted-foreground font-medium">{study.impact}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-4 text-primary">Key Results</h4>
                        <ul className="space-y-3">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Outcomes */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-primary">Performance Improvements</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Average improvements seen across organizations that completed our programs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {outcomes.map((outcome, index) => (
                <Card key={index} className="hover-lift text-center">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 text-primary">{outcome.metric}</h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Before</span>
                        <span className="font-semibold">{outcome.before}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">After</span>
                        <span className="font-semibold">{outcome.after}</span>
                      </div>
                      
                      <div className="bg-accent/10 rounded-lg p-3">
                        <div className="text-accent font-bold text-lg">{outcome.improvement}</div>
                        <div className="text-xs text-muted-foreground">Improvement</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-primary">What Leaders Say</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Testimonials from organizational leaders who have experienced our impact
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-accent fill-current" />
                      ))}
                    </div>
                    
                    <Quote className="w-8 h-8 text-accent mb-4" />
                    
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                    
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold text-primary">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      <p className="text-sm text-accent">{testimonial.organization}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements & Recognition */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-primary">Recognition & Achievements</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Awards and recognition that validate our commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2 text-primary">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                  <span className="text-xs text-accent font-medium">{achievement.year}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Organization?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the growing community of organizations experiencing measurable impact through knowledge management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Start Your Transformation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Download Impact Report
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

export default Impact;