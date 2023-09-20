const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const productRoutes = require('./api/routes/products');
app.use(productRoutes);
const driverRoutes = require('./api/routes/driver');
app.use(driverRoutes);
const vehicleRoutes = require('./api/routes/vehicle');
app.use( vehicleRoutes);
const vehicle_driverRoutes = require('./api/routes/vehicle_driver');
app.use( vehicle_driverRoutes);
const garageRoutes = require('./api/routes/garage');
app.use( garageRoutes);


app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
});

module.exports = app;
