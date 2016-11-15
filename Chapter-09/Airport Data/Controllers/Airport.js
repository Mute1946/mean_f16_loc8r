var mongoose = require('mongoose');
var Airport = mongoose.model('Airport');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.airportidReadOne = function(req, res) {
  console.log('Finding airport details', req.params);
  if (req.params && req.params.airportid) {
    console.log('The airportid', req.params.flapid);
    Airport
      .findById(req.params.aiportid)
      .exec(function(err, airport) {
        if (!airport) {
          console.log("No response given")
          sendJSONresponse(res, 404, {
            "message": "airportid not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(airport);
        sendJSONresponse(res, 200, airport);
      });
  } else {
    Airport.find({}, null, function (err, airport) {
      if (!airport) {
          console.log('No airportid specified');
        sendJSONresponse(res, 404, {
          "message": "No airports in request"
    });
    return;
      } else if (err) {
        console.log(err);
        sendJSONresponse(res, 404, err);
        return;
      }
      console.log(airport);
      sendJSONresponse(res, 200, airport);
    });
  }
};