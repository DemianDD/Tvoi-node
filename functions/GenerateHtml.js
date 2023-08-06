function generateHtmlFromOrder(order) {
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Деталі замовлення | TVOI</title>
            </head>
            <body>
                <h1>TVOI</h1>
                <h3>Ваше замовлення: </h3>
                ${order.products && order.products.length
                    ? order.products.map((product) => {
                        return `
                            <h4>&#9679 ${product.labelName}</h4>
                            <sup>#${product.id}</sup>
                            <div><strong>Колір:</strong> ${product.color}</div>
                            <div><strong>Розмір:</strong> ${product.size}</div>
                            <div><strong>Кількість:</strong> x${product.count}</div>
                            <br />
                            
                        `;
                    }).join('')
                    : "No products in the order"
                }
              
                <h3>Інформація про доставку: </h3>
                <div><strong>Пошта: </strong> ${order.selectedImage}</div>
                <div><strong> Прізвище та Ім'я отримувача: </strong> ${order.name}</div>
                <div><strong> Номер телефону: </strong> ${order.phone}</div>
                <div><strong>Місто: </strong> ${order.town}</div>
                <div><strong>Номер відділення:</strong> ${order.postOffice}</div>
                <br/>
                
                <div><strong>До сплати: ${order.summary} грн </strong> </div>
                <sub> *${order.paymentMethod}</sub>
                <br/>

                <p><sup>Маєте запитання? - <a href="https://www.instagram.com/love.tvoi/?igshid=YmMyMTA2M2Y%3D">Напишіть нам сюди</a></sup></p>
            </body>
        </html>
    `;
}

module.exports = generateHtmlFromOrder;