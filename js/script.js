var vm = new Vue({
    el: "#main",
    data: {
        dataList: [],
    },
    created: function () {
        this.getList();
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
                    console.log(vm.dataList)
                    
                }, error: function (err) {
                    console.log(err)
                }
            });    
        }
    }
});