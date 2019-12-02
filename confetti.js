
var pieces = [];
var numberOfPieces = 50;

/*function createConfetti() {
    while (pieces.length < numberOfPieces) {
        pieces.push(new Piece(Math.random() * canvas.width, 0));
    }
}*/

function randomColor () {
    var colors = ['#f00', '#0f0', '#00f', '#0ff', '#f0f', '#ff0'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function drawConfetti () {

    while (pieces.length < numberOfPieces) {
        pieces.push(new Piece(Math.random() * canvas.width, -20));
    }

    for (var i = 0; i < pieces.length; i++) {
        var p = pieces[i];

        if (p.y > canvas.height) {
            pieces.splice(i, 1);
            continue;
        }

        p.y += p.gravity;
        p.rotation += p.rotationSpeed;

        ctx.fillStyle = p.color;

        ctx.beginPath();
            ctx.moveTo(p.x - p.size/8 * Math.cos(p.rotation), p.y - p.size/2 * Math.sin(p.rotation));
            ctx.lineTo(p.x + p.size/8 * Math.cos(p.rotation), p.y - p.size/2 * Math.sin(p.rotation));
            ctx.lineTo(p.x + p.size/8 * Math.cos(p.rotation), p.y + p.size/2 * Math.sin(p.rotation));
            ctx.lineTo(p.x - p.size/8 * Math.cos(p.rotation), p.y + p.size/2 * Math.sin(p.rotation));
        ctx.fill();
    }
}

function Piece (x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 10;
    this.gravity = (Math.random() * 0.5 + 0.75) * 0.1;
    this.rotation = 0; //(Math.PI * 2) * Math.random() / 2;
    this.rotationSpeed = .1; //(Math.PI * 2) * (Math.random() - 0.5) * 0.001;
    this.color = randomColor();
}
