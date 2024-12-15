const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/excursionDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Создание схемы и модели для заявки
const applicationSchema = new mongoose.Schema({
    name: String,
    email: String,
    date: String,
    message: String,
});

const Application = mongoose.model('Application', applicationSchema);

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Обработка POST-запроса для отправки заявки
app.post('/api/applications', (req, res) => {
    const application = new Application(req.body);
    application.save((err) => {
        if (err) {
            return res.status(500).send('Ошибка при сохранении заявки.');
        }
        res.status(200).send('Заявка успешно сохранена.');
    });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});

