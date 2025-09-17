import './Flavors.css';
import Mango from '../../assets/mango.jpg';
import Chocolate from '../../assets/chocolate.jpg';
import Strawberry from '../../assets/strawberry.jpg';
import Butterscortch from '../../assets/butterscortch.jpg';
import Vanila from '../../assets/vanila.jpg';
import Blueberry from '../../assets/blueberry.jpg';
import Kiwi from '../../assets/kiwi.jpg';
import Mulberry from '../../assets/mulberry.jpg';
import Dryfruit from '../../assets/dryfruit.jpg';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';

const iceCreams = [
  {
    name: 'Mango Magic',
    image: Mango,
    description: 'Fresh Alphonso mangoes blended into a creamy treat.',
    price: 120,
  },
  {
    name: 'Chocolate Rush',
    image: Chocolate,
    description: 'Decadent dark chocolate with a velvety finish.',
    price: 140,
  },
  {
    name: 'Strawberry Swirl',
    image: Strawberry,
    description: 'Bursting with juicy strawberries and sweet cream.',
    price: 130,
  },
  {
    name: 'Buttery Butterscotch',
    image: Butterscortch,
    description: 'Bursting with Buttery Soft cream.',
    price: 180,
  },
  {
    name: 'Vanila Bliss',
    image: Vanila,
    description: 'Classic vanilla with a hint of Madagascar beans.',
    price: 110,
  },
  {
    name: 'Blue Berry',
    image: Blueberry,
    description: 'Fresh Blue Berries blended into a creamy treat.',
    price: 250,
  },
  {
    name: 'Mulberry',
    image: Mulberry,
    description: 'Sweet mulberries with a creamy base.',
    price: 349,
  },
  {
    name: 'Kiwi',
    image: Kiwi,
    description: 'Tangy kiwi with a refreshing twist.',
    price: 299,
  },
  {
    name: 'Special Dryfuits Overloaded',
    image: Dryfruit,
    description: 'A rich blend of dry fruits with a creamy base.',
    price: 499,
  },
];

const Flavors = () => {
  // const handleAddToCart = (item) => {
  //   alert(`${item.name} added to cart!`);
  // };

  const { addToCart } = useContext(CartContext);

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">Our Signature Flavors</h2>
      <div className="row g-4">
        {iceCreams.map((ice, i) => (
          <div className="col-md-4" key={i}>
            <div className="card flavor-card border-0 shadow-sm h-100 rounded-4 overflow-hidden">
              <img
                src={ice.image}
                alt={ice.name}
                className="card-img-top"
                style={{ height: '280px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title fw-semibold">{ice.name}</h5>
                <p className="card-text text-muted">{ice.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-dark fw-bold">₹{ice.price}</span>
                  <button
                    className="btn btn-sm btn-outline-primary"
                    // onClick={() => handleAddToCart(ice)}
                    onClick={() => addToCart(ice)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flavors;
