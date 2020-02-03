//to config the server

import express from 'express';
import bodyParser from 'body-parser';

import productsRoutes from './server/src/routes/ProductsRoutes';
import ordersRoutes from './server/src/routes/OrdersRoutes';
import itemsRoutes from './server/src/routes/ItemsRoutes';
import tablesRoutes from './server/src/routes/TablesRoutes';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.use('/api/products', productsRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/items', itemsRoutes);
app.use('/api/tables', tablesRoutes);

app.get('*', (req, res) => res.status(200).send({
  message: 'Boas-vindas à API BURGER QUEEN!',
}));

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;
