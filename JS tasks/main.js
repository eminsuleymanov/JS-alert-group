
// Task 1
//#region 
// var confirm = confirm('Sayti gormek isteyerdiz ?');
// if (confirm == true) {
//     document.body.style.display = 'block'
// }
// else{
//     document.body.style.display = 'none'
// }
//#endregion 

// Task 2
//#region 
// var ad = prompt('Adinizi daxil edin:')
// var age = prompt('Yashinizi daxil edin: ' )
// if(age >= 18){
//     alert( 'Xosh geldiniz,'+ ' ' +ad)
//     document.body.style.backgroundColor = 'green'
// }
// else{
//     alert(ad+ ', '+ "girish ucun minimal yash heddi 18-dir")
//     document.body.style.backgroundColor = 'red'
// }
//#endregion

function Groups(){
    var input = document.getElementById('group');
    var value = input.value;
    var groupNum = value.slice(-3);
    groupNum = groupNum.slice(0,1);

    if(groupNum == 1){
        document.getElementById('groupName').innerHTML = 'Seher'
        document.getElementById('groupName').style.color = 'yellow'
        document.body.style.backgroundImage = "url('https://img5.goodfon.com/original/5472x3648/4/ba/good-morning-coffee-cup-sunrise-utro-voskhod-chashka-kofe.jpg')";
    }
    else if(groupNum == 2){
        document.getElementById('groupName').innerHTML = 'Gunorta'
        document.getElementById('groupName').style.color = 'red'
        document.body.style.backgroundImage = "url('https://pbs.twimg.com/media/FG6isSkX0AM0qEH.jpg')";


    }
    else if(groupNum == 3){
        document.getElementById('groupName').innerHTML = 'Axwam'
        document.getElementById('groupName').style.color = 'black'
        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/c6/28/0e/c6280e8f909cdaa96f599f4b611e876c.jpg')";
         

    }
    else{
        document.getElementById('groupName').innerHTML = 'Ele smen movcud deyil'

    }






    
}


