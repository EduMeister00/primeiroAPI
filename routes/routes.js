const express = require('express')
const router = express.Router()
const path =require('path') 

router.get ('/',(req,res) => {
    res.send('Bem-Vindo')
})


router.get ('/home',(req,res) => {
    res.send('Você esta na pagina principal!')
})

router.get('/test', (req,res) =>{
    res.send('test')
})

router.use(function(req,res,next){
    res.status(404).send('Rota não encontrarda')
})

module.exports = router