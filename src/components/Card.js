import React from "react";
import '../css/style.css';

const Card = ({ data }) => {
    // console.log(data);
    return (
        <div href="#" className="card">
            <div className="cardImgBox">
                <img src={data.mainImage} alt="" className="cardImg" />
            </div>

            <div className="cardTitBox">
                <h4>{data.title}</h4>
                {/* <p>6월 21일~26일</p> */}
                <span>￦{data.defaultPrice} /박</span>
            </div>
        </div>
    );
};

export default Card;