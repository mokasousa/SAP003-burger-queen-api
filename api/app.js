//to config the server

import express from 'express';
import bodyParser from 'body-parser';
import productsRoute from '../routes/products';
import ordersRoute from '../routes/orders';
import tablesRoute from '../routes/tables';

//initialization
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/products', productsRoute);
app.use('/api/orders', ordersRoute);
app.use('/api/tables', tablesRoute);

export default app;