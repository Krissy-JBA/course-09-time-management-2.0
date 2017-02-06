pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      textOne: false,
      textTwo: false,
      textThree: false,
      popup: false
    }
  },
  methods: {
    // Any page specific methods go here.
    button2: function() {
      this.popup = true;
      this.textOne = true;
      this.textTwo = false;
      this.textThree = false;
    },
    button1: function() {
      this.popup = true;
      this.textOne = false;
      this.textTwo = true;
      this.textThree = false;
    },
    button3: function() {
      this.popup = true;
      this.textOne = false;
      this.textTwo = false;
      this.textThree = true;
    }
  },
  ready: function() {
    // This will be fired when the page is loaded
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
  }


}
