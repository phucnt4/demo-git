import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';
import './App.css';
import './index.css';

function App() {
  const [orchids, setOrchids] = useState([]);
  const [filteredOrchids, setFilteredOrchids] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // Original data
  const data = [
    {
      "id": 1,
      "name": "Phalaenopsis amabilis",
      "origin": "Indonesia, Philippines",
      "color": "White",
      "isSpecial": false,
      "isNatural": true,
      "rating": 4.8,
      "numberOfLike": 1523,
      "category": "Phalaenopsis",
      "image": "/img/Phalaenopsis amabilis .jpg"
    },
    {
      "id": 2,
      "name": "Cattleya labiata",
      "origin": "Brazil",
      "color": "Purple–Pink",
      "isSpecial": false,
      "isNatural": true,
      "rating": 4.7,
      "numberOfLike": 1340,
      "category": "Cattleya",
      "image": "/img/Cattleya labiata .jpg"
    },
    {
      "id": 3,
      "name": "Dendrobium nobile",
      "origin": "Himalayas, Southeast Asia",
      "color": "White–Pink",
      "isSpecial": false,
      "isNatural": true,
      "rating": 4.5,
      "numberOfLike": 980,
      "category": "Dendrobium",
      "image": "/img/Dendrobium nobile .jpg"
    },
    {
      "id": 4,
      "name": "Vanda coerulea",
      "origin": "India, Myanmar",
      "color": "Blue",
      "isSpecial": true,
      "isNatural": true,
      "rating": 4.6,
      "numberOfLike": 876,
      "category": "Vanda",
      "image": "/img/Vanda coerulea .jpg"
    },
    {
      "id": 5,
      "name": "Paphiopedilum rothschildianum",
      "origin": "Malaysia",
      "color": "Yellow–Brown",
      "isSpecial": true,
      "isNatural": true,
      "rating": 4.9,
      "numberOfLike": 620,
      "category": "Paphiopedilum",
      "image": "/img/Paphiopedilum rothschildianum .webp"
    },
    {
      "id": 6,
      "name": "Miltoniopsis vexillaria",
      "origin": "Peru, Bolivia",
      "color": "Pink–White",
      "isSpecial": false,
      "isNatural": true,
      "rating": 4.5,
      "numberOfLike": 540,
      "category": "Miltoniopsis",
      "image": "/img/Miltoniopsis vexillaria .jpg"
    },
    {
      "id": 7,
      "name": "Oncidium sphacelatum",
      "origin": "Mexico, Central America",
      "color": "Yellow",
      "isSpecial": false,
      "isNatural": true,
      "rating": 4.3,
      "numberOfLike": 430,
      "category": "Oncidium",
      "image": "/img/Oncidium sphacelatum .jpg"
    },
    {
      "id": 8,
      "name": "Aerides odorata",
      "origin": "India, Southeast Asia",
      "color": "Light Pink–White",
      "isSpecial": false,
      "isNatural": true,
      "rating": 4.4,
      "numberOfLike": 390,
      "category": "Aerides",
      "image": "/img/Aerides odorata .jpg"
    },
    {
      "id": 9,
      "name": "Cymbidium ensifolium",
      "origin": "China, Vietnam",
      "color": "Light Yellow",
      "isSpecial": false,
      "isNatural": true,
      "rating": 4.2,
      "numberOfLike": 350,
      "category": "Cymbidium",
      "image": "/img/Cymbidium ensifolium .jpg"
    },
    {
      "id": 10,
      "name": "Vanda tricolor",
      "origin": "Indonesia",
      "color": "Blue–White–Purple",
      "isSpecial": false,
      "isNatural": true,
      "rating": 4.6,
      "numberOfLike": 780,
      "category": "Vanda",
      "image": "/img/Vanda tricolor.webp"
    },
    {
      "id": 11,
      "name": "Encyclia tampensis",
      "origin": "Florida, Caribbean",
      "color": "White–Yellow",
      "isSpecial": false,
      "isNatural": true,
      "rating": 4.1,
      "numberOfLike": 310,
      "category": "Encyclia",
      "image": "/img/Encyclia tampensis .webp"
    },
    {
      "id": 12,
      "name": "Brassavola cucullata",
      "origin": "Mexico, Central America",
      "color": "White",
      "isSpecial": false,
      "isNatural": true,
      "rating": 4.0,
      "numberOfLike": 280,
      "category": "Brassavola",
      "image": "/img/Brassavola cucullata .jpg"
    },
    {
      "id": 13,
      "name": "Odontoglossum grande",
      "origin": "Andes (South America)",
      "color": "White–Reddish Brown",
      "isSpecial": false,
      "isNatural": true,
      "rating": 4.3,
      "numberOfLike": 410,
      "category": "Odontoglossum",
      "image": "/img/Odontoglossum grande.jpg"
    },
    {
      "id": 14,
      "name": "Masdevallia coccinea",
      "origin": "Andes (South America)",
      "color": "Orange–Red",
      "isSpecial": true,
      "isNatural": true,
      "rating": 4.2,
      "numberOfLike": 260,
      "category": "Masdevallia",
      "image": "/img/Masdevallia coccinea .jpg"
    },
    {
      "id": 15,
      "name": "Angraecum sesquipedale",
      "origin": "Madagascar",
      "color": "White",
      "isSpecial": true,
      "isNatural": true,
      "rating": 4.8,
      "numberOfLike": 430,
      "category": "Angraecum",
      "image": "/img/Angraecum sesquipedale.jpg"
    },
    {
      "id": 16,
      "name": "Stanhopea tigrina",
      "origin": "Mexico",
      "color": "Orange–Pink",
      "isSpecial": true,
      "isNatural": true,
      "rating": 4.7,
      "numberOfLike": 370,
      "category": "Stanhopea",
      "image": "/img/Stanhopea tigrina.webp"
    }
  ];

  // Get unique categories
  const categories = ['All', ...new Set(data.map(item => item.category))];

  // Initialize data
  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setOrchids(data);
      setFilteredOrchids(data);
      setLoading(false);
    }, 800);
  }, []);

  // Filter by category
  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
    
    if (category === 'All') {
      setFilteredOrchids(
        searchTerm 
          ? orchids.filter(orchid => 
              orchid.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              orchid.origin.toLowerCase().includes(searchTerm.toLowerCase())
            )
          : orchids
      );
    } else {
      setFilteredOrchids(
        orchids.filter(orchid => 
          orchid.category === category && 
          (searchTerm 
            ? orchid.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              orchid.origin.toLowerCase().includes(searchTerm.toLowerCase())
            : true
          )
        )
      );
    }
  };

  // Handle search
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (activeCategory === 'All') {
      setFilteredOrchids(
        value 
          ? orchids.filter(orchid => 
              orchid.name.toLowerCase().includes(value.toLowerCase()) ||
              orchid.origin.toLowerCase().includes(value.toLowerCase())
            )
          : orchids
      );
    } else {
      setFilteredOrchids(
        orchids.filter(orchid => 
          orchid.category === activeCategory && 
          (value 
            ? orchid.name.toLowerCase().includes(value.toLowerCase()) ||
              orchid.origin.toLowerCase().includes(value.toLowerCase())
            : true
          )
        )
      );
    }
  };

  return (
    <>
      <Navbar />
      
      <div className="app-container">
        <div className="container">
          {/* Header Section */}
          <header className="app-header fade-in">
            <h1 className="app-title">Discover Beautiful Orchids</h1>
            <p className="app-description">
              Explore our collection of rare and beautiful orchids from around the world.
              Each orchid has been carefully cataloged with information about its origin, color, and special characteristics.
            </p>
          </header>

          {/* Filters Section */}
          <section className="filters-section fade-in">
            <div className="row">
              <div className="col-md-8">
                <h5 className="filters-title">Browse by Category</h5>
                <div className="category-pills">
                  {categories.map(category => (
                    <div 
                      key={category}
                      className={`category-pill ${activeCategory === category ? 'active' : ''}`}
                      onClick={() => handleCategoryFilter(category)}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-4">
                <h5 className="filters-title">Search</h5>
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by name or origin..."
                    value={searchTerm}
                    onChange={handleSearch}
                    style={{ 
                      borderRadius: '20px',
                      paddingLeft: '2.5rem',
                      borderColor: 'var(--secondary-color)'
                    }}
                  />
                  <i className="fas fa-search position-absolute" 
                    style={{ 
                      left: '0.75rem', 
                      top: '50%', 
                      transform: 'translateY(-50%)', 
                      color: 'var(--primary-color)' 
                    }}
                  ></i>
                </div>
              </div>
            </div>
          </section>

          {/* Loading State */}
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border" role="status" style={{ color: 'var(--primary-color)' }}>
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Loading beautiful orchids...</p>
            </div>
          ) : (
            <>
              {/* Results Count */}
              <div className="mb-4 fade-in">
                <p className="text-muted">
                  Showing {filteredOrchids.length} of {orchids.length} orchids
                  {activeCategory !== 'All' && ` in category ${activeCategory}`}
                  {searchTerm && ` matching "${searchTerm}"`}
                </p>
              </div>

              {/* Orchids Grid */}
              <div className="orchid-grid">
                {filteredOrchids.length > 0 ? (
                  filteredOrchids.map((orchid) => (
                    <Card key={orchid.id} pp={orchid} />
                  ))
                ) : (
                  <div className="col-12 text-center py-5">
                    <i className="fas fa-search fa-3x mb-3" style={{ color: 'var(--secondary-color)' }}></i>
                    <h4>No orchids found</h4>
                    <p>Try changing your search criteria or browse all orchids.</p>
                    <button 
                      className="btn btn-primary mt-3"
                      onClick={() => {
                        setActiveCategory('All');
                        setSearchTerm('');
                        setFilteredOrchids(orchids);
                      }}
                    >
                      View All Orchids
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

