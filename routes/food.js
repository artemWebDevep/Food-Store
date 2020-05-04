const {Router} = require('express')
const router = Router()

router.get('/', async (req, res) => {
    res.render('food', {
        title: 'Готовые блюда',
        isFood: true,
    })
})

module.exports = router