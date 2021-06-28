"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodo = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    console.log('createTodo');
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'created new todo', createTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodo = (req, res, next) => {
    console.log('getTodo');
    res.status(200).json({ message: 'Todos list' });
};
exports.getTodo = getTodo;
