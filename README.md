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
- create the file src/app.js and add the class Human

  ```javascript
    class Human {

    }
  ```

- Configure npm command and run webpack in package.json

  ```json
    "scripts": {
      "build": "webpack"
    }
  ```
- in console run...

  > npm run build

- Install bable (babel-preset-react to comple jsx)

  > npm i --save-dev babel-core babel-preset-env babel-preset-react babel-loader

- Set .babelrc config

  ```jsx
    {
      "presets": [
        "env",
        "react"
      ]
    }
  ```

- Add the modules Keys (rules: going to loop, test: every file that ends in js|jsx,exclude: node_modules and use babel-loader)

  ```jsx
  {
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
        }]
      }
  }
  ```

- compile again npm webpack to see in the app.bundle.js our class human compiled.
