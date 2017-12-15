import indexController from './indexController.js'
const controllerInit = {
	init(app, router){
		app.use(router(_=>{
			_.get('/index/index',indexController.index())
			_.get('/index/update',indexController.update())
			_.get('/index/star',indexController.star())
			_.get('/index/praise',indexController.praise())
                              _.get('/index/dev',indexController.advertisement())
		}))
	}
}

export default controllerInit