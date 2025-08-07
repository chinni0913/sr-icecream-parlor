import { useContext } from 'react';
import FruitSaladImg from '../../assets/fruitSalad.jpeg';
import { CartContext } from '../Context/CartContext';
import './FruitSaladWithIceCream.css';

const FruitSaladWithIceCream = () => {
  const { addToCart } = useContext(CartContext);

  const fruitSaladItem = {
    name: 'Fruit Salad with Ice Cream 🍓🍨',
    image: FruitSaladImg,
    description: 'Vibrant fruits with creamy vanilla & strawberry scoops topped with honey & nuts.',
    text: 'Dive into a bowl of vibrant, juicy fruits topped with our creamy, rich vanilla and strawberry scoops. This refreshing combo blends the natural sweetness of fruits with the indulgence of ice cream – making it the perfect treat for any time of the day.',
    price: 499,
    quantityOne: 'Fresh seasonal fruits: mango, berries, kiwi, banana & more',
    quantityTwo: 'Choice of 2 ice cream scoops',
    quantityThree: 'Optional toppings: honey, nuts, choco chips',

  };

  return (
    <div className="container-fluid p-5" style={{ backgroundColor: '#fff8fb' }}>
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h2 className="fw-bold mb-3 text-gradient">{fruitSaladItem.name}</h2>
          <h6>{fruitSaladItem.description}</h6>
          <p className="text-muted" style={{ lineHeight: '1.8' }}>
            {fruitSaladItem.text}
          </p>
          <ul className="text-muted ps-3">
            <li>{fruitSaladItem.quantityOne}</li>
            <li>{fruitSaladItem.quantityTwo}</li>
            <li>{fruitSaladItem.quantityThree}</li>
          </ul>
          <span className="text-dark fw-bold">Price : ₹ {fruitSaladItem.price}</span>
          <br />
          <button
            className="btn btn-lg mt-3"
            style={{
              backgroundColor: '#e91e63',
              color: '#fff',
              borderRadius: '30px',
              padding: '10px 25px',
              fontWeight: 500
            }}
            onClick={() => addToCart(fruitSaladItem)}
          >
            Order Now
          </button>
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-center">
          <div className="fruit-salad-img-wrapper">
            <img
              src={FruitSaladImg}
              alt="Fruit Salad with Ice Cream"
              className="img-fluid rounded-4 fruit-salad-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FruitSaladWithIceCream;
