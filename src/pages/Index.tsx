import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import HomePage from '../components/HomePage';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <main className="pt-32 md:pt-28">
        <HomePage />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
