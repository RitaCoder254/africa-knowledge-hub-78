import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = {
    'About': [
      { name: 'Our Mission & Vision', href: '/about#mission' },
      { name: 'Our Story', href: '/about#story' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Values', href: '/about#values' },
    ],
    'Programs': [
      { name: 'KM Workshops', href: '/programs#workshops' },
      { name: 'Conferences', href: '/programs#conferences' },
      { name: 'Research & Publications', href: '/programs#research' },
      { name: 'Community Engagement', href: '/programs#community' },
    ],
    'Resources': [
      { name: 'Articles & Blog', href: '/knowledge#articles' },
      { name: 'Toolkits & Guides', href: '/knowledge#toolkits' },
      { name: 'Webinars & Videos', href: '/knowledge#webinars' },
      { name: 'FAQ', href: '/knowledge#faq' },
    ],
    'Get Involved': [
      { name: 'Donate', href: '/donate' },
      { name: 'Volunteer', href: '/get-involved#volunteer' },
      { name: 'Partner With Us', href: '/get-involved#partner' },
      { name: 'Newsletter', href: '/get-involved#newsletter' },
    ],
  };

  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Mission */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">IA</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Information Africa</h3>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Transforming Africa through knowledge management and dissemination.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(quickLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-accent" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-primary-foreground/80 text-sm">info@informationafrica.org</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-accent" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-primary-foreground/80 text-sm">+254 724 872 085</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-accent" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-primary-foreground/80 text-sm">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-primary-foreground/80 text-sm">
            © 2025 Information Africa - Transforming Africa through knowledge. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="/privacy" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;