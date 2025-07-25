import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@informationafrica.org',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+254 724 872 085',
      description: 'Monday - Friday, 9AM - 5PM EAT'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Nairobi, Kenya',
      description: 'East Africa Regional Office'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: '9:00 AM - 5:00 PM',
      description: 'East Africa Time (EAT)'
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl mb-8 opacity-90">
                Ready to transform your organization through knowledge management? Let's start the conversation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover-lift text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2 text-primary">{info.title}</h3>
                    <p className="text-lg font-medium mb-2">{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Have questions about our programs? Ready to partner with us? We'd love to hear from you.
                </p>
                
                <Card>
                  <CardContent className="p-6">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" required />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" required />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" required />
                      </div>
                      
                      <div>
                        <Label htmlFor="organization">Organization</Label>
                        <Input id="organization" />
                      </div>
                      
                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input id="subject" required />
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea id="message" rows={5} required />
                      </div>
                      
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">Regional Contacts</h2>
                <p className="text-muted-foreground mb-8">
                  Connect directly with our regional coordinators for localized support.
                </p>
                
                <div className="space-y-6">
                  {[
                    { region: 'East Africa', name: 'Dr. Nerisa Wanjala', phone: '+254 722 85 88 30', location: 'Kenya' },
                    { region: 'West Africa', name: 'Prof. Airen Okojie', phone: '+234 802 333 6038', location: 'Nigeria' },
                    { region: 'Central Africa', name: 'Dinayen Mbarga', phone: '+237 753 79235', location: 'Cameroon' },
                    { region: 'Southern Africa', name: 'Natasha Mumba', phone: '+260 974087275', location: 'Zambia' }
                  ].map((contact, index) => (
                    <Card key={index} className="hover-lift">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold text-primary">{contact.region}</h4>
                            <p className="text-sm text-muted-foreground">{contact.name}</p>
                            <p className="text-sm">{contact.phone}</p>
                            <p className="text-xs text-accent">{contact.location}</p>
                          </div>
                          <Button size="sm" className="bg-green-500 hover:bg-green-600">
                            WhatsApp
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
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

export default Contact;