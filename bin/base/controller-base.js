exports.post = async (repository, validator, req, res) => {
    try {
        let data = req.body
        if (!validator.isValid()){
            res.status(400).send({
                message: "Existem dados inválidos na sua requisição",
                validation: validator.errors() 
            }).end()
            return
        }
            let result = await repository.create(data)
            res.status(201).send(result)
        } catch(err) {
            console.log('Const com erro. Motivo: ',err)
            res.status(500)
     .send({
        message: 'Erro no processamento',
        error: err
    })    }
    }

exports.put = async (repository, validator, req, res) => {
    try{
        let data = req.body
        if(!validator.isValid()){
            res.status(400).send({
                message: 'Existem dados cominválidos',
                validation: validator.errors()
            }).end()
            return
        }
        let result = await repository.update(req.body)
    } catch(err){
        console.log('')
    }
}

exports.get = async (repository, req, res) => {
    try{
        let data = await repository.getAll()
        res .status(200).send(data)
    }catch(err){
        console.log('Get com erro! Motivo: ',err)
        res.status(500).send({
            message: 'Erro no processamento',
            error: err
        })
    }
}

exports.getById = async (repository, req, res) => {
    try{
        let id = req.params.id
        if(id){
            let data = await repository.getById(id)
            res.status(200),send(data)
        }else{
            res.status(400).send({
                message:  "parametro ID precisa ser informado!"
            })
        }
    }catch(err){
        console.log("getById com erro. Motivo: "),
        res.status(500),send({
            message: 'Erro no processanto!',
            error: err
        })
    }
}

exports.delete = async (repository, req, res) => {
    try{
        let id = req.params.id
        if(id) {
            await repository.delete(id)
            res.status(200).send({
                message: "Documento Excluido com Sucesso!"
            })
        }else{
            res.status(400).send|({
                message: "O parametro ID precisa ser informado"
            })
        }
    }catch(err){
        console.log("Delete com erro! Motivo: "),
        res.status(500).send({
            message: 'Erro no processamento',
            error: err
        })
    }
}
