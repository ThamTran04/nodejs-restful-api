const express = require('express') // npm install express
const mysql = require('mysql')
const morgan = require('morgan') // npm install morgan --save-dev
const {
    success,
    error
} = require('./assets/functions')
const bodyParser = require('body-parser')
const config = require('./assets/config.json')
const cors = require('cors');
const db = mysql.createConnection(config.db);

db.connect((err) => {
    if (err) console.log(err.message);
    else {
        const app = express();
        let LivresRouter = express.Router();
        app.use(morgan('dev'));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(cors());

        LivresRouter.route('/')
            // http://localhost:8000/api/v1/livres
            .get((req, res) => {
                if (req.query.max !== undefined && req.query.max > 0)
                    db.query('SELECT * FROM livre LIMIT 0, ?;', parseInt(req.query.max), (err, result) => {
                        if (err) res.json(error(err.message))
                        else res.json(success(result))
                    });
                else if (req.query.max !== undefined) res.json(error('Erreur Valeur max'))
                else
                    db.query('SELECT * FROM livre', (err, result) => {
                        if (err) res.json(error(err.message));
                        else res.json(success(result));
                    });
            })

        app.use(config.rootAPI + 'livres', LivresRouter)
        app.listen(config.port, () => console.log('Started on port ' + config.port))
    }
})