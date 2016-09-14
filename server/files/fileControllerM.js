const mongoose = require('mongoose');
const File = require('./fileModelM');
const shortId = require('shortid');
fileControllerM = {};

fileControllerM.createFile = function (data) {
  //console.log("inside fileCreate");
  let clipId = shortId.generate();
  console.log("shortID generated", clipId);
  filePath = 'clip' + clipId + '.oog';
  return new Promise((resolve, reject) => {
    File.create({fileId: clipId, pathUrl: filePath}, (err, data) => {
      if(err) {
        reject(err);
      } else {
        console.log("Success Store");
        console.log(filePath);
        resolve(filePath);
      }
    });
  });
}

fileControllerM.getFile = (req, res, next) => {
  File.find({})
  .sort({ updatedAt: -1 })
  .select('pathUrl')
  .exec( (err, user) => {
    if (err) {
      console.log('error', err);
    } else {
      let outArr = user.map((item) => {
        return item.pathUrl;
      });
      let stringifiedFiles = JSON.stringify(outArr);
      res.clipFiles = stringifiedFiles;
      next();
    }
  });
  // next();
}

fileControllerM.getFilesByRoom = (req, res, next) => {
  File.find({roomId: req.params.roomId})
  .sort({ updatedAt: -1 })
  .select('pathUrl')
  .exec( (err, user) => {
    if (err) {
      console.log('error', err);
    } else {
      let outArr = user.map((item) => {
        return item.pathUrl;
      });
      let stringifiedFiles = JSON.stringify(outArr);
      res.clipFiles = stringifiedFiles;
      next();
    }
  });
  // next();
}

module.exports = fileControllerM;
// fileController.createFile = function (data) {
//   // fileController.getFileCount();
//   console.log('inside file ctrl create file')
//   let file = Nohm.factory('File');
//   filePath = 'clip' + ++fileCount + '.oog';
//   file.p({ author: 'jose', filePath: filePath, createdAt: Date.now()});
//   console.log('inside file creator file');
//   return saveFile = new Promise((resolve, reject) => {
//     file.save(function (err) {
//       if (err) {
//         reject(err);
//       } else {
//         console.log('inside else in create file');
//              ///need to store file path name
//         resolve(filePath);
//       }
//     });
//   });
