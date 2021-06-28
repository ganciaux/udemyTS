//const express = require('express');
//import { Request, Response, NextFunction} from 'express'
import { RequestHandler } from 'express'
import { Todo } from '../models/todo'
const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
    console.log('createTodo')
    const text = (req.body as { text: string }).text;
    const newTodo = new Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'created new todo', createTodo: newTodo });
};

export const getTodo: RequestHandler = (req, res, next) => {
    console.log('getTodo')
    res.status(200).json({ message: 'Todos list' });
};

