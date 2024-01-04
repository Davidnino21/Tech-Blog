const router = require('express').Router();


router.get('/', async (req, res) => {
    res.render('homepage', {
        loggedIn: req.session.logged_in
    })
});

router.get('/login', (req, res) => {
    res.render('login')
});

module.exports = router;