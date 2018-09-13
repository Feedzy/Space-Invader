var body = document.querySelector('body');
var touche, acteurr = document.getElementById('acteur');
var droit = 1,haut =90;

body.onkeydown= function()
{
    touche = event.keyCode;

    switch (touche)
    {
        case 37:
            droit -= 0.5;
            acteurr.style.left = droit + '%';
            console.log(droit);

            if(droit == 0)
            {
                droit = 97;
                acteurr.style.left = droit+'%';
                console.log(droit);
            }

            break;

        case 38:
            haut -= 1;
            acteurr.style.top = haut +'%';
            console.log(haut);
            if (haut == 1)
            {
                haut = 90;
                acteurr.style.top = haut +'%';
                console.log(haut);
            }
            break;

        case 39:
            droit += 0.5;
            acteurr.style.left = droit+'%';
            console.log(droit);

            if(droit == 97)
            {
                droit=0;
                acteurr.style.left = droit+'%';
                console.log(droit);
            }

            break;

        case 40:
            haut += 1;
            acteurr.style.top = haut +'%';
            console.log(haut);
            if (haut == 92)
            {
                haut= 0;
                acteurr.style.top = haut +'%';
                console.log(haut);
            }
            break;

        case 32:

            var Top = window.getComputedStyle(acteurr, null).getPropertyValue("top");
            var Left = window.getComputedStyle(acteurr, null).getPropertyValue("left");
            var balle = document.createElement('img');
            var sons = document.getElementById('player_audio');
            balle.src = 'Images/Rocket.png';
            var top_moin = parseInt(Top, 10);
            balle.style.position = 'absolute';
            balle.style.width = '30px';
            balle.style.top = Top ;
            balle.style.left = Left;
            body.appendChild(balle);
            sons.play();

            setInterval(function()
            {
                      top_moin = top_moin-20;
                      balle.style.top = top_moin + 'px';
            },0100);
              console.log(top_moin);
          break;

          case 87:
            var Top = window.getComputedStyle(acteurr, null).getPropertyValue("top");
            var Left = window.getComputedStyle(acteurr, null).getPropertyValue("left");
            var balle = document.createElement('div');
            var sons = document.getElementById('player_audio');
            var top_moin = parseInt(Top, 10);
            balle.style.position = 'absolute';
            balle.style.width = '10px';
            balle.style.height = '10px';
            balle.style.backgroundColor = 'blue';

            balle.style.top = Top ;
            balle.style.left = Left;
            body.appendChild(balle);
            sons.play();

            setInterval(function()
            {
                top_moin = top_moin-20;
                balle.style.top = top_moin + 'px';
            },0100);
          break;
    }
};

var block1 = document.querySelector('#image');
var player1 = image.animate([
    {
        left: "0",

    },
    {
        left: "450px",

    }
], {
    duration:5000,
    direction: 'alternate',
    easing: "linear"
});

var player2 = image.animate([
    {
        left: "0",

    },
    {
        left: "450px",

    }
], {
    duration:5000,
    iterations: Infinity,
    direction: 'alternate',
    easing: "linear"
});
var image1 = document.getElementById('b1-im1');
var styless = window.getComputedStyle(image1, null).getPropertyValue("left");
console.log(styless);
