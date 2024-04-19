import ProductCard from "./ProductCart";

const ProductList = () => {
    // List of products - dummy data
    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
    ];

    return (
        <div className="product-list">
            <h2>
                <center>
                    Products
                </center>
            </h2>
            {products.map(product => (
                <ProductCard key={product.id} name={product.name} price={product.price} />
            ))}
        </div>
    );
};

export default ProductList;
