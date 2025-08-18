import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Heart, Users, Handshake, BookOpen, Globe, Mail, ArrowRight, CheckCircle, Calendar, UserCheck, Building, Lightbulb } from 'lucide-react';

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    country: '',
    involvement: '',
    interests: [] as string[],
    message: ''
  });

  const involvementOptions = [
    {
      id: 'volunteer',
      title: 'Become a Volunteer',
      description: 'Contribute your skills and time to support our knowledge management initiatives across Africa.',
      icon: Heart,
      commitments: [
        'Workshop facilitation and support',
        'Content development and review',
        'Community outreach and engagement',
        'Technical support and maintenance'
      ],
      timeCommitment: '5-10 hours per month',
      benefits: [
        'Professional development opportunities',
        'Access to exclusive training materials',
        'Networking with KM professionals',
        'Certificate of volunteer service'
      ]
    },
    {
      id: 'partner',
      title: 'Partner Organization',
      description: 'Join our network of institutional partners working together to advance knowledge management in Africa.',
      icon: Handshake,
      commitments: [
        'Co-hosting workshops and events',
        'Resource and expertise sharing',
        'Joint research initiatives',
        'Cross-promotional activities'
      ],
      timeCommitment: 'Ongoing collaboration',
      benefits: [
        'Expanded network and reach',
        'Shared resources and costs',
        'Enhanced organizational capacity',
        'Joint funding opportunities'
      ]
    },
    {
      id: 'mentor',
      title: 'Expert Mentor',
      description: 'Share your expertise by mentoring emerging knowledge management professionals.',
      icon: UserCheck,
      commitments: [
        'One-on-one mentoring sessions',
        'Guest speaking opportunities',
        'Program curriculum review',
        'Career guidance and support'
      ],
      timeCommitment: '3-5 hours per month',
      benefits: [
        'Recognition as subject matter expert',
        'Contribution to professional development',
        'Building lasting relationships',
        'Staying current with trends'
      ]
    },
    {
      id: 'advocate',
      title: 'Community Advocate',
      description: 'Help spread awareness about the importance of knowledge management in African organizations.',
      icon: Users,
      commitments: [
        'Social media engagement',
        'Event promotion and attendance',
        'Testimonial and story sharing',
        'Local community outreach'
      ],
      timeCommitment: '2-3 hours per month',
      benefits: [
        'Building personal brand',
        'Networking opportunities',
        'Access to latest resources',
        'Community recognition'
      ]
    }
  ];

  const opportunities = [
    {
      title: 'Regional Coordinator',
      type: 'Leadership Role',
      location: 'Various African Countries',
      description: 'Lead knowledge management initiatives in your region and coordinate with local partners.',
      requirements: ['5+ years KM experience', 'Regional network', 'Fluency in local languages'],
      icon: Globe
    },
    {
      title: 'Workshop Facilitator',
      type: 'Training Role',
      location: 'Virtual & In-Person',
      description: 'Facilitate knowledge management workshops and training sessions for professionals.',
      requirements: ['Training experience', 'KM expertise', 'Strong communication skills'],
      icon: BookOpen
    },
    {
      title: 'Content Developer',
      type: 'Creative Role',
      location: 'Remote',
      description: 'Develop training materials, guides, and resources for our knowledge hub.',
      requirements: ['Writing skills', 'KM knowledge', 'Educational design experience'],
      icon: Lightbulb
    },
    {
      title: 'Technical Support',
      type: 'Technical Role',
      location: 'Remote',
      description: 'Provide technical support for our digital platforms and virtual events.',
      requirements: ['IT skills', 'Problem-solving ability', 'Customer service experience'],
      icon: Building
    }
  ];

  const interestAreas = [
    'Knowledge Management',
    'Digital Innovation',
    'Climate Change',
    'Community Development',
    'Policy Analysis',
    'ICT for Development',
    'Research Methods',
    'Capacity Building'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

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
                  src="/lovable-uploads/8aaff1d3-8b7c-4922-af75-55f02c4809d6.png" 
                  alt="Information Africa Logo"
                  className="h-24 object-contain"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Get Involved
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Join our community of change-makers transforming Africa through knowledge management
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4">
                Start Your Journey
              </Button>
            </div>
          </div>
        </section>

        {/* Ways to Get Involved */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-primary">Choose Your Impact</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Whether you're an individual professional or representing an organization, there are multiple ways to contribute to Africa's knowledge transformation
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {involvementOptions.map((option, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <option.icon className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-primary">{option.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">{option.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">What You'll Do:</h4>
                        <ul className="space-y-2">
                          {option.commitments.map((commitment, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                              <span>{commitment}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">What You'll Gain:</h4>
                        <ul className="space-y-2">
                          {option.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between bg-card rounded-lg p-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium">Time Commitment:</span>
                      </div>
                      <span className="text-sm text-accent font-semibold">{option.timeCommitment}</span>
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Current Opportunities */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-primary">Current Opportunities</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Specific roles and positions we're actively recruiting for
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {opportunities.map((opportunity, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                          <opportunity.icon className="w-5 h-5 text-accent-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary">{opportunity.title}</h3>
                          <p className="text-sm text-accent">{opportunity.type}</p>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {opportunity.location}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{opportunity.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-primary">Requirements:</h4>
                      <ul className="space-y-1">
                        {opportunity.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Apply for This Role
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6 text-primary">Join Our Community</h2>
                <p className="text-lg text-muted-foreground">
                  Fill out this form to express your interest and we'll get back to you with next steps
                </p>
              </div>

              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="organization">Organization</Label>
                        <Input
                          id="organization"
                          value={formData.organization}
                          onChange={(e) => handleInputChange('organization', e.target.value)}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="country">Country *</Label>
                        <Input
                          id="country"
                          value={formData.country}
                          onChange={(e) => handleInputChange('country', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label>How would you like to get involved? *</Label>
                      <RadioGroup 
                        value={formData.involvement} 
                        onValueChange={(value) => handleInputChange('involvement', value)}
                        className="mt-3"
                      >
                        {involvementOptions.map((option) => (
                          <div key={option.id} className="flex items-center space-x-2">
                            <RadioGroupItem value={option.id} id={option.id} />
                            <Label htmlFor={option.id}>{option.title}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div>
                      <Label>Areas of Interest (select all that apply)</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                        {interestAreas.map((interest) => (
                          <div key={interest} className="flex items-center space-x-2">
                            <Checkbox
                              id={interest}
                              checked={formData.interests.includes(interest)}
                              onCheckedChange={() => handleInterestToggle(interest)}
                            />
                            <Label htmlFor={interest} className="text-sm">{interest}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Tell us about yourself and why you want to get involved</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={5}
                        className="mt-2"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                      Submit Application
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <Mail className="w-12 h-12 mx-auto mb-6 text-accent" />
              <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
              <p className="text-xl mb-8 opacity-90">
                Get weekly updates on opportunities, events, and insights from across our network
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Your email address" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Subscribe
                </Button>
              </div>
              
              <p className="text-sm mt-4 opacity-70">
                Join 2,500+ professionals in our community
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default GetInvolved;