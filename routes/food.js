const {Router} = require('express')
const Foods = require('../models/food')
const router = Router()

router.get('/', async (req, res) => {
    const foods = await Foods.getAll()
    res.render('food', {
        title: 'Готовые блюда',
        isFood: true,
        foods
    })
})

module.exports = router