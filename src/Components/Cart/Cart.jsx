import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const Cart = () => {
    const { cartItems, setCartItems, removeFromCart } = useContext(CartContext);

    const updateQuantity = (item, change) => {
        const updated = cartItems.map((i) =>
            i.name === item.name
                ? { ...i, quantity: Math.max(1, i.quantity + change) }
                : i
        );
        setCartItems(updated);
    };

    //   const removeItem = (item) => {
    //     const updated = cartItems.filter((i) => i.name !== item.name);
    //     setCartItems(updated);
    //   };

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    //   const clearCart = () => {
    //   setCartItems([]);
    // };


    if (cartItems.length === 0) {
        return (
            <div className="container py-5 text-center">
                <h3>Your Cart is Empty 🛒</h3>
                <p className="text-muted">Explore delicious flavors and add your favorites!</p>
                <Link to="/flavors" className="btn mt-3" style={{ backgroundColor: '#6c5ce7', color: '#fff' }}>
                    Browse Flavors
                </Link>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <h2 className="mb-4 fw-bold text-center">Your Cart</h2>
            <div className="row g-4">
                {cartItems.map((item, i) => (
                    <div className="col-md-6" key={i}>
                        <div className="card border-0 shadow-sm rounded-4 h-100 d-flex flex-row overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.name}
                                style={{ width: '150px', objectFit: 'cover' }}
                            />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h5 className="fw-semibold">{item.name}</h5>
                                    <p className="text-muted mb-1">{item.description}</p>
                                    <span className="fw-bold">₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</span>
                                </div>
                                <div className="d-flex align-items-center mt-3 gap-2">
                                    <button
                                        className="btn btn-outline-secondary btn-sm"
                                        onClick={() => updateQuantity(item, -1)}
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        className="btn btn-outline-secondary btn-sm"
                                        onClick={() => updateQuantity(item, 1)}
                                    >
                                        +
                                    </button>
                                    <button
                                        className="btn btn-outline-danger btn-sm ms-auto"
                                        // onClick={() => removeItem(item)}
                                        onClick={() => removeFromCart(item)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-end mt-5">
                <h4 className="fw-bold">Total: ₹{total}</h4>
                <Link to="/payment" className="btn btn-success btn-lg mt-2">
                    Proceed to Checkout
                </Link> 
            </div>
        </div>
    );
};

export default Cart;
