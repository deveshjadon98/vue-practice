new Vue({
  el: '#exercise',
  data: {
    effect : true
  },
  methods: {
    startEffect: function() {
      setInterval(function(){
        this.effect = !this.effect;
      }.bind(this),2000);
    }
  }
});
