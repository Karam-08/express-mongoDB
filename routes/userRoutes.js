const express = require('express');
const router = express.Router();


// Label all routes

// Get all user routes
router.get('/', (req, res) =>{
    try{
        res.status(200).send('Home Page: Proof of Routers')
    }catch(err){
        console.error(err)
        res.status(500).json({message: 'Server Error', error: err.message})
    }
})


// Export Router
module.exports = router
