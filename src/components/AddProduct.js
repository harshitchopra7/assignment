import React, { useState, useEffect } from 'react';
import './AddProduct.css';
import { Link } from 'react-router-dom';
import camera from '../images/camera.png';
import { db } from '../firebase';
import firebase from 'firebase';

function AddProduct() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [url, setUrl] = useState();

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
    }, []);

    const saveProduct = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: name,
            price: price,
            image: url,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setName('');
        setPrice('');
        setUrl('');
    }

    const toggle = () => {
        var blur = document.getElementById("blur");
        blur.classList.toggle('active');
        var popuppp = document.getElementById("popuppp");
        popuppp.classList.toggle('active');
    }

    return (
        <form>
            <div className="ap" id="blur">
                <div className="ap_title">
                    <p>Add Product</p>
                </div>
                <div className="ap_subtitle">
                    <p>Upload Photo</p>
                    <div className="ap_image_align">
                        <img onClick={toggle} className="camera_img" src={camera} alt=""
                        />
                        {/* <input type="file" onChange={handleChange} /> */}
                    </div>
                </div>
                <div className="ap_subtitle">
                    <p>Product Name</p>
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type="text"
                        required
                    />
                </div>
                <div className="ap_subtitle">
                    <p>Price</p>
                    <input
                        type="number"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                </div>

                <div onClick={saveProduct} className="save_btn">
                    <Link className="link save_btn" to="/products">
                        <button>Save</button>
                    </Link>
                </div>
            </div>

            <div id="popuppp">
                <div className="cross_mainn">
                    <p className="crosss" onClick={toggle}>&times;</p>
                </div>
                <div className="ap_subtitle">
                    <input
                        placeholder="Enter image URL"
                        valu={url}
                        onChange={e => setUrl(e.target.value)}
                    />
                    <div className="save_btn">
                        <button onClick={toggle}>Enter</button>
                    </div>

                </div>
            </div>


        </form>
    )
}

export default AddProduct;
