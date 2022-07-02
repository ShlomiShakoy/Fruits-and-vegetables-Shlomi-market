function alerts(){
    alert('Thanks for buying!')
}

//first page

const LogInemail=document.getElementById("email")
const LogInpassword=document.getElementById("password")
const btn=document.getElementById("Button");
if(LogInemail!=null&&LogInpassword!=null){
LogInemail.addEventListener('keyup',e=>{
const value=e.target.value;
LogInpassword.addEventListener('keyup',e2=>{
const passValue=e2.target.value;
btn.disabled=false
if(value===""||passValue==="")
{
    btn.disabled=true;   
}
    });
});
}

function alertsBuy(){
alert("Your verifying succeeded!");
open('login.html')
}

//registration page

const firstName=document.getElementById('firstName')
const lastName=document.getElementById('lastName')
const Age=document.getElementById('Age')
const RegLocation=document.getElementById('Location')
const RegisterEmail=document.getElementById('RegEmail')
const RegisterPassword=document.getElementById('RegPassword')
const regButton=document.getElementById('RegButton');
if(firstName!=null&&lastName!=null&&Age!=null&&RegLocation!=null&&RegisterEmail!=null&&RegisterPassword!=null){
firstName.addEventListener('keyup',e3=>{
const firstNameValue=e3.target.value;
lastName.addEventListener('keyup',e4=>{
    const lastNameValue=e4.target.value;
    Age.addEventListener('keyup',e5=>{
        const AgeValue=e5.target.value;
    RegLocation.addEventListener('keyup',e6=>{
        const locationValue=e6.target.value;
        RegisterEmail.addEventListener('keyup',e7=>{
            const emailValue=e7.target.value;
            RegisterPassword.addEventListener('keyup',e8=>{
                const passwordValue=e8.target.value
                regButton.disabled=false
                if(firstNameValue===""||lastNameValue===""||AgeValue===""||locationValue===""||emailValue===""||passwordValue==="")
                {
                    regButton.disabled=true;
                }
                    });
                });
            });
        });
    });
    
});
}

function alertRegFunc()
{
    alert('Thanks for joining us!')
    open('fruits.html')
}

function kiloAmount(){
    var kilonum=document.getElementById('input-kilo').value
    var type=document.getElementsByClassName('selection')[0]
    var selectedValue = type.options[type.selectedIndex].value;
    var sumTotal=0;
    if(kilonum>0){
    if(selectedValue=="Potato")
    {
        sumTotal=3.9*kilonum;
    }
    else if(selectedValue=="Tomato")
    {
        sumTotal=1.5*kilonum;
    }
    else if(selectedValue=="Carrot")
    {
        sumTotal=3.7*kilonum;
    }
    else if(selectedValue=="Brocoli")
    {
        sumTotal=5.1*kilonum;
    }
    else if(selectedValue=="Mashrum")
    {
        sumTotal=7.4*kilonum;
    }
    else if(selectedValue=="Cocumber")
    {
        sumTotal=1.4*kilonum;
    }
    else if(selectedValue=="Pumpkin")
    {
        sumTotal=6.5*kilonum;
    }
    else if(selectedValue=="Garlic")
    {
        sumTotal=7.9*kilonum;
    }
    else if(selectedValue=="Onion")
    {
        sumTotal=8.8*kilonum;
    }
    else if(selectedValue=="Apple")
    {
        sumTotal=3.9*kilonum;
    }
    else if(selectedValue=="Peach")
    {
        sumTotal=4.5*kilonum;
    }
    else if(selectedValue=="Banana")
    {
        sumTotal=3.9*kilonum;
    }
    else if(selectedValue=="Grapes")
    {
        sumTotal=7.1*kilonum;
    }
    else if(selectedValue=="Pineapple")
    {
        sumTotal=11.4*kilonum;
    }
    else if(selectedValue=="Kiwi")
    {
        sumTotal=4.4*kilonum;
    }
    else if(selectedValue=="Cherry")
    {
        sumTotal=9.5*kilonum;
    }
    else if(selectedValue=="Melon")
    {
        sumTotal=2.8*kilonum;
    }
    else{
        sumTotal=2.9*kilonum;
    }
    alert('Total price='+totalSum(sumTotal)+'$.\n Press: "move to payment" in order to complete your order.'); totalSum(sumTotal);
    }
}

function totalSum(val){
    var TwoPointsTotalNum=val.toFixed(2);
    return TwoPointsTotalNum;
}

    //buy
    const cardNum=document.getElementById('card-num-input') 
    const expiryDate=document.getElementById('expiry-date-input') 
    const secretNum=document.getElementById('secret-number-input') 
    const cardName=document.getElementById('card-name-input') 
    const payButton=document.getElementById('payButton');
    if(cardNum!=null&&expiryDate!=null&&secretNum!=null&&cardName!=null){
        cardNum.addEventListener('keyup',e9=>{
            const cardNumValue=e9.target.value;
            expiryDate.addEventListener('keyup',e10=>{
                const expiryDateValue=e10.target.value;
                secretNum.addEventListener('keyup',e11=>{
                    const secretNumValue=e11.target.value;
                    cardName.addEventListener('keyup',e12=>{
                    const cardNameValue=e12.target.value;
                    payButton.disabled=false;
                    if(cardNumValue===""||expiryDateValue===""||secretNumValue===""||cardNameValue==="")
                    {
                        payButton.disabled=true;
                    }
                });
            });
        });
        
    });   
}

function goodbyeFunc(){
    alert('Thanks for buying. Your order has been confirmed, and will arrive in the next few hours!')
    window.location.reload();
}

function cash(){
    alert('Thanks for buying. Your order will arrive in the next few hours, please pay the delivery person.');
    window.location.reload();
}