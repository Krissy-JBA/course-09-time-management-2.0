pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      inputfield1: '',
      inputfield2: '',
      inputfield3: '',
      inputfield4: '',
      inputfield5: '',
      answer: ''

    }
  },
  methods: {
    // Any page specific methods go here.
    saveInputData: function(value) {
      if ($('#test1').prop('checked')) {
        this.inputfield1 = $('#test1').val();
      }
      if ($('#test2').prop('checked')) {
        this.inputfield2 = $('#test2').val();
      }
      if ($('#test3').prop('checked')) {
        this.inputfield3 = $('#test3').val();
      }
      if ($('#test4').prop('checked')) {
        this.inputfield4 = $('#test4').val();
      }
      if ($('#test5').prop('checked')) {
        this.inputfield5 = $('#test5').val();
      }
      this.answer = this.inputfield1 + this.inputfield2 + this.inputfield3 + this.inputfield4 + this.inputfield5;
      this.$parent.saveData('getting-productive', this.answer);
    }

  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
    if(this.exerciseData['getting-productive']){
    var data1 = this.exerciseData['getting-productive'];
    var expr1= "Live";
    var expr2= "Bumped";
    var expr3= "Octopus";
    var expr4= "Friends";
    var expr5= "Ignored";
    if (data1.indexOf(expr1) !== -1) {
      $('#test1').prop('checked', true);
    }
    if (data1.indexOf(expr2) !== -1) {
      $('#test2').prop('checked', true);
    }
    if (data1.indexOf(expr3) !== -1) {
      $('#test3').prop('checked', true);
    }
    if (data1.indexOf(expr4) !== -1) {
      $('#test4').prop('checked', true);
    }
    if (data1.indexOf(expr5) !== -1) {
      $('#test5').prop('checked', true);
    }
  }

  }


}
