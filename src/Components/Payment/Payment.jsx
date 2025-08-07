import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [form, setForm] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    const { name, cardNumber, expiry, cvv } = form;

    if (!name || !cardNumber || !expiry || !cvv) {
      toast.error('Please fill all payment details.');
      return;
    }

    // For demo only – simulate payment success
    toast.success('Payment Successful 🎉');
    setCartItems([]);
    localStorage.removeItem('cart');

    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h3>No Items to Checkout</h3>
        <p className="text-muted">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-center">Secure Payment</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handlePayment}>
            <div className="mb-3">
              <label className="form-label">Cardholder Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Card Number</label>
              <input
                type="text"
                className="form-control"
                name="cardNumber"
                maxLength={16}
                value={form.cardNumber}
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Expiry</label>
                <input
                  type="text"
                  className="form-control"
                  name="expiry"
                  maxLength={5}
                  value={form.expiry}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">CVV</label>
                <input
                  type="password"
                  className="form-control"
                  name="cvv"
                  maxLength={3}
                  value={form.cvv}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="d-flex justify-content-between mt-4">
              <h5>Total: ₹{total}</h5>
              <button className="btn btn-success px-4" type="submit">
                Pay Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
