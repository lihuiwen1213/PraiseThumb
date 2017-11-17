import indexController from './indexController.js'
const controllerInit = {
	init(app, router){
		app.use(router(_=>{
			_.get('/index/index',indexController.index())
			_.get('/index/update',indexController.update())
		}))
	}
}

export default controllerInit