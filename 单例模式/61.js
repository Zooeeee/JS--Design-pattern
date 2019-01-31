//单例模式v2
let CreateDiv = (function () {
    let instance;
    let CreateDiv = function (html) {
        if(instance){
            return instance;
        }
        this.html = html;
        this.init();
        return instance = this;
    };
    CreateDiv.prototype.init = function () {
        let div = document.createElement('div');
        div.innerHTML = this.html;
        document.body.appendChild(div);
    }

})