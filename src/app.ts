//const express = require('express');
import express, { Request, Response, NextFunction } from 'express'
import { json } from 'body-parser';

import todoRoutes from './routes/todos'

const app = express();

app.use(json());

app.use((req, res, next) => {
    const requestTime: string = new Date().toISOString();
    console.log(requestTime);
    next();
  });

app.use('/todos', todoRoutes);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log('Error...')
    res.status(500).json({ message: err.message });
});

app.listen(3000);

console.log('App is listenning...');