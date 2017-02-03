pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
        inputfield1: '',
        inputfield2: '',
        inputfield3: '',
        inputfield4: '',
        inputfield5: '',
        goal2Rewrite: '',
        goal2Rewrite2: '',
        goal2Rewrite3: '',
        goal2Rewrite4: '',
        goalBHAG2Measure: '',
        popup: false,
        edit1: false,
        edit2: false,
        edit3: false,
        edit4: false,
        edit5: false
    }
  },
  methods: {
    // Any page specific methods go here.
    saveInputField: function(value){
      this.$parent.saveData('goal2Rewrite1', this.inputfield1);
      this.goal2Rewrite = this.inputfield1;
      this.$parent.saveData('goalBHAG2Measure', this.inputfield2);
      this.goalBHAG2Measure = this.inputfield2;
      this.$parent.saveData('goal2Rewrite2', this.inputfield3);
      this.goal2Rewrite2 = this.inputfield3;
      this.$parent.saveData('goal2Rewrite3', this.inputfield4);
      this.goal2Rewrite3 = this.inputfield4;
      this.$parent.saveData('goal2Rewrite4', this.inputfield5);
      this.goal2Rewrite4 = this.inputfield5;
    },
    popup1: function() {
      this.popup = true;
      this.edit1 = true;
      this.edit2 = false;
      this.edit3 = false;
      this.edit4 = false;
      this.edit5 = false;
    },
    popup2: function() {
      this.popup = true;
      this.edit2 = true;
      this.edit1 = false;
      this.edit3 = false;
      this.edit4 = false;
      this.edit5 = false;
    },
    popup3: function() {
      this.popup = true;
      this.edit3 = true;
      this.edit2 = false;
      this.edit1 = false;
      this.edit4 = false;
      this.edit5 = false;
    },
    popup4: function() {
      this.popup = true;
      this.edit4 = true;
      this.edit2 = false;
      this.edit3 = false;
      this.edit1 = false;
      this.edit5 = false;
    },
    popup5: function() {
      this.popup = true;
      this.edit5 = true;
      this.edit2 = false;
      this.edit3 = false;
      this.edit4 = false;
      this.edit1 = false;
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
    var self = this;
    if(this.exerciseData['goal2Rewrite']){
      this.inputfield1 = this.exerciseData['goal2Rewrite'];
      this.goal2Rewrite = this.exerciseData['goal2Rewrite'];
    }
    if(this.exerciseData['goalBHAG2Measure']){
      this.inputfield2 = this.exerciseData['goalBHAG2Measure'];
      this.goalBHAG2Measure = this.exerciseData['goalBHAG2Measure'];
    }
    if(this.exerciseData['goal2Rewrite2']){
      this.inputfield3 = this.exerciseData['goal2Rewrite2'];
      this.goal2Rewrite2 = this.exerciseData['goal2Rewrite2'];
    }
    if(this.exerciseData['goal2Rewrite3']){
      this.inputfield4 = this.exerciseData['goal2Rewrite3'];
      this.goal2Rewrite3= this.exerciseData['goal2Rewrite3'];
    }
    if(this.exerciseData['goal2Rewrite4']){
      this.inputfield5 = this.exerciseData['goal2Rewrite4'];
      this.goal2Rewrite4 = this.exerciseData['goal2Rewrite4'];
    }

    /*document.getElementById("textarea").addEventListener("paste", myFunction);
    function myFunction() {
     self.content = true;
   }*/

  }


}
