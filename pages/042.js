pageComponentry = {
  data: function() {
    return {
      goals:"",
      goalsReload1: ""

      // Any page specific data goes here.
    }
  },
  methods: {
    // Any page specific methods go here.


  },
  ready: function() {
      var self = this;
      courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();


       var self = this;
       if(this.exerciseData['goalsRearrange1']){
         self.goals = JSON.parse(this.exerciseData['goalsRearrange1']);
       }
       else {
         self.goals = JSON.parse(this.exerciseData['goals']);
       }

       var customArray = [];


      $('#sortable').sortable({
            //observe the update event...
            update: function(event, ui) {

                customArray = $("#sortable").sortable("toArray");

                var arrayLength = customArray.length;

                for (i = 0; i < arrayLength; i++){

                    var arrayGoals = customArray;

                    var currentGoal = self.goals[i].id;


                    var newIndex = arrayGoals.indexOf(currentGoal);

                    self.goals[i].orderGoal = newIndex;

                    console.log(self.goals);

                    self.$parent.saveData('goalsRearrange1', JSON.stringify(self.goals));

                    self.$parent.saveData('goalsRearrange1Reload', 'true');
                }

            }
        });



     }


}
