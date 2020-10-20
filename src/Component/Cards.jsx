import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cards(props) {
    return(
        <div className="styling">
            <div className="card mianCardDiv">
                <div className="card" style={{width: '18rem'}}>
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgalt} />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.price}</p>
                        <a href={props.weblink} target='_blank' className="btn btn-primary">Visit Website</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;