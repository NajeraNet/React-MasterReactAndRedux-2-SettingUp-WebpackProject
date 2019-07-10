* Command and issues.

  > npm init -y

- Add gitignore file

  ```gitignore
    /node_modules
  ```
- Install Webpack and Webpack-cli

  > npm i --save-dev webpack webpack-cli

- Create the webpack file and create the basic configuration (webpack.confi.js)

  ```javascript
    const path = require('path');

    module.exports = {
      // set entry direction
      entry: path.join(__dirname, 'src', 'app.js'),
      // set output directory and name
      output: {
        // set the route
        path: path.join(__dirname, 'dist'),
        // set the compile file
        filename: 'app.bundle.js'
      }
    }
    ```
- create the file src/app.js

- Configure npm command and run webpack in package.json

  ```json
    "scripts": {
      "build": "webpack"
    }
  ```
- in console run...

  > npm run build
