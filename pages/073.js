pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      stepOnePop: false,
      stepTwoPop: false,
      stepThreePop: false,
      stepFourPop: false,
      stepFivePop: false,
      popup: false

    }
  },
  methods: {
    // Any page specific methods go here.
    stepOne: function() {
      this.popup = true;
      this.stepOnePop = true;
      this.stepTwoPop = false;
      this.stepThreePop = false;
      this.stepFourPop = false;
      this.stepFivePop = false;
    },
    stepTwo: function() {
      this.popup = true;
      this.stepOnePop = false;
      this.stepTwoPop = true;
      this.stepThreePop = false;
      this.stepFourPop = false;
      this.stepFivePop = false;
    },
    stepThree: function() {
      this.popup = true;
      this.stepOnePop = false;
      this.stepTwoPop = false;
      this.stepThreePop = true;
      this.stepFourPop = false;
      this.stepFivePop = false;
    },
    stepFour: function() {
      this.popup = true;
      this.stepOnePop = false;
      this.stepTwoPop = false;
      this.stepThreePop = false;
      this.stepFourPop = true;
      this.stepFivePop = false;
    },
    stepFive: function() {
      this.popup = true;
      this.stepOnePop = false;
      this.stepTwoPop = false;
      this.stepThreePop = false;
      this.stepFourPop = false;
      this.stepFivePop = true;
    },
  },
  ready: function() {
    // This will be fired when the page is loaded
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
  }


}
