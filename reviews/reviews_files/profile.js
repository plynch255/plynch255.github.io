function validateForm()
{
  var errors = "";

  var form = document.getElementById( "requestForm" );

  // First Name
  if ( form.firstName.value.replace(/^\s+|\s+$/g, '') == "" )
    errors += "\nFirst Name is required";
  // Last Name
  if ( form.lastName.value.replace(/^\s+|\s+$/g, '') == "" )
    errors += "\nLast Name is required";
  // Phone
  if ( form.homePhone.value.replace(/^\s+|\s+$/g, '') == "" && form.mobilePhone.value.replace(/^\s+|\s+$/g, '') == "" )
    errors += "\nA Phone Number is required";

  if ( form.captcha_response.value === "none" ) {
    errors += "\nCan't tell you are not a robot. Please enter the reCaptcha";
  }

  if ( errors != "" ) {
    alert( "Please correct the following before submitting your request:" + errors );
  }
  else {
    form.submit();
  }

}
