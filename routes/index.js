var express = require('express');
var router = express.Router();
const cheerio = require('cheerio');
const axios = require('axios').default;
/* GET home page. */
router.get('/', function(req, res) {
  axios.get('https://corona.lmao.ninja/countries')
  .then(function (response) {
    console.log(response);
    res.render('index', { data: response['data'] });
    
  })
  .catch(function (error) {
    res.render('index', { title: 'Express' });
    console.log(error);
  })
 
 
});

router.get('/andhra', function(req, res) {
  axios('http://hmfw.ap.gov.in/covid_dashboard.aspx')
    .then(response => {
       html = response.data;
       start =  html.indexOf('<div class="container pagewrap">');
       final =  html.indexOf('<section id="section4">'); 
       html = html.substring(start, final);
      res.render('india', { data: html });
    })
    .catch(console.error);
 
 
});

router.get('/flag', function(req, res) {
  axios.get('https://corona.lmao.ninja/countries')
  .then(function (response) {
    console.log(response);
    res.render('flag', { data: response['data'] });
    
  })
  .catch(function (error) {
    res.render('flag', { title: 'Express' });
    console.log(error);
  })
});

router.get('/precaution', function(req, res) {
    res.render('precaution');
});

router.get('/status', function(req, res) {
  axios('https://docs.google.com/spreadsheets/d/e/2PACX-1vSc_2y5N0I67wDU38DjDh35IZSIS30rQf7_NYZhtYYGU1jJYT6_kDx4YpF-qw0LSlGsBYP8pqM_a1Pd/pubhtml#')
    .then(response => {
       html = response.data;
     //  start =  html.indexOf('<div class="container pagewrap">');
      // final =  html.indexOf('<section id="section4">'); 
       //html = html.substring(start, final);
      res.render('status', { data: html });
    })
    .catch(console.error);
   

});

module.exports = router;
