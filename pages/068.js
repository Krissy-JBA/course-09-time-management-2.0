pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
    }
  },
  methods: {
    // Any page specific methods go here.
    goalTwo: function() {
      $('.pop-in').addClass('popOut');
      setTimeout(function(){window.location.hash = '069';},400);
    },
    goalThree: function() {
      $('.pop-in').addClass('popOut');
      setTimeout(function(){window.location.hash = '070';},400);
    }
  },
  ready: function() {
    // This will be fired when the page is loaded
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
  }


}
