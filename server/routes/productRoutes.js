import express from 'express';
import AWS from 'aws-sdk';

// Initialize the DynamoDB Document Client
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const productRoutes = express.Router();

// Fetch products from DynamoDB
const getProducts = async (req, res) => {
    const params = {
        TableName: 'products', // 
    };

    try {
        const data = await dynamoDB.scan(params).promise(); // Using scan to retrieve all products
        res.json({
            products: data.Items,
            pagination: {}, // Add pagination logic here if needed
        });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Could not fetch products" });
    }
};

// Define the route to get products
productRoutes.route('/').get(getProducts);


export default productRoutes;
