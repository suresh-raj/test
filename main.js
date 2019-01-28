var main = document.getElementById('main');
var circleMain = document.getElementById('circle-main');
var circleAdd = document.getElementById('circle-add');
var circleCount =0;
circleAdd.addEventListener('click',function(e){
    var newCircle = document.createElement('div');
    newCircle.textContent = circleCount;
    newCircle.setAttribute('class','circle-small');
    main.appendChild(newCircle);
    circleCount++;
});
