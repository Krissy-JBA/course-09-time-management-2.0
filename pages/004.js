pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      popup: false,
      oneButton: false,
      twoButton:false

    }
  },
  methods: {
    // Any page specific methods go here.
    oneButtonClick: function() {
      this.popup = true;
      this.oneButton = true;
      this.twoButton = false;
    },
    twoButtonClick: function() {
      this.popup = true;
      this.oneButton = false;
      this.twoButton = true;
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();

  }


}
