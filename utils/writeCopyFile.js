const fs = require('fs');
const { resolve } = require('path');

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