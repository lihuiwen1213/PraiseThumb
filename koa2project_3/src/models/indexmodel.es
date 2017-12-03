import rpA from 'request-promise'
class indexModel{
	constructor(ctx){
		this.ctx = ctx;
	}
	updataNum(){
		const options  = {
			uri: 'http://localhost/PraiseThumb/php/updata.php',
			method: 'GET'
		}
		return new Promise((resolve, reject)=>{
			rpA(options).then(function (result){
				const info = JSON.parse(result);
				if(info){
					resolve({data:info.result});
				}else{
					reject({});
				}
			})
		})
	}
}

export default indexModel