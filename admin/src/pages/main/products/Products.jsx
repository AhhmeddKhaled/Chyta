import styles from './Products.module.css';
import AddProduct from './addProduct/AddProduct';

export default function Products() {
    return (
        <section className={styles.productsSection}>
        <AddProduct />
        </section>
    )
}