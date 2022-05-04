import React from 'react';


class ProductList extends React.Component {
    constructor(props) {
        super(props)
        this.displayProducts = this.displayProducts.bind(this);
    };

    displayProducts() {
        const data = this.props.data;
    
        if (data.loading) {
            return (
                <div>Loading products...</div>
            )
        } else {
            data.data.category.products.map(product => {
                return (
                    <li key={product.id}>
                        <div className='product'>
                            <img className='product1'
                                src={product.img}
                                alt='product1'>
                            </img>
                            <div className='inscription'>
                                <div className='name'>{product.name}</div>
                                <div className='price'>{product.price}</div>
                            </div>
                        </div>
                    </li>
                )
            }
            )
        };
    }
    render() {
        return (
            <ul className="container">
                <li>
                    {this.displayProducts()}
                </li>
            </ul>
        );
    };
};

export default ProductList;