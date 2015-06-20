var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build:production', function(callback) {
  runSequence('delete', 'html:production',
  [
    'sass',
    'images'
  ],
  [
    'optimize:css',
    'optimize:images'
  ],
  'inlinesource:production',
  'revision',
  'rev:collect',
  callback);
});
