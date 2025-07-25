import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Calendar, Clock, Globe, Users, Phone, MessageCircle, Star } from 'lucide-react';

const Caravan = () => {
  const timeZones = [
    { zone: 'EAT (East Africa Time)', time: '10:00 AM - 12:00 PM', countries: 'Kenya, Uganda, Tanzania' },
    { zone: 'WAT/CAT (West/Central Africa)', time: '9:00 AM - 11:00 AM', countries: 'Nigeria, Cameroon, Ghana' },
    { zone: 'SAT (South Africa Time)', time: '10:00 AM - 12:00 PM', countries: 'South Africa, Zambia, Botswana' }
  ];

  const registrationContacts = [
    { country: 'Kenya', contact: 'Nerisa', phone: '+254 722 85 88 30' },
    { country: 'Nigeria', contact: 'Prof. Airen', phone: '+234 802 333 6038' },
    { country: 'Cameroon', contact: 'Dinayen', phone: '+237 753 79235' },
    { country: 'Zambia', contact: 'Natasha', phone: '+260 974087275' }
  ];

  const participatingCountries = [
    'Kenya', 'Nigeria', 'Cameroon', 'Zambia', 'South Africa', 'Ghana', 'Uganda', 'Tanzania',
    'Ethiopia', 'Zimbabwe', 'Botswana', 'Namibia', 'Rwanda', 'Malawi', 'Senegal', 'Mali',
    'Burkina Faso', 'Côte d\'Ivoire', 'Niger', 'Chad', 'Central African Republic', 'Gabon',
    'Congo', 'Democratic Republic of Congo', 'Angola', 'Mozambique', 'Madagascar', 'Mauritius',
    'Seychelles', 'Comoros', 'Djibouti', 'Somalia', 'Sudan', 'South Sudan', 'Egypt', 'Libya'
  ];

  const milestones = [
    { year: '2020', event: 'Launch of The Caravan', description: 'First monthly e-workshop series began' },
    { year: '2021', event: '12 Workshops Completed', description: 'Established regular monthly rhythm' },
    { year: '2022', event: '24 Workshops & Growing', description: 'Expanded to multiple time zones' },
    { year: '2023', event: '36 Workshops & Conferences', description: 'Added in-person regional conferences' },
    { year: '2024', event: '48 Workshops & Partnerships', description: 'Strategic partnerships formed' },
    { year: '2025', event: '60th Workshop Milestone', description: 'Celebrating 5 years of transformation' }
  ];

  const handleWhatsAppRegistration = (phone: string, contact: string, country: string) => {
    const message = encodeURIComponent(`Hello ${contact}, I would like to register for the 60th Caravan E-Workshop - Visions for a Transformed Africa. I'm contacting from ${country}.`);
    window.open(`https://wa.me/${phone.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <main className="pt-32 md:pt-28">
        
        {/* Hero Section */}
        <section className="py-20 hero-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Globe className="w-8 h-8" />
                <span className="text-2xl font-bold">THE CARAVAN AT 5 YEARS</span>
                <Star className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transforming Africa through knowledge
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg mb-8">
                <div>
                  <p className="font-semibold">5 Years of Impact</p>
                  <p className="opacity-90">60 Workshops</p>
                </div>
                <div>
                  <p className="font-semibold">60TH E-WORKSHOP</p>
                  <p className="opacity-90">30TH JULY 2025</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">🎯 THEME 60</h2>
                <p className="text-xl">
                  VISIONS FOR A TRANSFORMED AFRICA - Reflection on the Five-Year Role of the Caravan
                </p>
              </div>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4">
                Register Now
              </Button>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-primary">Date</h3>
                  <p className="text-muted-foreground">July 30, 2025</p>
                  <p className="text-sm text-muted-foreground">Monthly Series</p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <Globe className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-primary">Format</h3>
                  <p className="text-muted-foreground">Virtual via Zoom</p>
                  <p className="text-sm text-muted-foreground">FREE to attend</p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-primary">Participants</h3>
                  <p className="text-muted-foreground">36+ Countries</p>
                  <p className="text-sm text-muted-foreground">500+ Registered</p>
                </CardContent>
              </Card>
            </div>

            {/* Time Zones */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8 text-primary">Multiple Time Zones</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {timeZones.map((tz, index) => (
                  <Card key={index} className="p-6">
                    <CardContent className="p-0">
                      <Clock className="w-8 h-8 text-accent mb-3" />
                      <h4 className="font-bold text-primary mb-2">{tz.zone}</h4>
                      <p className="text-lg font-semibold text-accent mb-2">{tz.time}</p>
                      <p className="text-sm text-muted-foreground">{tz.countries}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Register via WhatsApp</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {registrationContacts.map((contact, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full mx-auto mb-4">
                      <Phone className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-center text-primary mb-2">{contact.country}</h4>
                    <p className="text-center text-muted-foreground mb-2">{contact.contact}</p>
                    <p className="text-center text-accent font-semibold mb-4">{contact.phone}</p>
                    <Button 
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                      onClick={() => handleWhatsAppRegistration(contact.phone, contact.contact, contact.country)}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Register
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-muted-foreground mb-4">For general inquiries:</p>
              <div className="bg-primary rounded-lg p-6 text-white max-w-md mx-auto">
                <p className="font-semibold mb-2">Email Registration</p>
                <p className="text-primary-foreground/90">info@informationafrica.org</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5-Year Journey */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our 5-Year Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent-foreground font-bold text-lg">{milestone.year}</span>
                    </div>
                    <h4 className="text-lg font-bold text-center text-primary mb-3">{milestone.event}</h4>
                    <p className="text-center text-muted-foreground text-sm">{milestone.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Participating Countries */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Participating Countries</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {participatingCountries.map((country, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
                    <span className="text-sm font-medium text-muted-foreground">{country}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-lg text-accent font-semibold">36+ Countries and Growing!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Attend */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12 text-primary">Why Attend the 60th Workshop?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-primary mb-3">🌟 Special Milestone</h4>
                  <p className="text-muted-foreground mb-6">
                    Celebrate 5 years of transformative knowledge sharing across Africa with fellow professionals.
                  </p>
                  
                  <h4 className="text-lg font-semibold text-primary mb-3">🤝 Network Building</h4>
                  <p className="text-muted-foreground mb-6">
                    Connect with knowledge management professionals from 36+ African countries.
                  </p>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-primary mb-3">📚 Knowledge Exchange</h4>
                  <p className="text-muted-foreground mb-6">
                    Share experiences and learn from successful knowledge management initiatives across the continent.
                  </p>
                  
                  <h4 className="text-lg font-semibold text-primary mb-3">🎯 Future Vision</h4>
                  <p className="text-muted-foreground mb-6">
                    Contribute to shaping the next phase of Africa's knowledge transformation journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Don't Miss This Historic Milestone!</h2>
            <p className="text-xl mb-8 opacity-90">
              Join us for the 60th Caravan E-Workshop and be part of Africa's knowledge revolution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Register via WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Email Registration
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

export default Caravan;