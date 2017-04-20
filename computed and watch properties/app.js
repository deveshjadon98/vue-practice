new Vue({
        el: '#exercise',
        data: {
            counter: 0,
            timeout:5
        },
        computed :{
            result : function(){
                return this.counter < 37 ? 'Not There Yet' : 'We are here';
            }
        },
        watch : {
            counter : function(val){
                var self = this;
                setTimeout(function(){
                    self.counter = 0
                },self.timeout*1000);
            }
        }
    });