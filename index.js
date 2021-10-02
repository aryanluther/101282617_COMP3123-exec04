// Aryan luthra 
// 101282617
let express = require('express')
let app = express()

let server = app.listen(8000, () => {
    let host = server.address().address
    let port = server.address().port
    console.log("Server is running http://%s:%s", host, port)
})

//GET request: /hello return "Hello Express JS"
app.get("/hello", (req, res) => {
    res.send("<h1> Hello Express Js </h1>")
})

/* Doing with query parameter */
//http://localhost:8000/name?fnm=Aryan&lnm=Luthra
app.get("/name" ,(req, res) => {
    let fname = req.query["fnm"]
    let lname = req.query["lnm"]
    let first_name = `${fname}`
    let last_name = `${lname}`
    response = {
        first_name,
        last_name
    }
    res.send(response)
})

/* Doing with path parameter */
//http://localhost:8000/name/Aryan/Luthra
app.post("/name/:fnm/:lnm", (req, res) => {
    let fnm = req.params.fnm
    let lnm = req.params["lnm"] // other way of getting the object
    let firs_name = `${fnm}`
    let last_name = `${lnm}`
    response = {
        firs_name,
        last_name,
    }
    res.send(response)
})