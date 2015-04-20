# ES6 Workflow

Use ES6, today.

### Installation
The very first, project [babel](https://babeljs.io) is required.

```bash
git clone git@github.com:turingou/es6-workflow.git
cd es6-workflow
npm install .
```

### Development
Put all your ES6 js files in `src` folder, with ES6 workflow provided below, they will all be compiled to ES5 js files to `dist` folder.

### Build
Build dist files from `./src` folder

```bash
npm run build
```

Build and concat to one minimal file.

```bash
npm run build-concat
```

To build in realtime

```bash
npm run build-watch
```

### Serve
ES6 workflow provides a built-in serve util, to serve static files:

```bash
npm run serve
```

### Watch and serve
To watch files change and serve static files:

```bash
npm run dev
```

### MIT license
Copyright (c) 2015 turing &lt;o.u.turing@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
