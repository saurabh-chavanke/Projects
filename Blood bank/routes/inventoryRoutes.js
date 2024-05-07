const express = require('express')
const authMiddelware = require('../middlewares/authMiddelware')
const {createInventoryController, getInventoryController} = require('../controllers/inventoryController')

const router = express.Router()


router.post('/create-inventory',authMiddelware,createInventoryController)

router.get("/get-inventory",authMiddelware,getInventoryController)

module.exports = router