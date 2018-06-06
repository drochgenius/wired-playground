require('browser-sync')({
    server: {
        baseDir: '.',
        directory: true
    },
    files: ['**/*.html', '**/*.js', '**/*.css']
});
