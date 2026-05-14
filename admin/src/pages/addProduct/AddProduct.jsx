import { useState } from "react";

function App() {
    const [product, setProduct] = useState({
        name: "",
        price: "",
        description: "",
        image: "",
    });

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();

  formData.append("name", product.name);
  formData.append("price", product.price);
  formData.append("description", product.description);
  formData.append("image", product.image);

  try {
    const res = await fetch(
      "http://localhost:5000/api/products",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    console.log(data);

    alert("Product Added ✅");
  } catch (err) {
    console.log(err);
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
                    type="file"
                    name="image"
                    onChange={(e) =>
                        setProduct({
                            ...product,
                            image: e.target.files[0],
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