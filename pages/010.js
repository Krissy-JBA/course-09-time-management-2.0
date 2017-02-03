pageComponentry = {
  data: function() {
    return {
        howOften: 2
      }
   },
  methods: {
    // Any page specific methods go here.
  },
  ready: function() {
    courseFeatureJBA.flexySpeckCheck();
    courseFeatureJBA.transitionIn();

    var self = this;
     if (this.exerciseData['howOften.interrupted']) {
         this.howOften = this.exerciseData['howOften.interrupted'];
     }

    $(function() {
      $("#jba-horizontal-slider").slider({
          value: self.howOften,
          min: 0,
          max: 4,
          orientation: "horizontal",
          range: "min",
          stop: function(event, ui) {
              self.$parent.saveData('howOften.interrupted', ui.value);
              console.log(ui.value)
          },
          animate: true
      });
    });


  }
}
