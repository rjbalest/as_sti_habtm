jQuery(function($){
  if (typeof($.datepicker) === 'object') {
    $.datepicker.regional['en'] = {"nextText":"Next","changeMonth":true,"prevText":"Previous","showMonthAfterYear":false,"closeText":"Close","monthNamesShort":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"weekHeader":"Wk","firstDay":0,"changeYear":true,"isRTL":false,"dayNames":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"dateFormat":"yy-mm-dd","dayNamesMin":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"dayNamesShort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"currentText":"Today","monthNames":["January","February","March","April","May","June","July","August","September","October","November","December"]};
    $.datepicker.setDefaults($.datepicker.regional['en']);
  }
  if (typeof($.timepicker) === 'object') {
    $.timepicker.regional['en'] = {"ampm":false,"secondText":"Seconds","minuteText":"Minute","dateFormat":"D, dd M yy ","timeFormat":"hh:mm:ss","hourText":"Hour"};
    $.timepicker.setDefaults($.timepicker.regional['en']);
  }
});
$(document).ready(function() {
  $('input.date_picker').live('focus', function(event) {
    var date_picker = $(this);
    if (typeof(date_picker.datepicker) == 'function') {
      if (!date_picker.hasClass('hasDatepicker')) {
        date_picker.datepicker();
        date_picker.trigger('focus');
      }
    }
    return true;
  });
  $('input.datetime_picker').live('focus', function(event) {
    var date_picker = $(this);
    if (typeof(date_picker.datetimepicker) == 'function') {
      if (!date_picker.hasClass('hasDatepicker')) {
        date_picker.datetimepicker();
        date_picker.trigger('focus');
      }
    }
    return true;
  });
});