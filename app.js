'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
const exphbs = require('express-handlebars');

// Kết nối file models
const models = require('./models');

// Static files
app.use(express.static(__dirname + '/public'));

// Cấu hình Handlebars
app.engine('hbs', exphbs.engine({
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials',
  extname: 'hbs',
  defaultLayout: 'main'
}));
app.set('view engine', 'hbs');

// Tạo bảng Sequelize
app.get('/createTables', (req, res) => {
  models.sequelize.sync().then(() => {
    res.send("Tables created successfully");
  });
});

// Trang chủ
app.get('/', (req, res) => {
  res.render('index', { title: 'Trang chủ' });
});

// Trang con động
app.get('/:page', (req, res) => {
  res.render(req.params.page, { title: req.params.page });
});

// Start server
app.listen(port, () => {
  console.log(`Server chạy tại http://localhost:${port}`);
});
