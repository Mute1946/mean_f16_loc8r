/* GET 'about us' page */
module.exports.about = function(req, res) {
    res.render('generic-text', {
        title: 'About Airport',
        content: 'This airport data will be able to be used to determine the wind speed, wind direction, and the appreite runway that will need to be used to land at a particular airport'
        });
};

/* GET Angular SPA page */
module.exports.angularApp = function(req, res){
  res.render('layout', { title: 'Airport Data' });
};