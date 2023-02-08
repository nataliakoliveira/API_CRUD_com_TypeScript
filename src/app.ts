import express from 'express';
import productRouter from './routes/product.route';

const app = express();

// up
app.use(express.json());
app.use('/products', productRouter);

export default app;
