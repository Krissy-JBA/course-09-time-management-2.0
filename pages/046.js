pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
        inputfield1: '',
        inputfield2: '',
        content: false,
        content1: false,
        content2: false,

    }
  },
  methods: {
    // Any page specific methods go here.
    saveInputField1: function(value){
      this.$parent.saveData('what-did-you-learn', this.inputfield1);
      if (this.inputfield1.length >=1) {
        this.content1 = true;
      }
    },
    saveInputField2: function(value){
      this.$parent.saveData('what-could-impact-order', this.inputfield2);
      if (this.inputfield2.length >=1 ) {
        this.content2 = true;
      }
    },
    checkContent: function() {
      if (this.inputfield1.length >=1 && this.inputfield2.length >=1 ) {
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
    if(this.exerciseData['what-did-you-learn']){
      self.inputfield1 = this.exerciseData['what-did-you-learn'];

      if(this.inputfield1.length >=1 && this.inputfield2.length >=1) {
        this.content = true;
      }
      if(this.inputfield1.length >=1 ) {
        self.content1 = true;
      }
      if(this.inputfield2.length >=1 ) {
        self.content2 = true;
      }
    }
    if(this.exerciseData['what-could-impact-order']){
      self.inputfield2 = this.exerciseData['what-could-impact-order'];

      if(this.inputfield1.length >=1 && this.inputfield2.length >=1) {
        this.content = true;
      }
      if(this.inputfield1.length >=1 ) {
        this.content1 = true;
      }

      if(this.inputfield2.length >=1 ) {
        this.content2 = true;
      }
    }

    document.getElementById("textarea").addEventListener("paste", myFunction);
    function myFunction() {
     self.content1 = true;
     if (self.content1 == true && self.content2 == true) {
       self.content = true;
     }
    }
    document.getElementById("textarea2").addEventListener("paste", myFunction2);
    function myFunction2() {
     self.content2 = true;

     if (self.content1 == true && self.content2 == true) {
       self.content = true;
     }
    }

  }


}
