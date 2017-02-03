pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
        inputfield1: '',
        inputfield2: '',
        inputfield3: '',
        inputfield4: '',
        inputfield5: '',
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
      this.$parent.saveData('newGoal2part1', this.inputfield1);
      this.goal2Rewrite = this.inputfield1;
      this.$parent.saveData('newGoal2part2', this.inputfield2);
      this.goalBHAG2Measure = this.inputfield2;
      this.$parent.saveData('newGoal2part3', this.inputfield3);
      this.goal2Rewrite2 = this.inputfield3;
      this.$parent.saveData('newGoal2part4', this.inputfield4);
      this.goal2Rewrite3 = this.inputfield4;
      this.$parent.saveData('newGoal2part5', this.inputfield5);
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
    if(this.exerciseData['newGoal2part1']){
      this.inputfield1 = this.exerciseData['newGoal2part1'];
    }
    if(this.exerciseData['newGoal2part2']){
      this.inputfield2 = this.exerciseData['newGoal2part2'];
    }
    if(this.exerciseData['newGoal2part3']){
      this.inputfield3 = this.exerciseData['newGoal2part3'];
    }
    if(this.exerciseData['newGoal2part4']){
      this.inputfield4 = this.exerciseData['newGoal2part4'];
    }
    if(this.exerciseData['newGoal2part5']){
      this.inputfield5 = this.exerciseData['newGoal2part5'];
    }



  }


}
