const browserSync = require('browser-sync');
browserSync({ server: '.', files: ['*.html', 'js/*.js', 'css/*.css'] });
