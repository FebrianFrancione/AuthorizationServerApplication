const express = require('express')
const router = express.Router()

//@desc Loogin/Landing Page
//@route GET/
router.get('/',  (req, res) => {
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
router.get('/dashboard', (req,res)=>{
    res.render('dashboard')
})

// router.get("/dashboard",function(req,res){
//     res.render("dashboard");
//
// });

module.exports = router