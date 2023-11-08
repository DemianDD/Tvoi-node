const express = require('express');
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const { sequelize } = require('./sequalize/models/index');

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const generateHtmlFromOrder = require('./functions/GenerateHtml');
const formatDate = require('./functions/Formatter');
const { getAllProducts, postProduct } = require('./controllers/ProductController');

const path = require('path');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 10000;
const router = express.Router();

require('dotenv').config();

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'TVOI testing engine',
      version: '1.0.0'
    },
    servers: [
      {
        api: 'http://localhost:10000'
      }
    ]
  },
  apis: ['server.js'], 
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use('/api', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.static(path.join(__dirname + '/front')));
app.use(cors());
app.use(bodyParser.json());

router.get('/api/getAllProducts', getAllProducts);
router.post('/api/postProduct', postProduct);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'front', 'index.html'));
});

app.post("/order", (req, res) => {
  const order = req.body;
  sendOrderEmail(order)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error("Error sending order email:", error);
      res.sendStatus(500);
    });
});

const currentDate = formatDate(new Date());

async function sendOrderEmail(order) {
  const htmlContent = generateHtmlFromOrder(order);
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
        password: process.env.PASS
      },
    });

    const mailOptions = {
      from: "alexxholly11@gmail.com",
      to: "tvoishopua@gmail.com, " + order.email,
      subject: "TVOI | Нове замовлення від " + currentDate,
      html: htmlContent,
    };
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending order email:", error);
    throw error;
  }
}

const connectDb = async () => {
  console.log('Checking database connection...');

  try {
    await sequelize.authenticate();
    console.log('DB success');
  } catch(e) {
    console.log('DB failed', e);
    process.exit(1);
  }
};

(async () => {
  await connectDb();

  app.listen(PORT, () => {
    console.log('Server listening on port', PORT)
  });
})();