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
      this.$parent.saveData('quickfireIdeas1', this.answer);
    },
    twoButton: function() {
      this.whatThink = true;
      this.answer = 'Thats not for me';
      this.$parent.saveData('quickfireIdeas1', this.answer);
      this.popup = true;
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
    if(this.exerciseData['quickfireIdeas1']){
      this.answer = this.exerciseData['quickfireIdeas1'];
      this.whatThink = true;
    }

  }


}
