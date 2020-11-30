Vue.component('movie', {
	props: ['item'],
	template: '<li class="list-group-item">\
                <h3>{{item.ch_name}}</h3>\
                <h4>{{item.eng_name}}</h4>\
                <div class="movie-intro">{{item.intro}}</div>\
            </li>'
})

var app = new Vue({
    el: '#app',
    data: {
        chName: '',
        enName: '',
        intro: '',
        chNameError: '',
        chNameErrMsg: '',
        enNameError: '',
        enNameErrMsg: '',
        introError: '',
        introErrMsg: '',
        movie_item: [],
        resetting : false
    },
    mounted(){
        const content = this;
        const apiUrl = "https://cors-anywhere.herokuapp.com/https://hw-web-api.herokuapp.com/api/movie/list.php";
        axios.get(apiUrl, {})
            .then((res) => { 
                content.movie_item = res.data; 
            })
            .catch((error) => { 
                console.error(error); 
            });

    },
    watch: {
        chName: function () {
            if (this.resetting){
                return;
            }
            if (this.chName.length === 0) {
                this.chNameError = true;
                this.chNameErrMsg = '必填';
            } else if (this.chName.length > 50) {
                this.chNameError = true;
                this.chNameErrMsg = '請勿超過50個字';
            } else {
                this.chNameError = false;
            }
        },
        enName: function () {
            if (this.resetting){
                return;
            }
            let enText = /^[^@\/\'\\\"#$%&\^\*]+$/; 
            if (this.enName.length === 0) {
                this.enNameError = true;
                this.enNameErrMsg = '必填';
            } else if (!enText.test(this.enName)) {
                this.enNameError = true;
                this.enNameErrMsg = '不能含有$, %, ^, &, *...等特殊符號';
            } else if (this.enName.length > 100) {
                this.enNameError = true;
                this.enNameErrMsg = '請勿超過100個字';
            } else {
                this.enNameError = false;
            }
        },
        intro: function () {
            if (this.resetting){
                return;
            }
            let introText = this.intro.replace(/\s*/g,""); //除去空白格
            let text = /^Intro/; //字串開頭必須符合Intro	
            if (!text.test(this.intro)) {
                this.introError = true;
                this.introErrMsg = '必須以Intro為開頭';
            } else if (introText.length === 0) {
                this.introError = true;
                this.introErrMsg = '必填';
            } else if (introText.length < 10 || introText.length > 255) {
                this.introError = true;
                this.introErrMsg = '字數需介於10~255之間';
            } else {
                this.introError = false;
            }
        }
    },
    methods: {
        Insert() {
            let newItem = {
                ch_name: this.chName,
                eng_name: this.enName,
                intro: this.intro,
            }
            if(this.chName === "" ) {
                this.chNameError = true; this.chNameErrMsg = '請輸入中文標題';
            }
            if(this.enName === "" ) {
                this.enNameError = true; this.enNameErrMsg = '請輸入英文標題';
            }
            if( this.intro === "") {
                this.introError = true; this.introErrMsg = '請輸入簡介';
            }
            
            if(this.chNameError === true || this.enNameError === true || this.introError === true){
                return false;
            } else { 
                this.movie_item.unshift(newItem); //將newItem的值新增到列表中
                this.empty(); //清空輸入的資料
            }
        },
        empty() {
            this.resetting = true;
            this.chName = '';
            this.enName = '';
            this.intro = '';
            //使用$nextTick回調來獲取更新後的 DOM
            this.$nextTick(()=>{
                this.resetting = false;
            })
        }
    },
})