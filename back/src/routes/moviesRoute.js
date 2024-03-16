const { Router } = require('express')
const moviesController = require('../controllers/controller')


const moviesRoute = Router()

moviesRoute.get('/', moviesController)

module.exports = moviesRoute