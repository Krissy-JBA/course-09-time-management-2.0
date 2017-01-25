pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
        answer: '',
        content: false,


    }
  },
  methods: {
    // Any page specific methods go here.
    oneButton: function() {
      this.answer = 'Yes';
      this.$parent.saveData('did-you-have-to-change-order', this.answer);
      this.content = true;
    },
    twoButton: function() {
      this.answer = 'No';
      this.$parent.saveData('did-you-have-to-change-order', this.answer);
      this.content = true;
    },
    threeButton: function() {
      this.answer = 'A little';
      this.$parent.saveData('did-you-have-to-change-order', this.answer);
      this.content = true;
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
    var self = this;
    if(this.exerciseData['did-you-have-to-change-order']){
      this.answer = this.exerciseData['did-you-have-to-change-order'];
    }



  }


}
