const Temperatura = require("../models/Temperatura")

const receberTemperatura = (req,res) => {

    const {teperatura} = req.body

    const snesor = new Temperatura(temperatura)

    console.log(sensor)

    res.json({
        mensagem:"Tempatura recebida",
        dados:sensor
    })
}
    module.export ={
        receberTemperatura
    }
