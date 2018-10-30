const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0.00
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'http://www.indiantradebird.in/images/noimage.jpg',
    validate: {
      isUrl: true
    }
  }
})

module.exports = Product