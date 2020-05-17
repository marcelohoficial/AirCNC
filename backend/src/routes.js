const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotsController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');


const routes = express.Router();
const upload = multer(uploadConfig);

//GET POST PUT DELETE

//req.query = Acessar query params (para filtros)
//req.params =Acessar route params (para edição, delete)
//req.body = Acessar o corpo da requisição (para criação, edição)

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotsController.index);
routes.post('/spots', upload.single('thumbnail'), SpotsController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

//routes.post('/users', (req, res) => {
  //return res.send('Hello Word');
  //return res.json({message: "Hello Word"});
  //return res.json({idade: req.query.idade });
  //return res.json(req.body);
//});

module.exports = routes;