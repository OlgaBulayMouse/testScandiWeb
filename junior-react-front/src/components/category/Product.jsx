import React from "react";

class Product extends React.Component {
    render() {
        return (
            <div className="product">
                <img className="product1" src="/img/Product card/Elements/Product D.png" alt="product1">
                </img>
                <div className="inscription">
                    <div className="name">Apollo Running Short</div>
                    <div className="price">$50.00</div>
                </div>
            </div>
        )
    }
};

export default Product;