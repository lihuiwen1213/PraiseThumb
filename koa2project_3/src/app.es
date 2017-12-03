import Koa from 'koa';
import router from 'koa-simple-router';
import initController from './controller/initController.js';
import render from 'koa-swig';
import co from 'co';
import babel_co from 'babel-core/register';
import babel_po from 'babel-polyfill';
import server from 'koa-static';
import path from 'path';
import config from './config/config.js'

const app = new Koa();

app.use(server(config.get('staticDir')))
app.context.render = co.wrap(render({
    root: config.get('viewDir'),
    autoescape: true,
    cache: 'memory', 
    ext: 'html',
    writeBody: false
}))

initController.init(app, router);

app.listen(config.get('port'));
export default app