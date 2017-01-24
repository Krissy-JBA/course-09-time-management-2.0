pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
        inputfield1: '',
        inputfield2: '',
        inputfield3: '',
        content: false,
        content1: false,
        content2: false,
        content3: false,
        goals: []
    }
  },
  methods: {
    // Any page specific methods go here.
    saveInputField: function(value){
      this.goals = [
        {name:this.inputfield1,
          orderGoal:1,
          id: 'goal1'
        },
        {name:this.inputfield2,
          orderGoal:2,
          id: 'goal2'
        },
        {name:this.inputfield3,
          orderGoal:3,
          id: 'goal3'
        },
      ]
      this.$parent.saveData('goals', JSON.stringify(this.goals));
      console.log(this.goals);
    },
    checkContent: function() {
      if (this.inputfield1.length >=1 && this.inputfield2.length >=1 && this.inputfield3.length >=1) {
        this.content = true;
      }
      else {
        this.content = false;
      }
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
    var self = this;
    if(this.exerciseData['goals']){
      self.goals = JSON.parse(this.exerciseData['goals']);
      self.inputfield1 = self.goals[0].name;
      self.inputfield2 = self.goals[1].name;
      self.inputfield3 = self.goals[2].name;

      if(this.inputfield1.length >=1 && this.inputfield2.length >=1 && this.inputfield3.length >=1) {
        this.content = true;
      }
      if(this.inputfield1.length >=1 ) {
        self.content1 = true;
      }
      if(this.inputfield2.length >=1 ) {
        self.content2 = true;
      }
      if(this.inputfield3.length >=1 ) {
        self.content3 = true;
      }
    }

    document.getElementById("textarea").addEventListener("paste", myFunction);
    function myFunction() {
     self.content1 = true;
     console.log(self.content1);
     if (self.content1 == true && self.content2 == true && self.content3 == true) {
       self.content = true;
     }
    }
    document.getElementById("textarea2").addEventListener("paste", myFunction2);
    function myFunction2() {
     self.content2 = true;
     console.log(self.content2);
     if (self.content1 == true && self.content2 == true && self.content3 == true) {
       self.content = true;
     }
    }
    document.getElementById("textarea3").addEventListener("paste", myFunction3);
    function myFunction3() {
     self.content3 = true;
     console.log(self.content3);
     if (self.content1 == true && self.content2 == true && self.content3 == true) {
       self.content = true;
     }
   }


  }


}
