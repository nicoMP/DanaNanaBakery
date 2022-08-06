const express = require('express');
const router = express.Router();
router.use(express.urlencoded({extended: true}));//allows acces to urls
router.get('/getBig', (req,res)=>{

});
module.exports = router;