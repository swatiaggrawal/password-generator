const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","!","@","#","$","%","&","*","_","-","+","=",":",".","?",
"/"];
let n=8
//let passwordLength=8
//let randomPassword=[]
let pwBox1=document.getElementById("pw-box1")
let pwBox2=document.getElementById("pw-box2")
let pwBox3=document.getElementById("pw-box3")
let pwBox4=document.getElementById("pw-box4")
function generatePassword(n){
    let passarr=[]
    for(j=0;j<4;j++){
        let resstr=""
        for(let i=0;i<n;i++){
            let rIndex = Math.floor(Math.random()*characters.length)
            resstr+=characters[rIndex]
           }
           passarr.push(resstr)
    }
   


    return passarr
}
function renderPassword(){
    let passwords=generatePassword(n)
    pwBox1.textContent=passwords[0]
    pwBox2.textContent=passwords[1]
    pwBox3.textContent=passwords[2]
    pwBox4.textContent=passwords[3]

}
/*

function copyPassword(){
    const copyText = document.getElementById("pw-box1").value;
    navigator.clipboard.writeText(copyText).then(() => {
    alert("Copied to clipboard");
  });
}
*/