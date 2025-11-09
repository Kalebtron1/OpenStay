import express from 'express';
import cors from 'cors';
import payments from './routes/paymentsRoute.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/payments', payments);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
