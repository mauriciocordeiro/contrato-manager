let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dataBaseConfig = require('./database/db');

// Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dataBaseConfig.db, {
    useNewUrlParser: true
}).then(() => {
    console.log('Database connected sucessfully o/ ')
},
    error => {
        console.log('Could not connected to database -_-: ' + error)
    }
)

// ROUTES =====================================================================
// ============================================================================
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist/contrato-manager')));
app.use('/', express.static(path.join(__dirname, 'dist/contrato-manager')));
// contrato -------------------------------------------------------------------
const contratoRoute = require('../server/routes/contrato.route')
app.use('/contrato', contratoRoute)
// ----------------------------------------------------------------------------
// empresa --------------------------------------------------------------------
const empresaRoute = require('../server/routes/empresa.route')
app.use('/empresa', empresaRoute)
// ----------------------------------------------------------------------------
// ============================================================================

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});