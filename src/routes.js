const express = require('express')
const multer = require('multer')
const multerConfig = require('./config/multer')

const routes = express.Router()

const BoxController = require('./controllers/BoxController')
const FileController = require('./controllers/FileController')

// GET utilizado para buscar alguma informação da API
// POST para criar alguma coisa
// PUT para alterar
// DELETE usado para deletasr

// POST
routes.post('/boxes', BoxController.store)
routes.post('/boxes/:id/files', multer(multerConfig).single('file'), FileController.store)

// GET
routes.get('/boxes/:id', BoxController.show )

module.exports = routes