# gulp-standard-starter

It's a standard task runner supported with 
hot-reloading, 
ES-5, 
scss, 
autoprefix, 
css-minification, 
js-minification, 
file-combination, 
image-optimization.

## Getting Started

Clone this gist or download as zip file.

### Prerequisites

1.If not installed previously then at first install- 
```
Node.js
```
Download from here [Download](https://nodejs.org/en/) and then install it.

2.If yarn is not install in your computer globally install it globally.

```
npm install yarn -g
```
Version check:
```
yarn -v
```
3. At last install "gulp" globally-

```
npm install gulp-cli -g
```
### Installing

On command line go to the directory where the "src" folder is located & install the development dependencies-

```
yarn install
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

To test run the gulp command on the command line-

```
gulp build
```
The output will provide you a css folder with an optimized .css file, a js folder with an optimized .js file, a folder with all optimized images and all the html files

### Add new html files:

When adding a new .html file link the stylesheet as all.css

```
<link rel="stylesheet" href="all.css">
```

Add the js file as all.js

```
<script src="all.js"></script>
```

### Add new stylesheets & js files:

Your .scss file order will be considered as the combined file order. The most top file will be placed on the top on the combined file(all.css). So be carefull if you have dependency. Place the main.css file which will be modified by you should be placed at the last. And same as for .js files.

```
sass folder files order :
normalize.scss
...
...
main.scss

```

## Deployment

After doing every thing you need to edite run the command "gulp build" 

```
gulp build
```
And deploy the files in the "build" folder.

## Author

* **Motahar Hossain** - *Front-End Developer* - [Motahar Hossain on Github](https://github.com/techadjuvant)


* ******************* The End ***************** *

