import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      region: 'East Africa Head',
      name: 'Nerisa',
      phone: '+254 722 85 88 30',
      country: 'Kenya'
    },
    {
      region: 'West Africa Head',
      name: 'Prof. Airen',
      phone: '+234 802 333 6038',
      country: 'Nigeria'
    },
    {
      region: 'Central Africa Head',
      name: 'Dinayen',
      phone: '+237 753 79235',
      country: 'Cameroon'
    },
    {
      region: 'Southern Africa Head',
      name: 'Natasha',
      phone: '+260 974087275',
      country: 'Zambia'
    }
  ];

  const handleWhatsAppClick = (phone: string, name: string) => {
    const message = encodeURIComponent(`Hello ${name}, I would like to learn more about Information Africa programs.`);
    window.open(`https://wa.me/${phone.replace(/\D/g, '')}?text=${message}`, '_blank');
    setIsOpen(false);
  };

  const handleGeneralContact = () => {
    const message = encodeURIComponent('Hello, I would like to learn more about Information Africa programs.');
    window.open(`https://wa.me/254724872085?text=${message}`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-40"
        aria-label="WhatsApp Contact"
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {/* Contact Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5 text-green-500" />
              <span>Contact Information Africa</span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Choose your regional contact or reach out to our general contact:
            </p>
            
            {/* Regional Contacts */}
            <div className="space-y-3">
              {contacts.map((contact) => (
                <div
                  key={contact.region}
                  className="p-3 border border-border rounded-lg hover:bg-card transition-colors duration-200"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-sm">{contact.region}</p>
                      <p className="text-xs text-muted-foreground">{contact.name} - {contact.country}</p>
                      <p className="text-xs text-primary">{contact.phone}</p>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => handleWhatsAppClick(contact.phone, contact.name)}
                      className="bg-green-500 hover:bg-green-600 text-white"
                    >
                      Chat
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* General Contact */}
            <div className="border-t border-border pt-4">
              <Button
                onClick={handleGeneralContact}
                className="w-full bg-primary hover:bg-primary/90"
              >
                General Contact - info@informationafrica.org
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WhatsAppFloat;