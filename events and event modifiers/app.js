new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods : {
            buttonClicked : function(){
                alert('Stop clicking me :-|');
            },
            saveValue : function(){
                this.value = event.target.value;
            }
        }
    });