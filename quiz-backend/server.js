import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/quiz', async (req, res) => {
  try {
    const response = await axios.get('https://api.jsonserve.com/Uw5CrX');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching quiz data');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

