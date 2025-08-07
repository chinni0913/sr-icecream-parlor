import { useContext } from 'react';
import VitaminC from '../../assets/vitaminC.jpg';
import { CartContext } from '../Context/CartContext';
import './VitaminCSection.css';

const VitaminCSection = () => {
    const { addToCart } = useContext(CartContext);

    const VitaminCItem = {
        name: 'Vitamin C Fortified 🍊',
        image: VitaminC,
        description: 'Fruit Popsicles That Boost Immunity!',
        text: 'Bursting with real fruit and infused with essential Vitamin C, our popsicles are a refreshing way to stay cool and healthy. They’re the perfect guilt-free treat for kids and grownups alike!',
        price: 449,
        quantityOne: '✅ Made with 100% real fruit',
        quantityTwo: '✅ No added sugar or preservatives',
        quantityThree: '✅ Supports immunity & skin health',

    };

    return (
        <section className="vitamin-c-section py-5">
            <div className="container">
                <div className="row align-items-center g-4">
                    {/* Image */}
                    <div className="col-md-6 text-center">
                        <img
                            src={VitaminCItem.image}
                            alt="Vitamin C Fruit Popsicles"
                            className="img-fluid rounded-4 vitamin-img"
                        />
                    </div>

                    {/* Content */}
                    <div className="col-md-6">
                        <h2 className="fw-bold text-orange">{VitaminCItem.name}</h2>
                        <h4 className="mb-3">{VitaminCItem.description}</h4>
                        <p className="text-muted mb-3">{VitaminCItem.text}</p>

                        <ul className="list-unstyled mb-4">
                            <li>{VitaminCItem.quantityOne}</li>
                            <li>{VitaminCItem.quantityTwo}</li>
                            <li>{VitaminCItem.quantityThree}</li>
                        </ul>

                        <span className="text-dark fw-bold">Price : ₹ {VitaminCItem.price}</span>
                        <br />
                        <button className="btn btn-lg px-4 py-2 mt-2 vitamin-btn"
                            onClick={() => addToCart(VitaminCItem)}
                            style={{
                                backgroundColor: 'orange',
                                color: '#fff',
                                borderRadius: '25px',
                                fontWeight: '500'
                            }}>
                            Try Now &rarr;
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VitaminCSection;
