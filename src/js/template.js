var this_js_script = $('script[id=js-template]'); // or better regexp to get the file name..

var var_id = this_js_script.attr('data-id');   
if (typeof var_id === "undefined" ) {
   var var_id = 'id tidak ada ';
}
alert(var_id); // to view the variable value

var var_bodyid = $('body').attr('data-clientid');   
if (typeof var_bodyid === "undefined" ) {
   var var_bodyid = 'some_default_value';
}
alert(var_bodyid); // to view the variable value
