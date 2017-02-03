pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
        inputfield1: '',
        content: false
    }
  },
  methods: {
    // Any page specific methods go here.
    saveInputField: function(value){
      this.$parent.saveData('goal2', this.inputfield1);
    },
    checkContent: function() {
      if (this.inputfield1.length >=1 ) {
        this.content = true;
      }
      else {
        this.content = false;
      }
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
    var self = this;
    if(this.exerciseData['goal2']){
      this.content = true;
      this.inputfield1 = this.exerciseData['goal2'];
    }

    document.getElementById("textarea").addEventListener("paste", myFunction);
    function myFunction() {
     self.content = true;
    }

  }


}
