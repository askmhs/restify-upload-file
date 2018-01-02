import restify from 'restify';

/**
 * Creating service
 *
 * @type {*|Server}
 */
const server = restify.createServer({
    name: "restify-upload-file"
});

/**
 * Configure restify parser plugins
 */
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

/**
 * Call routes
 */
require('./src/Routes/Upload')(server);

/**
 * Starting server
 */
server.listen(3000, () => {
    console.log("Server starts at port 3000!");
});