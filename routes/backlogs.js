var Model = require('../models/backlog'),
    mongoose = require('mongoose');
/**
 * list all backlogs
 */
exports.list = function(req, res) {
  Model.Backlog.find({}, function(err, backlogs) {
    if(err) {
      res.send(500);
    }
    res.send(backlogs);
  });
};

exports.retrieve = function(req, res) {
  var id = new mongoose.Types.ObjectId(req.params.id);
  Model.Backlog.findById(id, function(err, backlog) {
    if(err) {
      res.send(500);
    }
    res.send(backlog);
  })
};
/**
 * create a new backlog
 */
exports.create = function(req, res) {
  var backlog1 = new Model.Backlog(req.body);
  backlog1.save(function(err, backlog) {
    if (err) {
      res.send(500);
    }
    var id = backlog._id;
    res.header('Location', '/backlogs/' + id);
    res.send(backlog);
  });
};

/**
 * update a backlog
 */
exports.update = function(req, res) {
  var id = new mongoose.Types.ObjectId(req.params.id);
  var updated = req.body;
  delete updated._id;
  Model.Backlog.findById(id, function (err, backlog) {
    if(err) {
      res.send(500);
    }
    Model.Backlog.update({_id: id}, updated, function(err, num, raw) {
      if (err) {
        res.send(500);
      }
      res.send(updated);
    }); 
  });
};

/**
 * remove a backlog
 */
exports.remove = function(req, res) {
  var id = new mongoose.Types.ObjectId(req.params.id);
  Model.Backlog.findById(id, function(err, backlog) {
    if (err) {
      res.send(500);
    }
    if (!backlog) {
      res.send(404);
    }
    backlog.remove(function(err, backlog){
      if (err) {
        res.send(500);
      }
      res.send(200);
    });
  });
}


