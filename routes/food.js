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

router.get('/:id', async (req, res) => {
    const food = await Foods.getById(req.params.id)
    res.render('foodDescr',{
        layout: 'empty',
        title: `Блюдо ${food.title}`,
        food
    })
})

module.exports = router