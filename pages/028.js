pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      toggles: {
          q1: false,
          q2: false,
          q3: false,
          q4: false,
          q5: false
      }
    }
  },
  methods: {
    // Any page specific methods go here.
    saveInputData: function(value){
      this.$parent.saveData('toggles-q1', this.toggles.q1);
      this.$parent.saveData('toggles-q2', this.toggles.q2);
      this.$parent.saveData('toggles-q3', this.toggles.q3);
      this.$parent.saveData('toggles-q4', this.toggles.q4);
      this.$parent.saveData('toggles-q5', this.toggles.q5);
      //Percentage score
      var agrees = $('input:checked').length;
      var percentage = Math.round(agrees * 10);
      this.$parent.saveData('percentage', percentage);
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();

    if(this.exerciseData['toggles-q1']){
      if (this.exerciseData['toggles-q1'] === 'true' || this.exerciseData['toggles-q1'] === true) {
        this.toggles.q1 = true;
      }
    }
    if(this.exerciseData['toggles-q2']){
      if (this.exerciseData['toggles-q2'] === 'true' || this.exerciseData['toggles-q2'] === true) {
        this.toggles.q2 = true;
      }
    }
    if(this.exerciseData['toggles-q3']){
      if (this.exerciseData['toggles-q3'] === 'true' || this.exerciseData['toggles-q3'] === true) {
        this.toggles.q3 = true;
      }
    }
    if(this.exerciseData['toggles-q4']){
      if (this.exerciseData['toggles-q4'] === 'true' || this.exerciseData['toggles-q4'] === true) {
        this.toggles.q4 = true;
      }
    }
    if(this.exerciseData['toggles-q5']){
      if (this.exerciseData['toggles-q5'] === 'true' || this.exerciseData['toggles-q5'] === true) {
        this.toggles.q5 = true;
      }
    }


  }


}
