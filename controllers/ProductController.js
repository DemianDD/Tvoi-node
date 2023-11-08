const { product } = require('../sequalize/models/product'); 

const getAllProducts = async (req, res) => {
    try {
        const products = await product?.findAll();
        res.json(products);
    } catch (error) {
        console.error('Error while getting products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const postProduct = async (req, res) => {
    try {
        const newProduct = await product?.create(req.body);
        res.json(newProduct);
    } catch (error) {
        console.error('Error while creating a product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { getAllProducts, postProduct };
