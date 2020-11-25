var vm = new Vue({
    el: "#main",
    data: {
        chTitle: '',
        chTitleError: '',
        chTitleErrMsg: '',
        enTitle: '',
        enTitleError: '',
        enTitleErrMsg: '',
        intro: '',
        introError: '',
        introErrMsg: '',
        dataList: [],
    },
    created: function () {
        this.getList();
    },
    watch: {
        chTitle: function () {
            if (this.chTitle.length < 1) {
                this.chTitleError = true;
                this.chTitleErrMsg = 'Required';
            }
            else if (this.chTitle.length > 50) {
                this.chTitleError = true;
                this.chTitleErrMsg = '請勿超過50個字';
            }
            else {
                this.chTitleError = false;
            }
        },
        enTitle: function () {
            var enText = this.enTitle.replace(/[^A-Za-z0-9\s]/g,"").replace(/\s*/g,"");
            console.log(enText)
            if (enText.length < 1) {
                this.enTitleError = true;
                this.enTitleErrMsg = 'Required';
            }
            else if (enText.length > 100) {
                this.enTitleError = true;
                this.enTitleErrMsg = '請勿超過100個字';
            }
            else {
                this.enTitleError = false;
            }
        },
        intro: function () {
            var introText = this.intro.replace(/\s*/g,""); 
            //console.log(introText.length)
            var text = this.intro.indexOf('Intro');
            if (text === -1) {
                this.introError = true;
                this.introErrMsg = 'Need to start with Intro';
            }
            else if (introText.length < 1) {
                this.introError = true;
                this.introErrMsg = 'Required';
            }
            else if (introText.length < 10) {
                this.introError = true;
                this.introErrMsg = 'String length must between 10 to 255';
            }
            else if (introText.length > 255) {
                this.introError = true;
                this.introErrMsg = 'String length must between 10 to 255';
            }
            else {
                this.introError = false;
            }
        }
    },
    methods: {
        getList: function () {
            var vm = this;
            var url = "https://cors-anywhere.herokuapp.com/https://hw-web-api.herokuapp.com/api/movie/list.php";
            $.ajax({
                url: url,
                type: "GET",
                headers: {
                    Accept: "application/json; charset=utf-8"
                },          
                dataType: "json",
                async: true,
                success: function (result) {
                    vm.dataList = result;
                    //console.log(vm.dataList)
                    
                }, error: function (err) {
                    console.log(err)
                }
            });    
        }
    }
});