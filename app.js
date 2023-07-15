
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', (req, res,next) => {
    res.render('home',{
        title: 'Home',
        message: "Aqui Informacion De Inicio",
        btn: "Inicio"
    });
});
app.get('/about', (req, res,next) => {
    res.render('about',{
        title: 'About',
        message: "Aqui Informacion relevante sobre nosotros",
        btn: "Saber Mas"
    });
});
app.get('/posts', (req, res,next) => {
    res.render('posts',{
        title: 'Posts',
        message: "Aqui Informacion relevante sobre Posts",
        btn: "Ver Posts"
    });
});
app.get('/login', (req, res,next) => {
    res.render('login',{
        title: 'Login',
        message: "Aqui Inicia Sesion",
        btn: "Entrar"
    });
});
app.use((req,res,next)=>{
    next(createError(404));

});

app.use((err,req,res,next)=>{
    res.status(err.status || 500);

    res.render('error',{
        title: "Not Found",
        codigo: "404",
        message: "Ruta no encontrada"
    });
});

module.exports = app;