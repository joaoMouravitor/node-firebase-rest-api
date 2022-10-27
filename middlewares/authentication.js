const jwt = require('jsonwebtoken')
const config = require('../config')


module.exports = async (req, res, next) =>{
    let token = req.body.token || req.query.query || req.headers('x-accesstoken')
    if (token) {
       try{
         let decoded = await jwt.verify(token, config.secretkey)
         console.log(decoded)
         req.usuarioLogado = decoded
         next()
       }catch(error){
         res.status(401).send({
            message: 'O token informado é inválido!'
        })
       }
    }else{
        res.status(401).send({
            message: 'Voce precisa informar um token para acessar este recurso'
        })
    }
}