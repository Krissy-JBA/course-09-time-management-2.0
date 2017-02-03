pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
    }
  },
  methods: {
    // Any page specific methods go here.
    openTime: function() {
      window.open('http://open.joybusinessacademy.com/uploads/exercise-files/57b5513a294a8/JBA001-time-log.pdf', "_blank");
    },
    openLog: function() {
      window.open('http://open.joybusinessacademy.com/uploads/exercise-files/57b5513a294a8/JBA001-interruptions-log.pdf'," _blank");
    }
  },
  ready: function() {
    // This will be fired when the page is loaded
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
  }


}
