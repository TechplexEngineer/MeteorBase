/* global AutoForm, $ */

// Based on aldeed:autoform-bs-datepicker: https://github.com/aldeed/meteor-autoform-bs-datepicker

AutoForm.addInputType("bootstrap-local-datepicker", {
  template: "afBootstrapLocalDatepicker",
  valueOut: function () {
    if (this.val()) {
      var val = this.datepicker('getDate');
      return (val instanceof Date) ? val : this.val();
    }
  },
  valueConverters: {
    "string": function (val) {
      return (val instanceof Date) ? AutoForm.Utility.dateToDateStringUTC(val) : val;
    },
    "stringArray": function (val) {
      if (val instanceof Date) {
        return [AutoForm.Utility.dateToDateStringUTC(val)];
      }
      return val;
    },
    "number": function (val) {
      return (val instanceof Date) ? val.getTime() : val;
    },
    "numberArray": function (val) {
      if (val instanceof Date) {
        return [val.getTime()];
      }
      return val;
    },
    "dateArray": function (val) {
      if (val instanceof Date) {
        return [val];
      }
      return val;
    }
  }
});

Template.afBootstrapLocalDatepicker.helpers({
  atts: function addFormControlAtts() {
    var atts = _.clone(this.atts);
    // Add bootstrap class
    atts = AutoForm.Utility.addClass(atts, "form-control");
    delete atts.datePickerOptions;
    return atts;
  }
});

Template.afBootstrapLocalDatepicker.rendered = function () {
  var $input = this.data.atts.buttonClasses ? this.$('.input-group.date') : this.$('input');
  var data = this.data;

  // instanciate datepicker
  $input.datepicker(data.atts.datePickerOptions);

  // set and reactively update values
  this.autorun(function () {
    var data = Template.currentData();

    // set field value
    if (data.value instanceof Date) {
      $input.datepicker('setDate', data.value);
    } else if (typeof data.value === "string") {
      $input.datepicker('update', data.value);
    }

    // set start date if there's a min in the schema
    if (data.min instanceof Date) {
      $input.datepicker('setStartDate', data.min);
    }

    // set end date if there's a max in the schema
    if (data.max instanceof Date) {
      $input.datepicker('setEndDate', data.max);
    }
  });
};

Template.afBootstrapLocalDatepicker.destroyed = function () {
  var $input = this.data.atts.buttonClasses ? this.$('.input-group.date') : this.$('input');
  $input.datepicker('remove');
};