const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const app = express()
const homeRouters = require('./routes/home')
const addRouters = require('./routes/add')
const foodRouters = require('./routes/food')


const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use('/', homeRouters)
app.use('/add', addRouters)
app.use('/food', foodRouters)








const PORT = process.env.PORT || 3000

app.listen(3000, () => {
    console.log(`Server running on port ${PORT}`)
})