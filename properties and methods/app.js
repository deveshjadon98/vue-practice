new Vue({
    el : '#exercise',
    data:{
        name : 'Devesh Jadon',
        age : 23,
        link : 'https://i.stack.imgur.com/DpE8b.jpg?s=328&g=1'
    },
    methods : {
        computeAge : function(){
            return this.age*3;
        },
        randomNumber : function(max,min){
            var randNum = (Math.random() * (max - min)) + min;
            return randNum;
        }

    }
});