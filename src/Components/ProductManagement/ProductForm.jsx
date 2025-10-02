import React, { useState } from 'react';

const ProductForm = ({ handleAddProduct }) => {
    const handelProductSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        const [vul, setError] = useState('');
        // const [error, setError] = useState('');
        if(name.length === 0){
            setError('please provide a product name');
        }
        else if(price.length === 0){
            setError('please provide a price');
        }
        else if(price < 0){
            setError('price cannot be negative');
        }
        else{
            setError('');
        }

        const newProduct = {
            name,
            price,
            quantity
        };
        // console.log(newProduct);
        handleAddProduct(newProduct);
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
            <p className='text-red-700'><small>{vul}</small></p>
        </div>
    );
};

export default ProductForm;