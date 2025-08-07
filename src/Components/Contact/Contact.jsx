import { useState } from 'react';
import Logo from '../../assets/contact-logo.png';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = form;

        if (!name || !email || !message) {
            toast.error('Please fill in all fields.', {
                position: 'top-right',
                autoClose: 3000,
                theme: 'colored',
            });
            return;
        }

        toast.success('Message sent successfully! 🎉', {
            position: 'top-right',
            autoClose: 3000,
            theme: 'colored',
        });

        // Reset form
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <div className="container-fluid p-5" style={{ background: 'linear-gradient(135deg, #009EA8, #00C9B7)' }}>
            <div className="row align-items-center">
                {/* Left Image */}
                <div className="col-md-6 mb-4 mb-md-0 text-center">
                    <img 
                        src={Logo} 
                        alt="Logo" 
                        className="img-fluid shadow-lg" 
                        style={{ maxHeight: '85vh', borderRadius: "25px", transition: 'transform 0.3s' }} 
                    />
                </div>

                {/* Contact Form */}
                <div className="col-md-6 text-white px-5">
                    <h2 className="mb-4"><b>Contact Us</b></h2>
                    <p className="mb-4" style={{ fontSize: '1.1rem' }}>
                        We'd love to hear from you! Send us a message and we'll get back to you as soon as possible.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                <FaUser className="me-2" /> Name
                            </label>
                            <input 
                                type="text" 
                                className="form-control shadow-sm" 
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                <FaEnvelope className="me-2" /> Email
                            </label>
                            <input 
                                type="email" 
                                className="form-control shadow-sm" 
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">
                                <FaCommentDots className="me-2" /> Message
                            </label>
                            <textarea 
                                className="form-control shadow-sm" 
                                id="message"
                                name="message"
                                rows="4" 
                                placeholder="Your Message"
                                value={form.message}
                                onChange={handleChange} 
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="btn text-white mt-3 px-4 py-2"
                            style={{ backgroundColor: '#6c5ce7', borderRadius: '25px', fontWeight: '500' }}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
