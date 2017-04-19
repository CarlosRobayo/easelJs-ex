var stage = new createjs.Stage('demoCanvas');

var airplane = new createjs.Graphics();

airplane
    .beginFill('#9a9a9a')
    .drawEllipse(300, 300, 100, 50);

airplane
    .beginFill('#000000')
    .drawEllipse(295, 320, 110, 20)
    .beginFill('#e1ff05')
    .drawRect(310, 314, 5, 5)
    .drawRect(320, 310, 5, 5)
    .drawRect(330, 308, 5, 5)
    .drawRect(340, 308, 5, 5)
    .drawRect(350, 308, 5, 5)
    .drawRect(360, 308, 5, 5)
    .drawRect(370, 308, 5, 5)
    .drawRect(380, 310, 5, 5)
    .drawRect(390, 315, 5, 5);

var newAirplane = new createjs.Shape(airplane);

function init() {

    var formGlobal = new createjs.Graphics();

    /// Sun ///
    formGlobal.beginFill('yellow').drawCircle(480, 350, 100);

    /// Mountains ///
    formGlobal.beginFill('green').beginStroke('#000000').moveTo(400, 600).bezierCurveTo(450, 50, 1250, 300, 1000, 600);

    formGlobal.beginFill('green').beginStroke('#000000').moveTo(-80, 600).bezierCurveTo(60, 50, 550, 300, 600, 600);

    /// Clouds ///
    formGlobal.beginFill('#ffffff').beginStroke('#ffffff');
    formGlobal.drawEllipse(100, 60, 100, 50);
    formGlobal.drawEllipse(140, 50, 120, 70);
    formGlobal.drawEllipse(210, 60, 100, 50);

    formGlobal.drawEllipse(400, 110, 100, 50);
    formGlobal.drawEllipse(440, 100, 120, 70);
    formGlobal.drawEllipse(510, 110, 100, 50);

    formGlobal.drawEllipse(700, 60, 100, 50);
    formGlobal.drawEllipse(740, 50, 120, 70);
    formGlobal.drawEllipse(810, 60, 100, 50);

    /// Smoke ///
    formGlobal.drawEllipse(290, 325, 30, 20);
    formGlobal.drawEllipse(310, 300, 40, 20);
    formGlobal.drawEllipse(270, 275, 40, 20);
    formGlobal.drawEllipse(310, 250, 40, 20);

    /// House ///
    formGlobal.beginFill('#fe3b3b').beginStroke('#000000').drawRect(150, 400, 200, 200);

    /// Roof ///
    formGlobal.beginStroke('#000000')
        .drawRect(290, 350, 50, 30);

    formGlobal.beginFill('brown').moveTo(130, 410)
        .lineTo(150, 370)
        .lineTo(350, 370)
        .lineTo(370, 410)
        .lineTo(130, 410);

    /// Windows and Door ///

    // Windows right
    formGlobal.beginFill('#ffffff').drawRect(280, 420, 40, 40);
    formGlobal.beginFill('#8d430e').drawRect(275, 460, 50, 10);

    formGlobal.beginFill('#ffffff').drawRect(280, 480, 40, 40);
    formGlobal.beginFill('#8d430e').drawRect(275, 520, 50, 10);

    // Windows left
    formGlobal.beginFill('#ffffff').drawRect(180, 420, 40, 40);
    formGlobal.beginFill('#8d430e').drawRect(175, 460, 50, 10);

    formGlobal.beginFill('#ffffff').drawRect(180, 480, 40, 40);
    formGlobal.beginFill('#8d430e').drawRect(175, 520, 50, 10);

    // Door
    formGlobal.beginFill('#8d430e').drawRect(230, 550, 40, 50);

    stage.addChild(new createjs.Shape(formGlobal), newAirplane);

    stage.update();

}

document.onkeydown = function (event) {
    var move = event.key;

    switch (move) {
        case 'ArrowUp':
            newAirplane.y -= 10;
            event.preventDefault();
            break;

        case 'ArrowDown':
            if (newAirplane.y <= 240) {
                newAirplane.y += 10;
            }
            event.preventDefault();
            break;

        case 'ArrowRight':
            if (newAirplane.x <= 590) {
                newAirplane.x += 10;
            }
            event.preventDefault();
            break;

        case 'ArrowLeft':
            if (newAirplane.x >= -290) {
                newAirplane.x -= 10;
            }
            event.preventDefault();
            break;

        default:
            console.log('Error');
            break;
    }

    stage.update();

}