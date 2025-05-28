import React, { useState } from 'react';

export default function Card({ pp }) {
    const {
        id,
        name,
        origin,
        color,
        isSpecial,
        isNatural,
        rating,
        numberOfLike,
        category,
        image
    } = pp;

    const [liked, setLiked] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    
    // Fallback image if the provided URL doesn't work
    const fallbackImage = "https://images.unsplash.com/photo-1566966236813-e943e2f0498a?q=80&w=600&auto=format&fit=crop";
    
    // Handle image error
    const handleImageError = (e) => {
        e.target.src = fallbackImage;
        setImageLoaded(true);
    };

    // Handle image load success
    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <div className="orchid-card fade-in" style={{ animationDelay: `${id * 0.1}s` }}>
            {isSpecial && (
                <span className="orchid-card-badge">
                    <i className="fas fa-star me-1"></i> Special
                </span>
            )}
            
            <div className="orchid-card-img-container" style={{ position: 'relative' }}>
                {!imageLoaded && (
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#f8f9fa'
                    }}>
                        <div className="spinner-border text-secondary" role="status" style={{ width: '3rem', height: '3rem' }}>
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
                <img
                    src={image}
                    className="orchid-card-img"
                    alt={name}
                    onError={handleImageError}
                    onLoad={handleImageLoad}
                    style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
                />
            </div>
            
            <div className="orchid-card-body">
                <h5 className="orchid-card-title">{name}</h5>
                
                <div className="mb-3">
                    <span className="category-pill">{category}</span>
                </div>
                
                <div className="orchid-card-text">
                    <div className="mb-2">
                        <i className="fas fa-map-marker-alt me-2" style={{ color: 'var(--primary-color)' }}></i>
                        <span>{origin}</span>
                    </div>
                    
                    <div className="mb-2">
                        <i className="fas fa-palette me-2" style={{ color: 'var(--primary-color)' }}></i>
                        <span>{color}</span>
                    </div>
                    
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="orchid-card-rating">
                            <span className="orchid-card-rating-stars">
                                {[...Array(Math.floor(rating))].map((_, i) => (
                                    <i key={i} className="fas fa-star"></i>
                                ))}
                                {rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                            </span>
                            <span>({rating})</span>
                        </div>
                        
                        <div 
                            className="orchid-card-likes"
                            onClick={() => setLiked(!liked)}
                            style={{ cursor: 'pointer' }}
                        >
                            <i className={`${liked ? 'fas' : 'far'} fa-heart`} 
                               style={{ 
                                   color: liked ? '#e74c3c' : '#777',
                                   transition: 'transform 0.3s ease',
                                   transform: liked ? 'scale(1.2)' : 'scale(1)'
                               }}></i>
                            <span>{liked ? numberOfLike + 1 : numberOfLike}</span>
                        </div>
                    </div>
                </div>
                
                <button className="btn btn-primary orchid-card-btn">
                    <i className="fas fa-info-circle me-2"></i>
                    View Details
                </button>
            </div>
        </div>
    );
}
