'use strict';

const { task, parallel } = require('gulp');


const buildCB = (cb) => {
  return parallel(
    'clean',
    'vendorScript',
    'vendorStyle',
    'iconfont',
    'fonts',
    'spriteSVG',
    'scss',
    'js',
    'pug',
    // 'html',
    'list-pages',
  )(cb);
};


task('build', buildCB);
