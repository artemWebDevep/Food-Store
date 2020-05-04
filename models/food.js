
const uuid = require('uuid/v4')
const fs = require('fs')
const path = require('path')


class Food {
	constructor(title, price, img) {
	this.title = title
	this.price = price
	this.img = img
	this.id = uuid()
	}


	toJSON() {
		return {
			title: this.title,
			price: this.price,
			img: this.img,
			id: this.id
		}
	}

	
	async save() {
		const food = await Food.getAll()
		food.push(this.toJSON())

		return new Promise((resolve, reject) => {
			fs.writeFile(
				path.join(__dirname, '..', 'data', 'food.json'),
				JSON.stringify(food),
				(err) => {
					if(err) {
						reject(err)
					}else {
						resolve()
					}
				}
			)
		})
		
		
	}


	static getAll() {
		return new Promise((resolve, reject) => {
			fs.readFile(
				path.join(__dirname, '..', 'data', 'food.json'),
				'utf-8',
				(err, content) => {
					if(err) {
						reject(err)   
					} else {
						resolve(JSON.parse(content))
					}
				}
			)
		})
	}

	static async getById(id) {
		const foods = await Food.getAll()
		return foods.find(f => f.id === id)
	}
}


module.exports = Food