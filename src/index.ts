import express, {Express} from 'express';

const app: Express = express();
const PORT: Number = 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});