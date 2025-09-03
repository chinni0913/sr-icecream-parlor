import IceCreamOne from '../../assets/icecreamOne.jpg'
import Chocolate from '../../assets/tub-chocolate.png'
import Strawberry from '../../assets/tub-strawberry.png'
import Wafer from '../../assets/tub-wafer.png'
import Butterscortch from '../../assets/tub-butterscortch.png'
import Boxes from '../../assets/boxes.png'
import Cake from '../../assets/icecream-cake.png'
import Tubcake from '../../assets/tubs.png'
import Ice from '../../assets/ice.png'
import Scoof from '../../assets/scoof.png'
import Ghibli from '../../assets/glibli.png'
import Truck from '../../assets/truck.png'
import Shop from '../../assets/shop.png'
import './About.css';
import { useState } from 'react'

const About = () => {
    // process 1
    const [data, setData] = useState('');
    const [submitted, setSubmitted] = useState("");

    const handleChange = (e) => {
        //  e.preventDefault();
        setData(e.target.value);
    }

    const formSubmit = () => {
        setSubmitted(data);
        setData("");
        // alert("email submitted " + ": " + data)
    }

    // process 2

    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [displayData, setDisplayData] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(`Full Name: ${fullName}, Password: ${password}`);
        setDisplayData(`Full Name: ${fullName}, Password: ${password}`);
        setFullName("")
        setPassword("")
    }

    // process 3

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [total, setTotal] = useState(0);
    const handleNum1Change = (e) => {
        setNum1(Number(e.target.value));
    }
    const handleNum2Change = (e) => {
        setNum2(Number(e.target.value));
    }
    const calculateTotal = () => {
        setTotal(num1 + num2);
        // alert(num1 + num2);
    }

    return (
        <>
            <div className="about-container text-center p-5" style={{ backgroundColor: '#f28ec6f7', color: '#fff', position: 'relative' }}>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <h3 className="p-3 fw-bold">SPREADING HAPPINESS THROUGH HEALTHY DESSERTS 🍨</h3>
                    </div>
                </div>

                <div className="row align-items-center position-relative">
                    <div className="col-md-2 mb-3 ">
                        <img src={Truck} alt="truck" className="img-fluid" style={{ height: '150px', width: '150px' }} />
                    </div>

                    <div className="col-md-8">
                        <p className="p-3" style={{ fontStyle: 'oblique' }}>
                            Say hello to <b className="text-dark" style={{ fontSize: 'larger' }}>SR</b>: that brings healthy, low-calorie ice creams and mithais with zero added sugar to the
                            millennial Indian with an incurable sweet tooth. It’s good-for-you dessert that you can binge on, guilt free...
                            and not just on cheat days. 🥰
                        </p>
                        <p style={{ fontStyle: 'oblique' }}>
                            <b className="text-dark" style={{ fontSize: 'larger' }}>SR</b> was born to revolutionize the way people consume sweets. It’s a common myth that if it’s easy on the
                            calories, it’s not going to satiate those taste buds - we aim to disrupt this misconception ONE DESSERT AT A
                            TIME! 😎
                        </p>
                    </div>

                    {/* Shop image with text overlapping */}
                    <div className="col-md-2 position-relative d-flex align-items-center justify-content-center">
                        <img src={Shop} alt="shop" className="img-fluid rounded" style={{ height: '200px', width: '200px', objectFit: 'cover' }} />
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '10px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                color: '#4c004c',
                                padding: '0.3rem 0.6rem',
                                fontWeight: '600',
                                fontSize: '0.9rem',
                                borderRadius: '8px',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            SR Ice Creams 🍧
                        </div>
                    </div>
                </div>
            </div>

            {/* practice */}
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <label htmlFor="email" className="form-label fw-bold">Subscribe to our Newsletter</label>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" id="email" placeholder="Enter your email"
                                    value={data}
                                    // onChange={(e) => setData(e.target.value)}
                                    onChange={(e) => handleChange(e)}
                                />
                                <button className="btn btn-primary" type="button" onClick={formSubmit}>Subscribe</button>
                            </div>
                        </form>

                    </div>
                    <div className="col-md-6 text-center d-flex align-items-center justify-content-center">
                        {submitted && (
                            <p className="mt-3 text-success fw-bold">
                                You submitted: {submitted}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <label htmlFor="fullName" className="form-label fw-bold">Sign Up</label>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fullName"
                                    placeholder="Full Name"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-warning" onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        {displayData && (
                            <p className="mt-3 text-success fw-bold">
                                {displayData}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <input type="number" className='form-control mt-2' value={num1} onChange={handleNum1Change} />
                        <br />
                        <input type="number" className='form-control mt-2' value={num2} onChange={handleNum2Change} />
                        <br />
                        <button onClick={calculateTotal}>Calculate</button>
                    </div>
                    <div className="col-md-6">
                        <h3 className='text-success'>Total: {total}</h3>
                    </div>
                </div>
            </div>

            {/* practice */}

            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src={IceCreamOne} alt="iceone" className='img-fluid' />
                    </div>
                    <div className="col-md-6" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
                        <h2 style={{ color: '#f28ec6f7' }}>Low Calorie, High Protein</h2>
                        <p>Let's be honest - who doesn't want to tuck into sweets and ice creams everyday? All too often we feel like if we've had a bite of the dessert we might as well have it all - because why not?!?</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid mb-5">
                <div className="row text-center">
                    <h3><b>INSTAGRAM</b></h3>
                    <p>#softrich</p>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="image-card">
                                    <img src={Chocolate} alt="iceone" className="img-fluid image" />
                                    <div className="overlay">
                                        <p className="see-more">Chocolate</p>
                                    </div>
                                </div>
                                <div className="image-card">
                                    <img src={Scoof} alt="iceone" className="img-fluid image" />
                                    <div className="overlay">
                                        <p className="see-more">Scoof</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="image-card">
                                    <img src={Ice} alt="iceone" className="img-fluid image" />
                                    <div className="overlay">
                                        <p className="see-more">Ice</p>
                                    </div>
                                </div>
                                <div className="image-card">
                                    <img src={Wafer} alt="iceone" className="img-fluid image" />
                                    <div className="overlay">
                                        <p className="see-more">Waffy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="image-card">
                            <img src={Boxes} alt="iceone" className="img-fluid image" />
                            <div className="overlay">
                                <p className="see-more">Flavours</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="image-card">
                                    <img src={Butterscortch} alt="iceone" className="img-fluid image" />
                                    <div className="overlay">
                                        <p className="see-more">Butterscortch</p>
                                    </div>
                                </div>
                                <div className="image-card">
                                    <img src={Cake} alt="iceone" className="img-fluid image" />
                                    <div className="overlay">
                                        <p className="see-more">Ice Cream Cake</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="image-card">
                                    <img src={Tubcake} alt="iceone" className="img-fluid image" />
                                    <div className="overlay">
                                        <p className="see-more">Cool Tub</p>
                                    </div>
                                </div>
                                <div className="image-card">
                                    <img src={Strawberry} alt="iceone" className="img-fluid image" />
                                    <div className="overlay">
                                        <p className="see-more">Strawberry</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-container text-center p-5" style={{ backgroundColor: '#f28ec6f7', color: '#fff' }}>
                <h3 className="p-3"><b>A PARADISE FOR DESSERT LOVERS; <b className='text-dark'>Soft💗Rich</b> BRINGS <br />
                    FORTH DELICIOUS SWEET TREATS WITH A<br />
                    HEALTHY TWIST!
                    🍧</b></h3>
            </div>

            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-8" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
                        <p style={{ fontSize: 'large' }}>The brainchild of husband-wife <b><i>Shreya and Rathnakar</i></b>, the name  <br />
                            <b><i>SOFTRICH</i></b> comes from a small town in Warangal, India that is known for its famous Kakatiya Dynasty; a name the duo fell in love with.<br />
                            Rathnakar is armed with a Masters Degree in Computer Science and Engineering from Warangal. Shreya, on the other hand, Masters from Kakatiya University,
                            Warangal, Both Designed to the Marketing and Communications head- bringing creative flair to SOFTRICH.</p>
                    </div>
                    <div className="col-md-4">
                        <img src={Ghibli} alt="iceone" className='img-fluid' style={{ height: '400px' }} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;