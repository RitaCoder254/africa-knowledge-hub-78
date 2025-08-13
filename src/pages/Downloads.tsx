import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { Download, FileText, Search, Filter, Eye } from 'lucide-react';

const Downloads = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const documents = [
    {
      title: 'Caravan 60th E-Workshop Communiqué',
      type: 'Communiqué',
      category: 'Caravan',
      date: '2025-07-30',
      size: '2.1 MB',
      format: 'PDF',
      description: 'Outcomes and declarations from the milestone 60th Caravan session on "Visions for a Transformed Africa"',
      downloads: 245,
      featured: true
    },
    {
      title: 'Knowledge Management Policy Brief 2025',
      type: 'Policy Brief',
      category: 'Research',
      date: '2025-01-15',
      size: '1.8 MB',
      format: 'PDF',
      description: 'Evidence-based policy recommendations for implementing knowledge management systems in African institutions',
      downloads: 189,
      featured: false
    },
    {
      title: 'ICT Capacity Building Workshop Materials',
      type: 'Workshop Materials',
      category: 'Training',
      date: '2024-12-10',
      size: '5.3 MB',
      format: 'ZIP',
      description: 'Complete training materials and presentation slides for ICT capacity building programs',
      downloads: 156,
      featured: false
    },
    {
      title: 'Information Africa Annual Report 2024',
      type: 'Annual Report',
      category: 'Reports',
      date: '2024-12-31',
      size: '3.7 MB',
      format: 'PDF',
      description: 'Comprehensive overview of organizational progress, impact metrics, and achievements in 2024',
      downloads: 298,
      featured: true
    },
    {
      title: 'Strategic Learning Implementation Guide',
      type: 'Best Practice Guide',
      category: 'Resources',
      date: '2024-11-20',
      size: '2.9 MB',
      format: 'PDF',
      description: 'Implementation toolkit and frameworks for strategic learning initiatives in development organizations',
      downloads: 134,
      featured: false
    },
    {
      title: 'Digital Transformation Research Publication',
      type: 'Research Publication',
      category: 'Research',
      date: '2024-10-15',
      size: '4.2 MB',
      format: 'PDF',
      description: 'Evidence-based study on digital transformation trends and opportunities across African organizations',
      downloads: 167,
      featured: false
    }
  ];

  const categories = ['All', 'Caravan', 'Training', 'Research', 'Reports', 'Resources'];
  const documentTypes = ['All', 'Communiqué', 'Policy Brief', 'Workshop Materials', 'Annual Report', 'Best Practice Guide', 'Research Publication'];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesType = selectedType === 'all' || doc.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const handleDownload = (docTitle: string) => {
    // In a real implementation, this would trigger the actual download
    console.log(`Downloading: ${docTitle}`);
  };

  const handlePreview = (docTitle: string) => {
    // In a real implementation, this would open a preview modal
    console.log(`Previewing: ${docTitle}`);
  };

  return (
    <div className="min-h-screen bg-background font-baskerville">
      <Header />
      <main className="pt-32 md:pt-28">
        {/* Hero Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Downloads & Resources
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Access our comprehensive library of communiqués, policy briefs, research publications, and training materials
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search documents..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <FileText className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    {documentTypes.map(type => (
                      <SelectItem key={type} value={type === 'All' ? 'all' : type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Documents Library */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredDocuments.map((doc, index) => (
                <Card key={index} className={`hover:shadow-lg transition-shadow duration-300 ${doc.featured ? 'ring-2 ring-accent' : ''}`}>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg font-semibold text-primary flex-1 mr-4">
                        {doc.title}
                      </CardTitle>
                      {doc.featured && (
                        <Badge className="bg-accent text-accent-foreground">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline">{doc.type}</Badge>
                      <Badge variant="outline">{doc.category}</Badge>
                      <Badge variant="outline">{doc.format}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {doc.description}
                    </p>
                    <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                      <span>{new Date(doc.date).toLocaleDateString()}</span>
                      <span>{doc.size}</span>
                      <span>{doc.downloads} downloads</span>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        onClick={() => handlePreview(doc.title)}
                        variant="outline" 
                        size="sm"
                        className="flex-1"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      <Button 
                        onClick={() => handleDownload(doc.title)}
                        className="bg-accent hover:bg-accent/90 text-accent-foreground flex-1"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredDocuments.length === 0 && (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">No documents found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Document Request Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-primary">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us to request specific documents or get access to additional resources from our archives.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Request Documents
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

export default Downloads;