var L04_Interface;
(function (L04_Interface) {
    window.addEventListener("load", init);
    let crc2;
    let interfaceSquare;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        interfaceSquare = { x: 100, y: 100, color: "blue" };
        console.log(interfaceSquare);
        // hier Hintergrund speichern
        animate();
    }
    function animate() {
        //console.log("Timeout");
        crc2.clearRect(0, 0, 400, 300); // hier Hintergrund restaurieren
        interfaceSquare.x += Math.random() * 4 - 2; // hier experimentieren um
        interfaceSquare.y += Math.random() * 4 - 2; // andere Bewegungsmuster zu finden
        crc2.fillStyle = interfaceSquare.color;
        crc2.fillRect(interfaceSquare.x, interfaceSquare.y, 20, 20);
        window.setTimeout(animate, 20);
    }
})(L04_Interface || (L04_Interface = {}));
//# sourceMappingURL=Main.js.map