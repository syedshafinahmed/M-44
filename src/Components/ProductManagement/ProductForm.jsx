import React from 'react';

const ProductForm = () => {
    const handelProductSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        const newProduct = {
            name,
            price,
            quantity
        };
        console.log(newProduct);
    }
    return (
        <div>
            <h3>Add Product</h3>
            <form onSubmit={handelProductSubmit}>
                <input type="text" name="name" placeholder='Product Name' id="" /><br />
                <input type="text" name="price" placeholder='Product Price' id="" /><br />
                <input type="text" name="quantity" placeholder='Product Quantity' id="" /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ProductForm;