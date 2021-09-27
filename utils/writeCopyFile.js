// adds the File System methods and path to the desired folder to write the page to
const fs = require('fs');
const { resolve } = require('path');

// promise that writes the page and returns err if failed
const writeFile = readmeContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', readmeContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File Created!'
      });
    });
  });
};

module.exports = { writeFile }