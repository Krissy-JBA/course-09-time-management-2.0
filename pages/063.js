pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
        inputfield1: '',
        content: false,
        goal2: ''
    }
  },
  methods: {
    // Any page specific methods go here.
    saveInputField: function(value){
      this.$parent.saveData('goalBHAG2Measure', this.inputfield1);
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
    if(this.exerciseData['goalBHAG2']){
       this.goal2 = this.exerciseData['goalBHAG2'];
    }
    if(this.exerciseData['goalBHAG2Measure']){
      this.content = true;
      this.inputfield1= this.exerciseData['goalBHAG2Measure'];
    }

    document.getElementById("textarea").addEventListener("paste", myFunction);
    function myFunction() {
     self.content = true;
    }

  }


}
