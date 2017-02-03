pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      popup: false,
      doPop: false,
      delPop: false,
      delegPop: false,
      decPop: false
    }
  },
  methods: {
    // Any page specific methods go here.
    doClick: function() {
      this.popup = true;
      this.doPop = true;
      this.delPop = false;
      this.delegPop= false;
      this.decPop = false;
    },
    decClick: function() {
      this.popup = true;
      this.doPop = false;
      this.delPop = false;
      this.delegPop= false;
      this.decPop = true;
    },
    delegClick: function() {
      this.popup = true;
      this.doPop = false;
      this.delPop = false;
      this.delegPop= true;
      this.decPop = false;
    },
    delClick: function() {
      this.popup = true;
      this.doPop = false;
      this.delPop = true;
      this.delegPop= false;
      this.decPop = false;
    }
  },
  ready: function() {
    // This will be fired when the page is loaded
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
  }


}
