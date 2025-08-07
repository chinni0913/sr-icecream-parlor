import { Link } from "react-router-dom";

const testimonials = [
    {
        name: "Jahnavi Shikha",
        message: "I tried the Belgian chocolate and was instantly hooked. It's rich, creamy, and perfectly balanced. Definitely my new favorite treat!",
    },
    {
        name: "Srivalli Nookala",
        message: "The strawberry swirl is bursting with fresh flavor. It tastes like summer in every bite. I’ve never had anything like it!",
    },
    {
        name: "Indu Chirra",
        message: "SoftRich Ice Cream made our family night extra special. The variety of flavors kept everyone happy. It’s now a weekend tradition!",
    },
    {
        name: "Yesasya Parri",
        message: "I was never an ice cream fan—until I tasted SoftRich. Their Butterscotch Bliss is pure magic. Creamy, crunchy, and unforgettable!",
    },
];

const Testimonial = () => {
    return (
        <div className="container-fluid py-5 testimonial-section" style={{ backgroundColor: '#fef9ff' }}>
            <h2 className="text-center fw-bold mb-2">Hear From Our Happy Customers</h2>
            <p className="text-center text-muted mb-5">
                Every scoop of SoftRich Ice Cream brings joy, flavor, and sweet memories. Here's what our fans say! 🍨
            </p>

            <div className="row justify-content-center g-4">
                {testimonials.map((t, i) => (
                    <div className="col-md-5" key={i}>
                        <div className="card p-4 shadow-sm rounded-4 border-0 h-100">
                            <h5 className="mb-1">{t.name}</h5>
                            <div className="text-warning mb-3">★★★★★</div>
                            <p className="text-muted mb-0">“{t.message}”</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-5">
                <h4 className="mb-3 fw-semibold">Love at First Scoop!</h4>
                <p className="text-muted mb-4">
                    Whether it’s a celebration or a cozy night in, SoftRich Ice Cream makes every moment delicious.
                </p>
                <button
                    className="btn btn-lg px-4 py-2"
                    style={{
                        backgroundColor: '#6c5ce7',
                        color: '#fff',
                        borderRadius: '25px',
                        fontWeight: '500'
                    }}
                >
                    <Link to="/reviews" style={{ color: '#fff', textDecoration: 'none' }}>
                        Read More Reviews &rarr;
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Testimonial;
