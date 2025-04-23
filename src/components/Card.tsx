import React from "react";

interface Iprops {
  imageLink: string;
  id: number;
  name:string;
  discountedPrice:number;
  price:number
}
const Card: React.FC<Iprops> = ({ imageLink, id,name,discountedPrice,price }) => {
  return (
    <div className="swiper-slide box">
      <div className="icons">
        <a href="#" className="fas fa-search"></a>
        <a href="#" className="fas fa-heart"></a>
        <a href="#" className="fas fa-eye"></a>
      </div>
      <div className="image">
        <img src={imageLink} alt={`book ${id}`} />
      </div>
      <div className="content">
        <h3>{name}</h3>
        <div className="price">
          ${discountedPrice} <span>${price}</span>
        </div>
        <button  className="btn">
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
