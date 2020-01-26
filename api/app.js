//to config the server

import express from 'express';
import bodyParser from 'body-parser';

import productsRoute from '../routes/products';
import ordersRoute from '../routes/orders';
import itemsRoute from '../routes/items';

//initialization
const app = express();

// app.get('*', (req, res) => res.status(200).send({
//     message:'Welcome to this API'
// }))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/products', productsRoute);
app.use('/api/orders', ordersRoute);
app.use('/api/items', itemsRoute);

export default app;