pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      threeShow: false,
      twoShow: false,
      oneShow: false

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
