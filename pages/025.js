pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      button1: false,
      button2: false,
      button3: false
    }
  },
  methods: {
    // Any page specific methods go here.
  },
  ready: function() {
    // This will be fired when the page is loaded
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
  }


}
