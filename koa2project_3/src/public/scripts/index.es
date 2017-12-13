import css from '../css/index.css'
class PraiseButton {
    constructor(num, element) {

    }

    //添加点击事件
    clickAction() {
        axios.get('/index/update',{headers: {'lihuiwen': 'lihuiwen'}})
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}

class Thumb extends PraiseButton {
    constructor(num, element) {
        super(num, element);
    }
}
export default PraiseButton