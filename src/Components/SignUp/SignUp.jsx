import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignUp = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.email || !form.password) {
            //   setMessage('Please fill in both fields.');
            toast.error('Please fill in both fields.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        // Save user info in localStorage (for demo only)
        localStorage.setItem('user', JSON.stringify(form));
        // setMessage('User registered successfully. You can now sign in.');
        toast.success('User registered successfully. You can now sign in.', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigate('/signin');
        setForm({ email: '', password: '' });
    };

    return (
        <div className="container py-5">
            <h2 className="mb-4">Sign Up 🍧</h2>
            {message && <p className="text-success">{message}</p>}
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
                <input
                    className="form-control mb-3"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                />
                <input
                    className="form-control mb-3"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                />
                <button className="btn btn-success w-100" type="submit">
                    Register
                </button>
            </form>
        </div>
    );
};

export default SignUp;
