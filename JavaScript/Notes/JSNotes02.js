//Javascript Algorithm Notes

//Recursicve Descent:
array = function () {
     var array = [];
     next('[');
     white();
     if (ch !== ']') {
          while (true) {
               array.push(value());
               white();
               if (ch === ']'){
                    break;
               }
               next(',');
               white();
          }
     }
     next(']');
     return array;
};
// Closer is the context of inner function includes the scope of the outer funtion.
// An inner funtion enjoys the context even after the parent functions have returned.
// One function applies closer over the variables of parent or another function.
// Not using Closure
var  digit_name = (function (n){
     var names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
     return names[n];
};

alert(digit_name(3));

// With closure
var  digit_name = (function (){
     var names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
     return function (n) {
          return names[n];
     };

}());

alert(digit_name(3));

// With closure and conditionals
var  digit_name = (function () {
     var names;
     return function (n) {
               if (!names) {
                    names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
               }
          }
          return names[n];
     };
}());

alert(digit_name(3));

var gulp = require('gulp');
var webpack = require('webpack');
var gutil = require('gutil');
var babel = require('babel/register');
var config = require(path.join('../..', 'webpack.config.es6.js'));
var eslint = require('gulp-eslint');


gulp.task('webpack-es6-test', function(done){
webpack(config).run(onBuild(done));
});

function onBuild(done) {
return function(err, stats) {
 if (err) {
     gutil.log('Error', err);
     if (done) {
         done();
     }
 } else {
     Object.keys(stats.compilation.assets).forEach(function(key) {
         gutil.log('Webpack: output ', gutil.colors.green(key));
     });
     gutil.log('Webpack: ', gutil.colors.blue('finished ', stats.compilation.name));
     if (done) {
         done();
     }
 }
}
}

function onBuild(done) {
gulp.src(['**/*.js','!node_modules/**'])
 .pipe(eslint({
     rules: {
         'my-custom-rule': 1,
         'strict': 2
     },
     globals: [
         'jQuery',
         '$'
     ],
     envs: [
         'browser'
     ]
 }))
 .pipe(eslint.formatEach('compact', process.stderr));


var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
 entry: {
     grumpywizards: './client/src/app.jsx'
 },
 devtool: 'source-map',
 module: {
     preLoaders: [
         // Javascript
         { test: /\.jsx?$/, loader: 'eslint', exclude: /node_modules/ }
     ],
     loaders: [
         // Javascript
         { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
         // Stylesheets
         { test: /\.css$/, loader: ExtractTextPlugin.extract( 'style', 'css?sourceMap') },
         { test: /\.scss$/, loader: ExtractTextPlugin.extract( 'style', 'css?sourceMap!sass?sourceMap') },
         // Font Definitions
         { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]' },
         { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' },
         { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]' },
         { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' },
         { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]' }
     ]
 },
 externals: {
     'react': 'React',
     'react-dom': 'ReactDOM'
 },
 output: {
     filename: 'public/[name].js'
 },
 eslint: {
     failOnWarning: false,
     failOnError: true
 },
 sassLoader: {
     includePaths: [ 'client/style' ]
 },
 plugins: [
     new ExtractTextPlugin('public/grumpywizards.css')
 ]
};





