const express = require('express')
const router = express.Router()
const{ ensureAuth, ensureGuest} = require('../middleware/auth')

const Story = require('../models/Story')


// const request = require('request');
// const argv = require('yargs').argv;
//
// let apiKey = 'c158ceab3a0263b06cdfbb070ffb25bc';
// let city = argv.c || 'portland';
// let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
//
// request(url, function (err, response, body) {
//     if(err){
//         console.log('error:', error);
//     } else {
//         let weather = JSON.parse(body)
//         let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
//         console.log(message);
//     }
// });


router.get('/', ensureGuest,   (req, res) => {
try{
    res.render('./layouts/index', {
        layout: 'index',
        title: 'Dashboard weather',

    })
}catch (err){
    console.error(err)
    res.render('error/500')
}

})




//
// @desc Loogin/Landing Page
// @route GET/
router.get('/login', ensureGuest,   (req, res) => {

    res.render('login', {
        layout:'login',
    })
})

//localhost:3000/weather?address=lahore
router.get('/weather', (req, res) => {
    const address = req.query.address
    if(!address) {
        return res.send({
            error: "You must enter address in search text box"
        })
    }

    weatherData(address, (error, {temperature, description, cityName} = {}) => {
        if(error) {
            return res.send({
                error
            })
        }
        console.log(temperature, description, cityName);
        res.send({
            temperature,
            description,
            cityName
        })
    })
});


//@desc Dashboard
//@route GET/dashboard
router.get('/dashboard', ensureAuth, async (req,res)=>{
    console.log(req.user)

    try{
        const stories = await Story.find({user: req.user.id}).lean()
        res.render('dashboard', {
            name: req.user.firstName,
            stories
        })

    }catch (err){
        console.error(err)
        res.render('error/500')
    }
})

module.exports = router