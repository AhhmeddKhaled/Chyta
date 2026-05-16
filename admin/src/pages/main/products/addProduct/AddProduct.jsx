import { useState } from "react";

function App() {
    const [product, setProduct] = useState({
        name: "",
        price: "",
        description: "",
        images: [],
        colors: [],

    });
    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    const handleColorsChange = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setProduct((prev) => ({
                ...prev,
                colors: [...prev.colors, value],
            }));
        } else {
            setProduct((prev) => ({
                ...prev,
                colors: prev.colors.filter((c) => c !== value),
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 🚨 Validation قبل أي حاجة
        if (
            !product.name ||
            !product.price ||
            !product.description ||
            product.colors?.length === 0 ||
            product.images?.length === 0
        ) {
            alert("Please fill all fields");
            return; // ❌ وقف الإرسال هنا
        }

        const formData = new FormData();

        formData.append("name", product.name);
        formData.append("price", product.price);
        formData.append("description", product.description);

        product.colors.forEach((color) => {
            formData.append("colors", color);
        });

        product.images.forEach((image) => {
            formData.append("images", image);
        });

        try {
            const res = await fetch(
                "http://localhost:5000/api/products",
                {
                    method: "POST",
                    body: formData,
                }
            );

            // 🚨 مهم جدًا: check response
            if (!res.ok) {
                const error = await res.json();
                alert(error.message || "Error");
                return;
            }

            const data = await res.json();

            console.log(data);

            alert("Product Added ✅");

        } catch (err) {
            console.log(err);
            alert("Server error");
        }
    };
    
    return (
        <div style={{ padding: "20px" }}>
            <h1>Add Product</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    onChange={handleChange}
                />

                <br /><br />

                <textarea
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="checkbox"
                    value="Red"
                    onChange={handleColorsChange}
                />
                <label>Red</label>

                <input
                    type="checkbox"
                    value="Blue"
                    onChange={handleColorsChange}
                />
                <label>Blue</label>

                <input
                    type="checkbox"
                    value="Black"
                    onChange={handleColorsChange}
                />
                <label>Black</label>

                <input
                    type="file"
                    multiple
                    onChange={(e) =>
                        setProduct({
                            ...product,
                            images: [...e.target.files],
                        })
                    }
                />

                <br /><br />

                <button type="submit">
                    Add Product
                </button>
            </form>
        </div>
    );
}

export default App;