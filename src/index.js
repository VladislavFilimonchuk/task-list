window.addEventListener('load', () => {
    let p3 = document.createElement('p');
        p3.id = 'p3';
        document.body.appendChild(p3);

    let mainDiv = document.createElement('div');
        mainDiv.id = 'mainDiv';
        mainDiv.style.width = "350px";
        mainDiv.style.height = "70px";
        mainDiv.align = 'center';
        mainDiv.style.background = "BurlyWood";
        document.querySelector('#p3').appendChild(mainDiv);

    let ul = document.createElement('ul');
        ul.id = 'ul';

    document.querySelector('#p3').appendChild(document.querySelector('#container'));

    document.querySelector('#container').appendChild(ul);

    let p1 = document.createElement('p');
        p1.id = 'p1';
        p1.align = 'center';
        document.querySelector('#mainDiv').appendChild(p1);

    let p2 = document.createElement('p');
        p2.id = 'p2';
        p2.align = 'center';
        document.querySelector('#mainDiv').appendChild(p2);

    let inputField = document.createElement('input');   
        inputField.type = "text";
        inputField.id = 'inputField';
        inputField.style.width = "200px";
        inputField.style.height = "20px";
        inputField.style.borderColor = 'CadetBlue';
        document.querySelector('#p1').appendChild(inputField);


    let addToList = document.createElement('button');
        addToList.id = 'button';
        addToList.style.width = "100px";
        addToList.style.height = "20px";
        addToList.style.borderColor = 'CadetBlue';
        addToList.innerText = ' Add to list ';
        document.querySelector('#p2').appendChild(addToList);

    let button = document.querySelector('#button');
        button.addEventListener('click',listAdder);
    
})

function listAdder(){

    let inputFieldValue = document.querySelector('#inputField').value;

    let li =  document.createElement('li');
        li.id = 'li';
        li.style.width = '300px';
        li.style.height = "20px";
        li.style.background = 'Coral';
        li.innerText = inputFieldValue;

    if(inputFieldValue !== ''){
    document.querySelector('#ul').appendChild(li);
    }

    document.querySelector('#inputField').value = '';
}