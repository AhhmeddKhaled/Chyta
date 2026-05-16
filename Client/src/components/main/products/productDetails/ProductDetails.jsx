import { useEffect, useState } from "react";
import Container from "../../../container/Container";
import { useParams } from "react-router-dom";
import style from "./ProductDetails.module.css";

export default function ProductDetails() {

    const { id } = useParams();

    console.log(id);
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/api/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch((err) => console.log(err));
    }, [id]);

    const [selectedImage, setSelectedImage] = useState(0);

    const handleThumbnailClick = (index) => {
        setSelectedImage(index);
    };

    return (
        <section className={style.productDetailsSection}>

            <Container>
                <div className={style.productDetails}>

                    <div className={style.productImage}>
                        <div className={style.mainImage}>
                            <img src={`http://localhost:5000${product.images?.[selectedImage] || product.images?.[0]}`} alt={product.name} />
                        </div>

                        <div className={style.thumbnailImages}>
                            {product.images?.map((img, index) => (
                                <img
                                    onMouseEnter={() => handleThumbnailClick(index)}
                                    key={index}
                                    src={`http://localhost:5000${img}`}
                                    alt={`${product.name} ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={style.productInfo}>
                        <h1 className={style.name}>{product.name}</h1>
                        <p className={style.description}>{product.description}</p>
                        <p className={style.price}><sup>EGP</sup>{product.price}</p>

                        {/* Color Options: */}
                        <div className={style.colors}>
                            <h3>Available Colors:</h3>
                        <ul className={style.colors}>
                            {product.colors?.map((color, index) => (
                                <li key={index} className={style[color]}> {color} </li>
                            ))}
                        </ul>
                        </div>

                        {/* Product Future Details (e.g., sizes, reviews, etc.) can go here. */}
                        <div className={style.productFuture}>
                            <h3>Product Details:</h3>
                            <ul>
                                <li>Material: {product.material}</li>   
                                <li>Sizes Available: {product.sizes?.join(", ")}</li>
                                <li>Brand: {product.brand}</li>
                                <li>Category: {product.category}</li>
                            </ul>
                            
                        </div>
                    </div>

                    <div className={style.purchaseDetails}>

                        <div className={style.quantitySelector}>
                        <label htmlFor="quantity" className={style.quantityLabel}>Quantity:</label>
                        <input type="number" min="1" id="quantity" defaultValue="1" className={style.quantity} placeholder="Quantity" required />
                        </div>

                        <button className={style.addToCart}>Add to Cart</button>
                        <button className={style.buyNow}>Buy Now</button>
                    </div>
                </div>
            </Container>
        </section>
    )


}