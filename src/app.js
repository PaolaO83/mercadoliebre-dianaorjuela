//requerir express
let express = require("express");

//guardar en varaiables las funcionalidades de express
let app = express();

let path = require("path");

let publicPath = path.resolve(__dirname, "../public")
app.use(express.static(publicPath));

//poner a escuchar el servidor
const port = process.env.PORT || 3001;
app.listen(port, () => console.log('Servidor corriendo en puerto 3000 http://localhost:${port}'));

// como tiene q responder al hacer un pedido
app.get("/",(req,res) => {
    
    res.sendFile(path.resolve(__dirname,"./views/home.html"));
});

app.get("/register.html",(req,res) => {
    
    res.sendFile(path.resolve(__dirname,"./views/register.html"));
});
app.get("/login.html",(req,res) => {
    
    res.sendFile(path.resolve(__dirname,"./views/login.html"));
});


