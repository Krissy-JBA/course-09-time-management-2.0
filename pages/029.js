pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      toggles: {
          q11: false,
          q12: false,
          q13: false,
          q14: false,
          q15: false
      },
      percentage1: '',
      percentage2: '',
      percentage3: '',
      popup:false,
      correct: false
    }
  },
  methods: {
    // Any page specific methods go here.
    saveInputData: function(value){
      this.$parent.saveData('toggles-q11', this.toggles.q11);
      this.$parent.saveData('toggles-q12', this.toggles.q12);
      this.$parent.saveData('toggles-q13', this.toggles.q13);
      this.$parent.saveData('toggles-q14', this.toggles.q14);
      this.$parent.saveData('toggles-q15', this.toggles.q15);
      //Percentage score
      var agrees = $('input:checked').length;
      this.percentage3 = Math.round(agrees * 10);
      this.$parent.saveData('percentage3', this.percentage3);
    },
    percentageClick: function() {
      var percentageTrue= Math.round(this.percentage1 + this.percentage2 + this.percentage3);
      console.log(percentageTrue);

      var percentageMaths1 = Math.abs(percentageTrue / 150);
      console.log(percentageMaths1);

      if (percentageMaths1 >= 0.8) {
        this.correct = true;
        this.popup = true;
      }
      else {
        this.correct = false;
        this.popup = true;
      }

    },
    redirectMe: function() {
      $('.pop-in').addClass('popOut');
      setTimeout(function(){window.location.hash = '030';},400);
      this.popup = false;
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();

    if(this.exerciseData['toggles-q11']){
      if (this.exerciseData['toggles-q11'] === 'true' || this.exerciseData['toggles-q11'] === true) {
        this.toggles.q11 = true;
      }
    }
    if(this.exerciseData['toggles-q12']){
      if (this.exerciseData['toggles-q12'] === 'true' || this.exerciseData['toggles-q12'] === true) {
        this.toggles.q12 = true;
      }
    }
    if(this.exerciseData['toggles-q13']){
      if (this.exerciseData['toggles-q13'] === 'true' || this.exerciseData['toggles-q13'] === true) {
        this.toggles.q13 = true;
      }
    }
    if(this.exerciseData['toggles-q14']){
      if (this.exerciseData['toggles-q14'] === 'true' || this.exerciseData['toggles-q14'] === true) {
        this.toggles.q14 = true;
      }
    }
    if(this.exerciseData['toggles-q15']){
      if (this.exerciseData['toggles-q15'] === 'true' || this.exerciseData['toggles-q15'] === true) {
        this.toggles.q15 = true;
      }
    }

    if(this.exerciseData['percentage']){
      this.percentage1 = parseInt(this.exerciseData['percentage']);
    }
    if(this.exerciseData['percentage2']){
      this.percentage2 = parseInt(this.exerciseData['percentage2']);
    }
    if(this.exerciseData['percentage3']){
      this.percentage3 = parseInt(this.exerciseData['percentage3']);
    }
  }


}
