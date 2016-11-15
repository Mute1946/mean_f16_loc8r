/* GET 'about us' page */
module.exports.about = function(req, res) {
    res.render('generic-text', {
        title: 'About Airport Data',
        content: 'Airport was created to help people get the necessary data for a particular airport that they may be flying into.'
    });
};

/* GET Angular SPA page */
module.exports.angularApp = function(req, res){
  res.render('layout', { title: 'Airport Data' });
};