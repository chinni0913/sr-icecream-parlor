import { useEffect, useState } from 'react';
import './SignIn.css';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [form, setForm] = useState({ email: '', password: '', remember: false });
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const savedEmail = localStorage.getItem('rememberedEmail');
        if (savedEmail) {
            setForm((prev) => ({ ...prev, email: savedEmail, remember: true }));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.email || !form.password) {
            toast.error('Email and password are required', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            // setError('Email and password are required');
            return;
        }

        if (form.remember) {
            localStorage.setItem('rememberedEmail', form.email);
        } else {
            localStorage.removeItem('rememberedEmail');
        }

        // Simulate login and set flag
        localStorage.setItem('isLoggedIn', 'true');

        toast.success('Signed in successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        // alert('Signed in successfully!');

        navigate('/');
        // setError('');
    };

    return (
        <div className="signin-container">
            <div className="signin-card shadow-lg">
                <h2 className="text-center mb-4">🍦 Welcome Back to SoftRich</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter email"
                        />
                    </div>

                    <div className="form-group mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter password"
                        />
                    </div>

                    {error && <p className="text-danger mb-2">{error}</p>}

                    <div className="d-flex justify-content-between mb-3">
                        <div>
                            <input
                                type="checkbox"
                                name="remember"
                                checked={form.remember}
                                onChange={handleChange}
                            />{' '}
                            Remember me
                        </div>
                        <Link to="/signup" className="text-decoration-none text-primary">
                            Sign Up?
                        </Link>
                    </div>

                    <button type="submit" className="btn btn-pink w-100" style={{
                        backgroundColor: '#6c5ce7',
                        color: '#fff',
                        borderRadius: '25px',
                        fontWeight: '500'
                    }}>
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
