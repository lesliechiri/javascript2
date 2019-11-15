import React from 'react';

class Products extends React{
    render(){
        return(
            <div>
                <h2>Products</h2>
                <ul id = 'products'>
                    {
                        this.props.items.map((product, index) => {
                            return <li key = {index}>{product.name}</li>
                        })
                    }

                </ul>
            </div>    
        )
    }

}


export default Products;