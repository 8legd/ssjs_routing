/**
 * A basic routing strategy that works in node.js and WebPop
 * (requires ssjs_webpop/nodify.js to be previously loaded in WebPop e.g. in app.js)
 */
exports.basic = function(req,res) {
    try {

        var route = req.path == '/' ? require('./routes/index') : require('./routes' + req.path + '/index');
        if(route[req.method]) {
            route[req.method](req,res);
        } else {
            console.log('Missing method: ' + req.method + '(req,res) for requested route: extensions/routes' + req.path + '/index.js');
        }
    } catch(e) {
        console.log('Error in route: extensions/routes' + req.path + '/index.js');
        throw e;
    }
}