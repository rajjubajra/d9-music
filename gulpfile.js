const {src, dest, watch, series} = require('gulp');




/**
 * 
 * Move Files and Folder from 
 * 'build' folder to 
 * ../tw2-*
 * 
 */

/** IMPORTANT: 
 * Change working project Folder 
 * in following "src" and "watch" */



function moveFiles(){
  return src('./tw2-02-music/build/**/*.*')
  .pipe(dest('./tw2-02'))
}

function watchTask(){
  watch('./tw2-02-music/build/**/*.*');
}

//default gulp
exports.default = series(moveFiles);