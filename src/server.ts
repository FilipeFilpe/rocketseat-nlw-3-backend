import express from 'express';
import path from 'path';
import 'express-async-errors';
import cors from 'cors'

import './database/connection';

import routes from './routes';
import errorHanlder from './errors/handler';

const BASE_URL = process.env.SV_URL
const PORT = process.env.SV_PORT

const app = express()
app.use(cors())

app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHanlder);

app.listen(Number(PORT), String(BASE_URL), () => console.log('Server running in 3333 port!'))
