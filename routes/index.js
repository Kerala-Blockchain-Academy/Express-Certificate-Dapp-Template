var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/view', function(req, res, next) {
  data = {"courseName" : "<Course Name>", "certificateID" : "<Certificated ID>", "candidateName" : "<Candidate Name>", "grade" : "<Grade>", "date" : "<Date>"}
  res.render('viewCertificate', { data: data });
});

router.get('/issue', function(req, res, next) {
  res.render('issueCertificate', { formClass : '', messageClass : 'hidden', certificateID : '<Certificated ID>' });
});


module.exports = router;
