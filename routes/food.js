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

router.get('/:id/edit', async (req, res) => {
    if (!req.query.allow) {
        return res.redirect('/')
    }

    const food = await Foods.getById(req.params.id)

    res.render('food-edit', {
        title: `Редактировать ${food.title}`,
        food
    })
})

///
router.post('/edit', async (req, res) => {
    await Foods.update(req.body)
    res.redirect('/food')
})
///

router.get('/:id', async (req, res) => {
    const food = await Foods.getById(req.params.id)
    res.render('foodDescr',{
        layout: 'empty',
        title: `Блюдо ${food.title}`,
        food
    })
})

module.exports = router