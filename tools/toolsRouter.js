const router = require("express").Router();
const knex = require('knex');

const db = require('../data/dbConfig.js')

// create tool
router.post('/', async (req, res) => {
    try {
        const [id] = await db('tools').insert(req.body);

        const tool = await db('tools')
            .where({
                id
            })
            .first();

        res.status(201).json(tool);
    } catch (error) {
        const message = errors[error.errno] || 'We ran into an error';
        res.status(500).json({
            message,
            error
        });
    }
});


// router.post("/", (req, res) => {
//     // let user = req.body;
//     // const hash = bcrypt.hashSync(user.password, 14);
//     // user.password = hash;

//     Users.add(user)
//       .then(saved => {
//         const token = generateToken(saved);

//         res.status(201).json({
//           message: `Welcome ${saved.username}`,
//           authToken: token
//         });
//       })
//       .catch(err => {
//         res.status(500).json(err);
//       });
//   });

module.exports = router;