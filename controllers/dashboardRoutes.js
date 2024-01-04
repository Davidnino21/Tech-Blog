const router = require('express').Router();


router.get('/dashboard', async (req, res) => {
    res.render('dashboard', {
        loggedIn: req.session.logged_in
    }) 
        
    
});



module.exports = router;

//handle the logout to clear the session
//add auth middleware 