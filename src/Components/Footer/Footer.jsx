import { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import Logo from '../../assets/Logo.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();

        if (!email) {
            toast.error('Please enter your email to subscribe.', {
                position: 'top-right',
                autoClose: 3000,
                theme: 'colored',
            });
            return;
        }

        // Optionally, store or send email to backend (currently only toast)
        toast.success('Subscribed successfully! 🎉', {
            position: 'top-right',
            autoClose: 3000,
            theme: 'colored',
        });

        setEmail('');
    };

    return (
        <footer className="text-dark pt-4 pb-3" style={{ backgroundColor: '#f3f0ff' }}>
            <div className="container-fluid">
                <div className="row align-items-start">

                    {/* Brand Info */}
                    <div className="col-md-5 mb-4 mb-md-0">
                        <div className="d-flex align-items-center mb-2">
                            <img src={Logo} alt="Logo" style={{ width: '50px', height: '50px' }} />
                            <h5 className="ms-3 mb-0">SoftRich Ice Cream</h5>
                        </div>
                        <div className='mt-2 px-5'>
                            <p className="text-muted mb-1">Delicious ice creams made with <b><i>Soft Love</i></b> and <b><i>Rich Care</i></b>.</p>
                            <p className="text-muted mb-1">143 Ice Cream Lane, Sweet City, INDIA.</p>
                            <p className="text-muted mb-1">📧 info@softrichicecream.com</p>
                            <p className="text-muted mb-0">📞 +91 (123) 456-7890</p>
                        </div>
                    </div>

                    <div className="col-md-2"></div>

                    {/* Newsletter */}
                    <div className="col-md-5 ">
                        <h5 className="mb-3 px-5">Stay Connected</h5>
                        <form onSubmit={handleSubscribe} className="d-flex flex-column flex-md-row align-items-center gap-2 px-5">
                            <input
                                type="email"
                                className="form-control shadow-sm"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    maxWidth: '280px',
                                    borderRadius: '25px',
                                    padding: '10px 15px'
                                }}
                            />
                            <button
                                type="submit"
                                className="btn"
                                style={{
                                    backgroundColor: '#6c5ce7',
                                    color: '#fff',
                                    borderRadius: '25px',
                                    padding: '10px 25px',
                                    fontWeight: '500',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                                }}
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <hr className="my-4" />

                {/* Bottom Row */}
                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-0 text-muted">© 2025 SoftRich. Design and Developed by <b><i>SHREYA💜</i></b>
                            <img src={Logo} alt="Logo" style={{ width: '30px', height: '30px' }} />
                            .</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <p className="mb-0 d-inline me-2">Follow us:</p>
                        <a href="https://www.facebook.com" target='_blank' className="text-dark me-2">
                            <FacebookIcon fontSize="medium" />
                        </a>
                        <a href="https://www.twitter.com" target='_blank' className="text-dark me-2">
                            <XIcon fontSize="medium" />
                        </a>
                        <a href="https://www.instagram.com" target='_blank' className="text-dark">
                            <InstagramIcon fontSize="medium" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
