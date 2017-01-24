pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      inputfield1: '',
      inputfield2: '',
      inputfield3: '',
      inputfield4: '',
      inputfield5: '',
      inputfield6: '',
      inputfield7: '',
      inputfield8: '',
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
      if ($('#test6').prop('checked')) {
        this.inputfield6 = $('#test6').val();
      }
      if ($('#test7').prop('checked')) {
        this.inputfield7 = $('#test7').val();
      }
      if ($('#test8').prop('checked')) {
        this.inputfield8 = $('#test8').val();
      }
      this.answer = this.inputfield1 + this.inputfield2 + this.inputfield3 + this.inputfield4 + this.inputfield5 + this.inputfield6 + this.inputfield7 + this.inputfield8;
      this.$parent.saveData('pardon-the-interruption-time-thieves', this.answer);
    }

  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
    if(this.exerciseData['pardon-the-interruption-time-thieves']){
    var data1 = this.exerciseData['pardon-the-interruption-time-thieves'];
    var expr1= "Boss";
    var expr2= "Mate";
    var expr3= "Other";
    var expr4= "Coffee";
    var expr5= "Facebook";
    var expr6= "Make";
    var expr7= "Asking";
    var expr8= "Weekend";
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
    if (data1.indexOf(expr6) !== -1) {
      $('#test6').prop('checked', true);
    }
    if (data1.indexOf(expr7) !== -1) {
      $('#test7').prop('checked', true);
    }
    if (data1.indexOf(expr8) !== -1) {
      $('#test8').prop('checked', true);
    }
  }

  }


}
