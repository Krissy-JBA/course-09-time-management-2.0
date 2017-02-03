pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      goals:[],
      goal1: false,
      goal2: false,
      goal3: false,
      chosenGoal: '',
      goalrecall1: '',
      goalrecall2: '',
      goalrecall3: ''
    }
  },
  methods: {
    // Any page specific methods go here.
    selectMe: function() {
      this.goal1 = true;
      this.goal2 = false;
      this.goal3 = false;
      this.chosenGoal = this.goals[0].name;
      this.$parent.saveData('chosenGoal', this.chosenGoal);
    },
    selectMe2: function() {
      this.goal2 = true;
      this.goal1 = false;
      this.goal3 = false;
      this.chosenGoal = this.goals[1].name;
      this.$parent.saveData('chosenGoal', this.chosenGoal);
    },
    selectMe3: function() {
      this.goal3 = true;
      this.goal2 = false;
      this.goal1 = false;
      this.chosenGoal = this.goals[2].name;
      this.$parent.saveData('chosenGoal', this.chosenGoal);
    }
  },
  ready: function() {
    // This will be fired when the page is loaded
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
    var self = this;
    if(this.exerciseData['goals']){
      this.goals = JSON.parse(this.exerciseData['goals']);
      this.goalrecall1 = self.goals[0].name;
      this.goalrecall2 = self.goals[1].name;
      this.goalrecall3 = self.goals[2].name;
    }
    if(this.exerciseData['chosenGoal']){
      this.chosenGoal = (this.exerciseData['chosenGoal']);
      if (self.chosenGoal == self.goalrecall1) {
        self.goal1 = true;
      }
      else if (self.chosenGoal == self.goalrecall2) {
        self.goal2 = true;
      }
      if (self.chosenGoal == self.goalrecall3) {
        self.goal3 = true;
      }
    }
  }


}
