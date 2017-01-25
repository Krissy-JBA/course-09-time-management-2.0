pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
        inputfield1: '',
        inputfield2:'',
        content: false,
        chosenGoal: '',
        content1: false,
        content2: false
    }
  },
  methods: {
    // Any page specific methods go here.
    saveInputField: function(value){
      this.$parent.saveData('chosenGoalAdd3', this.inputfield1);
      this.$parent.saveData('chosenGoalAdd4', this.inputfield2);
    },
    checkContent: function() {
      if (this.inputfield1.length >=1 && this.inputfield2.length >=1 ) {
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
    if(this.exerciseData['chosenGoalAdd3']){
      this.inputfield1 = this.exerciseData['chosenGoalAdd3'];
      if(this.inputfield1.length >=1 ) {
        this.content1 = true;
      }

      if(this.inputfield2.length >=1 ) {
        this.content2 = true;
      }
      if(this.inputfield1.length >=1 && this.inputfield2.length >=1) {
        this.content = true;
      }
    }
    if(this.exerciseData['chosenGoalAdd4']){
      this.inputfield2 = this.exerciseData['chosenGoalAdd4'];
      if(this.inputfield1.length >=1 ) {
        this.content1 = true;
      }

      if(this.inputfield2.length >=1 ) {
        this.content2 = true;
      }
      if(this.inputfield1.length >=1 && this.inputfield2.length >=1) {
        this.content = true;
      }
    }
    if(this.exerciseData['chosenGoal']){
      this.chosenGoal = this.exerciseData['chosenGoal'];
    }


    document.getElementById("textarea").addEventListener("paste", myFunction);
    function myFunction() {
     self.content1 = true;
     if(self.content1 == true && self.content2 == true) {
       self.content = true;
     }

    }
    document.getElementById("textarea2").addEventListener("paste", myFunction2);
    function myFunction2() {
     self.content2 = true;
     if(self.content1 == true && self.content2 == true) {
       self.content = true;
     }

    }

  }


}
