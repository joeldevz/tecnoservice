exports.error404= (req, res, next)=>{
    let error = new Error(),
        locals = {
            title:"error 404",
            description: "recurso no encontrado",
            error:error
        }
    error.status= 404
    res.status(404).render('404', locals)
}