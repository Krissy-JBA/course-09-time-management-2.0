pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      answer: '',
      popup: false
    }
  },
  methods: {
    // Any page specific methods go here.
    oneButton: function() {
      this.whatThink = true;
      this.answer = 'Great idea';
      this.$parent.saveData('quickfireIdeas2', this.answer);
    },
    twoButton: function() {
      this.whatThink = true;
      this.answer = 'Thats not for me';
      this.$parent.saveData('quickfireIdeas2', this.answer);
      this.popup = true;
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
    if(this.exerciseData['quickfireIdeas2']){
      this.answer = this.exerciseData['quickfireIdeas2'];
      this.whatThink = true;
    }

  }


}
