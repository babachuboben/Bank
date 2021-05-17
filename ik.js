var password ="Chime ikechukwu"
var response;
var entrycount =0;
var entrylimit=1;
var error =false;

while(response !=password && !error ){
  if (entrycount <entrylimit){
    response =window.prompt("enter your password");
    entrycount++;
   }else{
     error= true;
   }
}
if (error){
  alert("Too many entries");
}else {
  alert("you got it")
}
 var initialbalance =100000;
 var Ussd =prompt("Enter Ussd code"); 
 if (Ussd=="*123#"){
     var  Enter =prompt("Enter your Operation here \n Press 1 to Bur Airtime \n Press 2 to Buy Data \n Press 3 to Transfer to Banks \n Press 4 to Check Balance \n Press 0 to Cancel Operation")         
     if (Enter==1){
        var  Airtime=Number(prompt("Enter Airtime Amount"));
         if (Airtime <=10000){
          var phone = prompt("Enter your phone Number");
            if(phone .length== 11) {
              alert(`this number ${phone} has been recharged with ${Airtime}`);
              alert ("Recharge Successful");
            }else if (phone.length < 11 || phone.length > 11){
              alert("Please check the number you entered it is either completed or not"); 
            }else{
            alert("Your phone can be only numbers not alphabet or symbol");
              }
          }else{
            alert("You have exceeded the daily reserve for airtime");
          }
    }else if(Enter == 2){
      var Data =Number(prompt("Enter buy Data"));
       if (Enter <=1000){
         var phone =prompt("Enter your phone Number");       
          if (phone.length==11){
            alert(`this number ${phone}hes been recharged with ${Data}MB`);
               alert("Recharge Successful");
                 }else if (phone.length <  11 ||phone.length > 11){ 
            alert("Please check the number you entered it is either completed or not,")   
          } else{
            alert("Your phone can be only numbers");
          } 
      }else{
        alert("You have exceeded the daily reserve for buy Data");
      }
    }else if(Enter == 3){
      var BankDetail = Number(prompt("Enter Your Account Number"));
         if(Enter <=1000){
         var phone =prompt("Enter phone Number");
         if(phone.length==10){
           alert(` Your account number ${phone} has been credited with ${BankDetail}`)
              alert("transaction is successful"); 
                 }else if (phone.length <10 || phone.length >10){
                  alert("Please check the number you entered it is either completed or not,")   
                } else{
                  alert("Thank you for Banking wthi this Bank");
                  alert("the transaction is successful");
                } 
            }else{
              alert("Your phone can be only numbers");
            }
    };
  }else if (Enter == 4){
    var Check = prompt("Enter your  Check Balance");
    if (Enter <=100000){
      if (phone.initialbalance==100000);
      alert ("100000");
    }
  };
  
  
