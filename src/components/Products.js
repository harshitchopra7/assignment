import React, { useEffect, useState } from 'react';
import './Products.css';
import { Link } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import { db } from '../firebase';

function Products() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => (
          setPosts(snapshot.docs.map(doc => (
            {
              id: doc.id,
              data: doc.data()
            }
          )))
        ))
      }, [])

    return (
        <div className="products">
            <div className="products_title">
                <p>Products</p>
            </div>
            <div className="products_align"> 
            {posts.map(({ id, data:{ name, price, image }}) => (
                <SingleProduct
                    id={id}
                    name={name}
                    price={price}
                    image={image}
                />
            ))}
            </div>
            <Link className="link" to="/">
                <div className="save_btn">
                    <button>Add Product</button>
                </div>
            </Link>
        </div>
    )
}

export default Products;
