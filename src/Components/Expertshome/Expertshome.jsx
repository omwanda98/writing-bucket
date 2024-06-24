import React, { useState } from "react";
import './Expertshome.css';
import expert1 from '../Assets/expert1.jpg';
import expert2 from '../Assets/expert2.jpg';
import expert3 from '../Assets/expert3.jpg';
import expert4 from '../Assets/expert4.jpg';
import harvard from '../Assets/harvard.PNG';
import stanford from '../Assets/stanford.PNG';
import lahore from '../Assets/lahore.PNG';
import concordia from '../Assets/concordia.PNG';
import oxford from '../Assets/oxford.PNG';

const experts = [
    { name: "Jane Cooper", field: "Economics", rating: 4.8, img: expert1 },
    { name: "Charles Watt", field: "Law", rating: 4.8, img: expert2 },
    { name: "Becky Sam", field: "Microbiology", rating: 4.8, img: expert3 },
    { name: "Ben Smith", field: "Music", rating: 4.8, img: expert4 }
];

const Expertshome = () => {
    const [pages, setPages] = useState(1);
    const pricePerPage = 44;
    const totalPrice = pages * pricePerPage;

    const handleIncrement = () => setPages(pages + 1);
    const handleDecrement = () => {
        if (pages > 1) {
            setPages(pages - 1);
        }
    };

    return (
        <div className="experts-home">
            <h1>Who Are the Experts?</h1>
            <p className="description">Our experts are carefully selected through a rigorous process. They are mostly the alumni of some of the world's top universities.</p>
            <div className="universities">
                <img src={harvard} alt="Harvard" />
                <img src={stanford} alt="Stanford" />
                <img src={lahore} alt="University of Lahore" />
                <img src={concordia} alt="Concordia" />
                <img src={oxford} alt="Oxford" />
            </div>
            <div className="experts-list">
                {experts.map((expert, index) => (
                    <div key={index} className="expert-card">
                        <img src={expert.img} alt={expert.name} className="expert-img" />
                        <div className="expert-info">
                            <span className="rating">{expert.rating}</span>
                            <h2>{expert.name}</h2>
                            <p>{expert.field}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="become-expert">Become an expert</button>
            <div className="pricing">
                <h2>Pricing</h2>
                <p>How much will my paper cost? Use the calculator below to perform the calculation.</p>
                <div className="calculator">
                    <div className="calculator-row">
                        <label>Type of essay</label>
                        <select>
                            <option>Essay(any category)</option>
                        </select>
                    </div>
                    <div className="calculator-row">
                        <label>Academic level</label>
                        <select>
                            <option>High school</option>
                        </select>
                    </div>
                    <div className="calculator-row">
                        <label>Pages</label>
                        <div className="page-control">
                            <button onClick={handleDecrement}>-</button>
                            <input type="text" value={`${pages} pages`} readOnly />
                            <button onClick={handleIncrement}>+</button>
                        </div>
                    </div>
                    <div className="calculator-row">
                        <label>Deadline</label>
                        <select>
                            <option>4h ($20 per page)</option>
                        </select>
                    </div>
                </div>
                <div className="price-info">
                    <span>Delivery time: Today, at 6:45pm</span>
                    <span className="price">Price: ${totalPrice}</span>
                </div>
                <button className="place-order">Place order</button>
            </div>
        </div>
    );
};

export default Expertshome;
