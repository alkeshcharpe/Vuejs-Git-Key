var myVue1 = new Vue({
  el:"#myApp",
  data:{
    name:"Online Web tutor",
    playlist:"VueJs"
  },
  methods:{
    run: function(message,name) {
      return "I am running  "+message+" and " +name ;
    },

    valueAccess : function(){
      return this.name + " "+ this.playlist;
    }
  }
})
