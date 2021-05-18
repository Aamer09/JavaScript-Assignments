const bdcontents = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const male = document.getElementById("male");
const female = document.getElementById("female");
const dob = document.getElementById("bday");
const address = document.getElementById("address");
const mobile = document.getElementById("mobile");
const city = document.getElementById("city");
const country = document.getElementById("mycountry");
const chk1 = document.getElementById("chk1");
const chk2 = document.getElementById("chk2");
const chk3 = document.getElementById("chk3");
const chk4 = document.getElementById("chk4");
const mygroup = document.getElementById("mygroup");

bdcontents.addEventListener('submit', (e)=>{
  e.preventDefault();
 
  checkInputs();
});

function isEmail(email) {
return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkInputs(){
var emailvalue = email.value;
var malevalue = male.checked;
var femalevalue = female.checked;
var dobvalue = bday.value
var addressvalue = address.value;
var mobilevalue = mobile.value;
var cityvalue = city.value;
var countryvalue = country.value;
var chk1value = chk1.checked;
var chk2value = chk2.checked;
var chk3value = chk3.checked;
var chk4value = chk4.checked;
var grpvalue = mygroup.value;

var cnt = 0;
 
  if(name == null || name.value.length < 4){
    setError(name);
    cnt++;
  }
  else{
    setSuccess(name);
  }
  if(email == null || (emailvalue === '' || !isEmail(emailvalue))){
    setError(email);
    cnt++;
  }
  else{
    setSuccess(email);
  }
  if(!malevalue && !femalevalue){
    setError(male);
    cnt++;
  }
  else{
    setSuccess(male);
  }
  if(bday == null || dobvalue===''){
    setError(bday);
    cnt++;
  }
  else{
    setSuccess(bday);
  }
  if(mobile == null || mobilevalue==='' || mobilevalue.length!=10){
    setError(mobile);
    cnt++;
  }
  else{
    setSuccess(mobile);
  }
  if(address == null || addressvalue==='' || addressvalue.length<6){
    setError(address);
    cnt++;
  }
  else{
    setSuccess(address);
  }
  if(city == null || cityvalue===''){
    setError(city);
    cnt++;
  }
  else{
    setSuccess(city);
  }
  if(country == null || countryvalue===''){
    setError(country);
    cnt++;
  }
  else{
    setSuccess(country);
  }
  if(!chk1value && !chk2value && !chk3value && !chk4value){
    setError(chk1);
    cnt++;
  }
  else{
    setSuccess(chk1);
  }
  if(mygroup == null || grpvalue===''){
    setError(mygroup);
    cnt++;
  }
  else{
    setSuccess(mygroup);
  }
  if(cnt!=0){
    document.getElementById('suc').className="msg err";
  }
  else{
    document.getElementById('suc').className="msg success";
    document.getElementById('form').style.display = "none";
  }
}

function setError(theVar){
  const formControl = theVar.parentElement.parentElement;
  const small = formControl.querySelector('small');
  small.className =  "errorMsg error";
}

function setSuccess(theVar){
  const formControl = theVar.parentElement.parentElement;
  const small = formControl.querySelector('small');
  small.className =  "errorMsg";
}
     




