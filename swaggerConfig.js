const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0', // Specify the OpenAPI version
    info: {
      title: 'Your API',
      version: '1.0.0',
      description: 'API documentation for your Node.js application',
    },
  },
  apis: ['./routes/*.js'], // Use the path to your route files
};

module.exports = swaggerJsdoc(options);
