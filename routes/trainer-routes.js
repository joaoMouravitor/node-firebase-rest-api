// realizando as importações
const express = require('express')
const {
  addTrainer,
  getAllTrainers,
  getTrainer,
  updateTrainer,
  deleteTrainer
} = require('../controllers/trainerController')

// inicializando as rotas do express
const router = express.Router()

// criando as rotas para o recurso 'trainer'
// definindo a rota para a listagem de treinadores
router.get('/', getAllTrainers)
// definindo a rota para listar treinador específico
router.get('/:id', getTrainer)
// definindo a rota para cadastro de treinadores
router.post('/', addTrainer)
// definindo a rota para alterar um treinador
router.put('/:id', updateTrainer)
// definindo a rota para excluir um treinador
router.delete('/:id', deleteTrainer)

module.exports = {
  routes: router
}
