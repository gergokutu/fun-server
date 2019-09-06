const { Router } = require('express')
const router = new Router()

const TestModel = require('./testModel')

router.get(
  '/test',
  async (req, res, next) => {
    const test = await TestModel.findAll()
  }
)

module.exports = router