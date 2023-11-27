const db = require('../sequelize/models/index'); 

const getAllProducts = async (req, res) => {
    try {
        let products = await db.Product?.findAll();
        products = products.map(product => {
            const fieldsToParse = ['images', 'colors', 'sizes', 'realPhotos'];
            fieldsToParse.forEach(field => {
                if (product[field] && typeof product[field] === 'string') {
                    product[field] = JSON.parse(product[field]);
                }
            });
            return product;
        });
        res.json(products);
    } catch (error) {
        console.error('Error while getting products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const postProduct = async (req, res) => {
    try {
        const newProduct = await db.Product?.create(req.body);
        res.json(newProduct);
    } catch (error) {
        console.error('Error while creating a product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.Product.destroy({
            where: { id }
        });

        if (result > 0) {
            res.json({ message: `Product with ID ${id} deleted successfully.` });
        } else {
            res.status(404).json({ error: `Product with ID ${id} not found.` });
        }
    } catch (error) {
        console.error('Error while deleting a product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteAllProducts = async (req, res) => {
    try {
        await db.Product.destroy({
            where: {},
            truncate: true // Optional: use this if you also want to reset the auto-increment counters
        });
        res.json({ message: 'All products deleted successfully.' });
    } catch (error) {
        console.error('Error while deleting all products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { getAllProducts, postProduct, deleteProduct, deleteAllProducts };
