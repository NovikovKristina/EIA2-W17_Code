var L06_Inheritance;
(function (L06_Inheritance) {
    class Circle extends L06_Inheritance.Square {
        draw() {
            L06_Inheritance.crc2.fillStyle = this.color;
            L06_Inheritance.crc2.beginPath();
            L06_Inheritance.crc2.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            L06_Inheritance.crc2.stroke();
        }
    }
    L06_Inheritance.Circle = Circle;
})(L06_Inheritance || (L06_Inheritance = {}));
//# sourceMappingURL=Circle.js.map