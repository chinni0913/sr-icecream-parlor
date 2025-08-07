import Summer from '../../assets/summer.jpg';
import Winter from '../../assets/winter.png';
import Rainy from '../../assets/rainy.jpg';
import './SeasonalDelights.css';
import { Link } from 'react-router-dom';

const delights = [
    {
        title: '🌞 Summer Delight',
        image: Summer,
        alt: 'Summer Delight',
        desc: 'Beat the heat with our tropical mango, juicy watermelon, and tangy citrus scoops. A perfect chill for sunny days!',
    },
    {
        title: '❄️ Winter Delight',
        image: Winter,
        alt: 'Winter Delight',
        desc: 'Cozy up with indulgent hot fudge, rich cocoa chip, and our signature cinnamon swirl — warmth meets creaminess!',
    },
    {
        title: '🌧️ Rainy Delight',
        image: Rainy,
        alt: 'Rainy Delight',
        desc: 'Rainy days call for sweet surprises — try our chai masala scoop or spiced almond caramel that melts with every drizzle.',
    },
];

const SeasonalDelights = () => (
    <div className="container py-5" style={{ backgroundColor: '#fefefe' }}>
        <h2 className="text-center fw-bold mb-4">Seasonal Delights</h2>
        <p className="text-center text-muted mb-5">
            No matter the season, there's a SoftRich Ice Cream flavor to melt your heart. Discover our hand-picked seasonal favorites!
        </p>

        <div className="row g-4 justify-content-center">
            {delights.map(({ title, image, alt, desc }, index) => (
                <div key={index} className="col-md-4">
                    <div className="card seasonal-card shadow-sm h-100 border-0 rounded-4 overflow-hidden">
                        <div className="image-wrapper">
                            <img src={image} alt={alt} className="card-img-top seasonal-img" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title fw-semibold">{title}</h5>
                            <p className="card-text text-muted">{desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="text-center mt-5">
            <h4 className="mb-3 fw-semibold">Pick Your Seasonal Favorite!</h4>
            <Link
                to="/flavors"
                className="btn btn-lg px-4 py-2"
                style={{
                    backgroundColor: '#6c5ce7',
                    color: '#fff',
                    borderRadius: '25px',
                    fontWeight: '500',
                }}
            >
                Explore Flavors &rarr;
            </Link>
        </div>
    </div>
);

export default SeasonalDelights;
