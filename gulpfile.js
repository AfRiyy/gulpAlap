const { src,dest,watch} = require('gulp');

function streamHtml() {
    return src('src/*.html').pipe(dest('public/'));
}
function streamJs() {
    return src('src/js/*.js').pipe(dest('public/js'));
}
function streamJquery() {
    return src('node_modules/jquery/dist/jquery.min.js').pipe(dest('public/lib'));
}
exports.html = streamHtml;
exports.jquery = streamJquery;
exports.default = function(){
    watch('src/*.html',streamHtml);
    watch('src/js/*.js',streamJs);
}