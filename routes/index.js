const express = require('express')
const router = express.Router()

//@desc Loogin/Landing Page
//@route GET/
// router.get('/',  (req, res) => {
//     res.send('login')
// })

router.get("/",function(req,res){
    // res.send('login');
    res.render("login");

});

//@desc Dashbaord
//@route GET/dashboard
// router.get('/dashboard', (req,res)=>{
//     res.send('dashboard')
// })

router.get("/dashboard",function(req,res){
    res.send("dashboard");

});

module.exports = router