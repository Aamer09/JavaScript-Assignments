// start coding here

onload = function(){

     
    var save = document.getElementsByClassName("btn");
    save[0].addEventListener ("click", function(e) {
    e.preventDefault();


    
    var nameValue = document.getElementById('name').value;
    document.getElementById("nameVal").innerHTML = nameValue;


    var gender = document.querySelector('input[type=radio]:checked');
    document.getElementById('genderVal').innerHTML = gender.value;


    var dob = document.querySelector('#dob').value;
    document.getElementById('dobVal').innerHTML = dob;


    var address = document.querySelector('textarea');
    document.getElementById('addressVal').innerHTML = address.value;


    var city = document.querySelector('select');
    document.getElementById("cityVal").innerHTML = city.value;



    var country = document.querySelector('input[list]');
    document.getElementById("countryVal").innerHTML = country.value;

   

    var expertise = document.querySelectorAll("input[type=checkbox]");
       var language = "";
    for(var i=0;i<expertise.length ;i++){
          if(expertise[i].checked===true){
                language = language +","+expertise[i].name;
          }
    }
    document.getElementById('expertiseVal').innerHTML=language.substring(1,language.length);
    
    //console.log(language.substring(1,language.length));
  
  

    var group = document.querySelector("select[multiple]");
    document.getElementById("groupVal").innerHTML = group.value;
 



   document.getElementById('name').value="";
   var radio =document.querySelector('input[type=radio]:checked');
   radio.checked = false;
   document.querySelector('#dob').value="";
   document.querySelector('textarea').value="";
   document.querySelector('select').value="";
   document.querySelector('input[list]').value="";
   var uncheck = document.querySelectorAll("input[type=checkbox]");
  document.querySelector("select[multiple]").value=false;
  
  //document.getElementById('myform').reset();

}) 

};



