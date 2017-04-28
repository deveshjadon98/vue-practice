new Vue({
  el: '#exercise',
  data: {
    effect : true,
    newClasses : [],
    width:100,
    color:'blue',
    progressWidth : 5
  },
  computed: {
    myStyle : function(){
      return {
        backgroundColor : this.color,
        width : this.width+'px'
      }
    },
    myColor : function(){
      return {
        backgroundColor: this.color
      }
    },
    myWidth : function(){
      return {
        width : this.progressWidth+'px'
      }
    }
  },
  methods: {
    startEffect: function() {
      setInterval(function(){
        this.effect = !this.effect;
      }.bind(this),2000);
    },
    addClasses : function(){
      this.newClasses.push(event.target.value);
    },
    startProgress : function(){
      setInterval(function(){
        this.progressWidth = this.progressWidth + 10;
      }.bind(this),500);
    }
  }
});
