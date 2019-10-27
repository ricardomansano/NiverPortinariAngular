var express = require("express");
var app = express()
let port = 3333
var data = [{"id": "1001", "name": "Customer 1001"},
            {"id": "1002", "name": "Customer 1002"},
            {"id": "1003", "name": "Customer 1003"}]

// Necessario para o POST
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.listen(port, () => {
    console.log(`Acesse a lista a partir de: http://localhost:${port}/rest/customer`);
});

// Metodo POST: Cria novo registro
// Usando o Postman vc deve usar a opcao Body => x-www-form-urlencoded para preenchimento
app.post("/rest/customer", (req, res) => {
    console.log(`Post`)
    data.push(req.body)
    res.json({"status": "OK"})
});

// Metodo GET: Retorna lista, ex: http://localhost:3333/rest/customer
app.get("/rest/customer", (req, res) => {
    console.log(`Get: ALL`)
    res.json(data)
});

// Metodo GET: Retorna um ID, ex: http://localhost:3333/rest/customer/1001
app.get("/rest/customer/:id", (req, res) => {
    console.log(`Get: ${req.params.id}`)
    const filtered = data.filter(el => el.id == req.params.id);
    res.json(filtered)
});

// Metodo DELETE: Apaga um ID, ex: http://localhost:3333/rest/customer/1001
app.delete("/rest/customer/:id", (req, res) => {
    console.log(`Delete: ${req.params.id}`)
    const filtered = data.filter(el => el.id !== req.params.id)
    data = filtered
    res.json(data)
});
