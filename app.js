function ageInDays (){
    let birthYear = prompt('What Year Were You Born....?');
    let ageInDays = (2022-birthYear)*365;
    let h1 = document.createElement('h1');
    let textAnsewr = document.createTextNode(`You are ${ageInDays} days`);
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnsewr);
    
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}


