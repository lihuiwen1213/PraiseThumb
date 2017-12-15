import css from '../css/index.css'
class PraiseButton {
    constructor() {

    }

    //添加点击事件
    clickAction() {
        axios.get('/index/update')
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}

class Thumb extends PraiseButton {
    constructor() {
        super();
    }
}
class Star extends PraiseButton {
    constructor() {
        super();
    }
}
 export {PraiseButton, Thumb, Star}