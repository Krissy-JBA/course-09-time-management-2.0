pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      popup:false,
      chosenGoalAdd1: '',
      chosenGoalAdd2: '',
      chosenGoalAdd3: '',
      chosenGoalAdd4: '',
      chosenGoalAdd5: ''
    }
  },
  methods: {
    // Any page specific methods go here.
  },
  ready: function() {
    // This will be fired when the page is loaded
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
    if(this.exerciseData['chosenGoalAdd1']){
      this.chosenGoalAdd1 = this.exerciseData['chosenGoalAdd1'];
    }
    if(this.exerciseData['chosenGoalAdd2']){
      this.chosenGoalAdd2= this.exerciseData['chosenGoalAdd2'];
    }
    if(this.exerciseData['chosenGoalAdd3']){
      this.chosenGoalAdd3 = this.exerciseData['chosenGoalAdd3'];
    }
    if(this.exerciseData['chosenGoalAdd4']){
      this.chosenGoalAdd4 = this.exerciseData['chosenGoalAdd4'];
    }
    if(this.exerciseData['chosenGoalAdd5']){
      this.chosenGoalAdd5 = this.exerciseData['chosenGoalAdd5'];
    }
  }


}
