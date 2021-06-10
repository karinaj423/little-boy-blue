/*
Version: 1.0
Author: your name
Author URL: your site
License: (if other than below)
This is a FREE script and is dual licensed under the following:
http://www.opensource.org/licenses/mit-license.php | http://www.gnu.org/licenses/gpl.html
Aside from these comments, you may modify and distribute this file as you please. Have fun!
*/
$(document).ready(function(){
	$('#jForm').validate({
		rules: {
			firstName: {
				required: true,
				rangelength: [2, 60]
			},
			lastName: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true,
				phoneUS: true
			},
			folks: {
				required: true,
			},
			month: {
				required: true,
			},
			day: {
				required: true
			},
			time: {
				required: true,
			},
		}, 
		messages: {
			firstName: {
				required: "*Enter your first name",
				rangelength: "Must be at least two letters"
			},
			lastName: {
				required: "*Enter your last name"
			},
			email: {
				required: "*Enter your email address",
				email: "*Enter a valid email address"
			},
			phone: {
				required: "*Enter your phone number",
				phoneUS: "*Enter a valid 10-digit phone number"
			},
			folks: {
				required: "*Choose an option"
			},
			month: {
				required: "*Choose an option"
			},
			day: {
				required: "*Choose an option"
			},
			time: {
				required: "*Choose an option"
			},
		}, 
		errorPlacement: function(error, element) {
            if(element.is(":radio") || element.is(":checkbox")) {
                error.appendTo(element.parent());
            } else {
                error.insertAfter(element);
            }//end else
        }
	});
});
