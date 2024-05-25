const products = [
    { id: 'product1', name: 'Product 1' },
    { id: 'product2', name: 'Product 2' },
    { id: 'product3', name: 'Product 3' }
];

window.onload = () => {
    const productNameSelect = document.getElementById('productName');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productNameSelect.appendChild(option);
    });
};
