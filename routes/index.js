var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/Candidate/Registration', function(req, res, next) {
  res.render('Candidate/Registration',);
});
router.get('/Candidate/Login', function(req, res, next) {
  res.render('Candidate/Login',);
});
router.get('/Jobs/Joblisting', function(req, res, next) {
  res.render('Jobs/Joblisting',);
});
router.get('/Userprofile', function(req, res) {
  res.render('Candidate/profile');
});
router.get('/Editprofile', function(req, res) {
  res.render('Candidate/Editprofile');
});
router.get('/Jobdetails', function(req, res) {
  res.render('Jobs/Jobdetails');
});

router.get('/ProfileDashboard', function(req, res, next) {
  res.render('Candidate/ProfileDashboard',);
});

module.exports = router;
