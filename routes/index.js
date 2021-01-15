const express = require('express')
const router = express.Router()
const{ ensureAuth, ensureGuest} = require('../middleware/auth')

//@desc Loogin/Landing Page
//@route GET/
router.get('/', ensureGuest,   (req, res) => {
    res.render('login', {
        layout:'login',
    })
})

// router.get("/",function(req,res){
//    j
//     res.render("login");
//
// });

//@desc Dashbaord
//@route GET/dashboard
router.get('/dashboard', ensureAuth, (req,res)=>{
    console.log(req.user)
    res.render('dashboard')

})

// router.get("/dashboard",function(req,res){
//     res.render("dashboard");
//
// });

module.exports = router