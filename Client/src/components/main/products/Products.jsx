import { useEffect, useState } from "react";
import style from "./Products.module.css";
import Container from "../../container/Container";
import { FaCartPlus } from "react-icons/fa";

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.log(err));
    }, []);

    console.log(products);
    return (
        <section className={style.productsSection}>
            <Container>

                <h2> 
                    Our Products    
                </h2>
                <div className={style.productsGrid}>

                    {products.map((product) => (
                        <div key={product._id} className={style.productCard}>
                            {product.image && (
                                <img
                                    src={`http://localhost:5000${product.image}`}
                                    alt={product.name}
                                />
                            )}

                            <div className={style.productInfo}>
                                <h2>{product.name}</h2>

                                <p>{product.description}</p>

                                <h3 className={style.price}>
                                    {product.price} EGP
                                    <span>
                                        <FaCartPlus />
                                    </span>
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default App;