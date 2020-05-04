const {Router} = require('express')
const Card = require('../models/card')
const Foods = require('../models/food')
const router = Router()


router.post('/add', async (req, res) => {
    const food = await Foods.getById(req.body.id)
    await Card.add(food)
    res.redirect('/card')
})

router.get('/', async (req, res) => {
    const card = await Card.fetch()
    res.render('card', {
        title: 'Корзина',
        card
    })
})

module.exports = router
