var gulp=require('gulp'),
nodemon=require('gulp-nodemon'),
bodyparser=require('body-parser');
gulp.task('default',function(){
    nodemon({
            script:'database/db.js',
            ext:'Js',
            env:{
                PORT:8000
            },
            ignore:['../node_modules/**']
    })
    .on('restart',function(){
        console.log('restarted');
    });
});