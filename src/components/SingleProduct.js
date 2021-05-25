import React, { useEffect, useState } from 'react';
import './SingleProduct.css';
import deleteIcon from '../images/del.png';
import editIcon from '../images/edit.png';
import { db } from '../firebase';
import firebase from 'firebase';

function SingleProduct({ id, name, price, image }) {

    const [updateName, setUpdateName] = useState('');
    const [updatePrice, setUpdatePrice] = useState('');
    const [updateUrl, setUpdateUrl] = useState('');

    const deleteMe = (event) => {
        event.preventDefault();
        db.collection('posts').doc(id).delete();
    }


    const updateProduct = (e) => {
        e.preventDefault();
        db.collection('posts').doc(id).update({
            name: updateName,
            price: updatePrice,
            image: updateUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setUpdateName('');
        setUpdatePrice('');
        setUpdateUrl('');
    }

    const toggle = () => {
        var blur = document.getElementById("blurr");
        blur.classList.toggle('active');
        var popuppp = document.getElementById("popupppp");
        popuppp.classList.toggle('active');
    }

    return (
        <div>
            <div className="sp" id="blurr">
                <div className="sp_top">
                    <div className="sp_top_img">
                        <img src={image} />
                    </div>
                    <div className="sp_top_desc">
                        <p className="sp_name">{name}</p>
                        <p className="sp_price">Rs {price}</p>
                    </div>
                </div>
                <div className="sp_icons">
                    <div className="sp_icons" onClick={deleteMe}>
                        <img src={deleteIcon} alt="" />
                    </div>
                    <div className="sp_icons icons_edit" onClick={toggle}>
                        <img src={editIcon} alt="" />
                    </div>
                </div>


            </div>

            <div id="popupppp">
                <div className="cross_mainn">
                    <p className="crosss" onClick={toggle}>&times;</p>
                </div>
                    <div className="ap_title" style={{marginTop: '-20px'}}>
                        <p>Update Product</p>
                    </div>

                    <div className="ap_subtitle">
                        <p>Product Name</p>
                        <input
                            type="text"
                            value={updateName}
                            onChange={e => setUpdateName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="ap_subtitle">
                        <p>Price</p>
                        <input
                            type="number"
                            value={updatePrice}
                            onChange={e => setUpdatePrice(e.target.value)}
                        />
                    </div>
                    <div className="ap_subtitle">
                        <p>Image</p>
                        <input
                            value={updateUrl}
                            onChange={e => setUpdateUrl(e.target.value)}
                        />
                    </div>

                    <div onClick={updateProduct} className="save_btn">
                        <button onClick={toggle}>Update</button>

                    </div>

            </div>
        </div>
    )
}

export default SingleProduct;
