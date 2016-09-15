var app = require('express')();
const express = require('express');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userController = require('./user/userController');
const chatController = require('./chat/chatController');
const fileController = require('./files/fileController');
const fileControllerM = require('./files/fileControllerM');

const userControllerM = require('./user/userControllerM');
const cookieController = require('./utils/cookieController');
const chat = require('./chat/chatController');
const redis = require('redis');
const Nohm = require('nohm').Nohm;
const client = redis.createClient();
const concat = require('concat-stream');
const cookie = require('cookie');
const mongoose = require('mongoose');
const File = require('./files/fileModelM');

let curClip;

const mongoURI = 'mongodb://teamhighfive:codesmith05@ds029496.mlab.com:29496/teamhighfive';

mongoose.connect(mongoURI);

client.on('connect', () => {
  console.log('connected to redis');
  Nohm.setClient(client);
  Nohm.setPrefix('yohdl');
});


app.use('/',express.static('client/yohdl'));
app.use('/clips', express.static('clips'));
// app.use(express.static('client'));
app.use('/yohdl/room/:roomId', express.static('client/yohdl'));
app.use('/yohdl', express.static('client/yohdl'));
app.use('/', express.static('client/yohdl'));



// binary parser

app.use((req,res,next) => {
  req.pipe(concat((data) => {
    req.body = data;
    next();
  }))
});

// const oppressor = require('oppressor');



//use a different body parser for binary

//parsing the body and adding to the req
// app.use(bodyParser.urlencoded({ extended: true }));
//handling cookies for all requests
app.use(cookieParser());
// app.use(cookieParser(), cookieController.setCookie);




// app.get('/yohdl/rooms', function (req, res) {
//   console.log("hit route yohdl/rooms");
//   res.sendFile(path.join(__dirname, './../client/yohdl/index.html'));
// })

// app.get('/yohdl/room/:roomId', function (req, res) {
//   console.log("PATH ", __dirname)
//   res.sendFile(path.join(__dirname, './../client/yohdl/index.html'));
// });

// app.get('/yohdl', function (req, res) {
//   res.redirect(path.join(__dirname, './../client/yohdl/index.html'));
// });



app.get('/clips', fileControllerM.getFile, (req, res) => {
  res.send(res.clipFiles);
});

app.post('/clip', (req, res) => {
  var data = req.body;
  let roomId = req.headers.roomid;
  // var fileId = req.cookie.id;
  fileControllerM.createFile(roomId).then((filepath) => {
    curClip = filePath;
    fs.writeFile(__dirname + '/../clips/' + filePath, data, (err) => {
      if (err) {
        throw err;
      } else  {
        console.log('file created');
        io.emit('newClip', curClip);
      }
    });
    console.log("received filePath");
  })

  // let buf = new Buffer.(req.body.toString('binary'),'binary');
  res.send('ok');
})

app.get('/roomClips/:roomId', fileControllerM.getFilesByRoom, (req, res) => {
  res.send(res.clipFiles);
})

//logging the user in
app.post('/login', userControllerM.verifyUser);

app.post('/signup', userControllerM.createUser);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './../client/yohdl/index.html'));
});


let globalSocket;
//socket.io
io.on('connection', function (socket) {
  globalSocket = socket;
  console.log('connected')
  socket.on('clip', () => {
    console.log('inclip listener')
    // console.log('curClip in ')
    setTimeout(() => {
      socket.emit('newClip', curClip);
    }, 5000);

   });
    // console.log(cookie.parse(socket.handshake.headers['cookie']));
    //id = req.params.id
    //user object contrl.getuser()
    // userController.getUser().then((data) => {socket.emit('userObj', data);});
    // console.log(cookie.parse(socket.handshake.headers['cookie']));
    // userController.getUser().then((data) => { socket.emit('userObj', data); });
  }
)
// io.on('clip', () => {
//   console.log('in clip')
// })

server.listen(8080);
