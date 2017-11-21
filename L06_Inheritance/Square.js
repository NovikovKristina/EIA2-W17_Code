var L06_Inheritance;
(function (L06_Inheritance) {
    class Square {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        sayHello() {
            console.log("Hallo");
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += Math.random() * 4 - 2; // hier experimentieren um
            this.y += Math.random() * 4 - 2; // andere Bewegungsmuster zu finden
        }
        draw() {
            L06_Inheritance.crc2.fillStyle = this.color;
            L06_Inheritance.crc2.fillRect(this.x, this.y, this.size, this.size);
        }
        setRandomStyle() {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
    L06_Inheritance.Square = Square;
})(L06_Inheritance || (L06_Inheritance = {}));
//# sourceMappingURL=Square.js.map