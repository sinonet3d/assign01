const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

// default options
app.use(fileUpload());

app.post('/upload', (req, res) => {
  let uploadFile;
  let uploadPath;

  if (!req.files || !Object.keys(req.files).length) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "uploadFile") is used to retrieve the uploaded file
  uploadFile = req.files.uploadFile;
  uploadPath = __dirname + '/images/' + uploadFile.name;

  // Use the mv() method to place the file somewhere on your server
  uploadFile.mv(uploadPath, function(err) {
    if (err) return res.status(500).send(err);

    res.send('File uploaded!');
  });
});

app.listen(56586, '0.0.0.0', () => {
	console.log('listening to 56586')
})
