function validateForm() {
    var name = document.forms["myForm"]["dname"].value.trim();
    var dlastname = document.forms["myForm"]["dlastname"].value.trim();
    //----------------------------------------------------
    var email = document.forms["myForm"]["demail"].value.trim();
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    //--------------------------------------------------
    var pass = document.forms["myForm"]["dpass"].value.trim();
    var rtpass = document.forms["myForm"]["drtpass"].value.trim();
    var passw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
    //console.log(pass.match(passw));
    //---------------------------------------------------
    var country = document.getElementById("sel1").selectedIndex;
    //var _country =document.getElementById("sel1").selectedItem;
   
    //---------------------------------------------------
    var male = document.getElementById('idmale').checked;
    var female = document.getElementById('idfemale').checked;
    console.log('aff: '+ male);
    //---------------------------------------------------
    if (name == null || name == ""||dlastname == null || dlastname == ""||email == null || email == ""||country == null || country == ""||pass == null || pass == ""||rtpass == null || rtpass == "") {
        alert("Please enter enough");
        return false;    
    }else if(name.length<=6){
        alert("Name must than 6 character");
        return false;
    }else if(atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length){
        alert("Not a valid e-mail address");
        return false;
    }else if(!pass.match(passw)|| pass !== rtpass){
        alert("Not a valid password or return password");
        return false;
    }else if(!pass.match(passw)|| pass !== rtpass){
        alert("Not a valid password or return password");
        return false;
    }else if((male === false)&&(female===false)){
        alert("Not a check gender");
        return false;
    }else{
        alert('Submit success');
//         var pass = document.forms["myForm"]["dpass"].value;
        //var nameinfo = document.getElementById('nameinfo').innerHTML = 'Your name is: '+name+' '+dlastname;
        //var emailinfo = document.getElementById('emailinfo').innerHTML = 'Your email is: '+email;
//        if(male === true){
//            var genderinfo = document.getElementById('genderinfo').innerHTML = 'Your gender is: male';
//        }else{
//            var genderinfo = document.getElementById('genderinfo').innerHTML = 'Your gender is: female';
//        }
       
        var newtab = window.open("",'Your name is: ' +name+ ' ' +dlastname+ '<br/>'+ 'Email: ' + email+ '<br>' + 'Country: '+country,"width=500,height=300,toolbar=0"); 
        newtab.document.write("<p>" + newtab.name + "</p>");
        //alert(pass);
    }
}
function autoCheckname() {
   var name = document.forms["myForm"]["dname"].value.trim();
   if (name.length <= 6) {
      document.getElementById("ckname").innerHTML = '&#10008';
      document.getElementById("ckname").style.color = "#FF0000";
   }
   else {
      document.getElementById("ckname").innerHTML = '&#10004;';
      document.getElementById("ckname").style.color = "#0000CD";
   }
}
function autoChecklastname() {
   var lastname = document.forms["myForm"]["dlastname"].value.trim();
   if (lastname.length < 2) {
      document.getElementById("cklastname").innerHTML = '&#10008';
      document.getElementById("cklastname").style.color = "#FF0000";
   }
   else {
      document.getElementById("cklastname").innerHTML = '&#10004;';
      document.getElementById("cklastname").style.color = "#0000CD";
   }
}
function autoCheckemail() {
    var email = document.forms["myForm"]["demail"].value.trim();
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
   if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
      document.getElementById("ckemail").innerHTML = '&#10008';
      document.getElementById("ckemail").style.color = "#FF0000";
   }
   else {
      document.getElementById("ckemail").innerHTML = '&#10004;';
      document.getElementById("ckemail").style.color = "#0000CD";
   }
}
function autoCheckpass() {
   var pass = document.forms["myForm"]["dpass"].value.trim();
   var rtpass = document.forms["myForm"]["drtpass"].value.trim();
   var passw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
   if (!pass.match(passw)) {
      document.getElementById("ckpass").innerHTML = '&#10008';
      document.getElementById("ckpass").style.color = "#FF0000";
   }
   else {
      document.getElementById("ckpass").innerHTML = '&#10004;';
      document.getElementById("ckpass").style.color = "#0000CD";
   }
}
function autoCheckRtpass() {
   var rtpass = document.forms["myForm"]["drtpass"].value.trim();
   var pass = document.forms["myForm"]["dpass"].value.trim();
   var passw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
   if (!rtpass.match(passw)||rtpass!==pass) {
      document.getElementById("ckRtpass").innerHTML = '&#10008';
      document.getElementById("ckRtpass").style.color = "#FF0000";
   }
   else {
      document.getElementById("ckRtpass").innerHTML = '&#10004;';
      document.getElementById("ckRtpass").style.color = "#0000CD";
   }
}
function autoCheckCountry() {
   //var _country = '';
   var country = document.getElementById("sel1").selectedIndex;
//   var country = document.getElementById("sel1");
//   var _country = country.option[country.selectedIndex].text;
   switch(country){
       case 1: "Viet Nam";
            break;
       case 2: "America";
            break;
       case 3: "England";
            break;
       case 4: "Germany";
            break;
       case 5: "Singapor";
            break;
       default: "Select your country";
   }
//    --------------------------------
//    if(country == 1){
//        _country = 'Vietnam';
//    }else if(country == 2){
//        _country = 'America';
//    }else if(country == 3){
//        _country = 'England';
//    }else if(country == 4){
//        _country = 'Germany';
//    }else{
//        _country = 'Singapor';
//    }
//    --------------------------------------
//    var oSelectOne = myForm.elements["slCountry"];
//    index = oSelectOne.selectedIndex;
//    if(index > 0){
//        var selected_option_value = oSelectOne.options[index].value;
//        var selected_option_text = oSelectOne.options[index].text;
//        alert("wfwf");
//    }else{
//        alert('Please select a country from the drop down list');
//    }
//    --------------------------------------------------------------------

}
