namespace L02 {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        //Background
        crc2.fillStyle = "#ff0000";
        crc2.fillRect(0, 0, 400, 300);

        // Line
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(400, 300);
        crc2.stroke();
 
        drawTriangle(200, 100, "#FF0000");
        drawTriangle(230, 100, "#00FF00");
        drawTriangle(200, 130, "#FF00FF");
        drawTriangle(180, 120, "#FFFF00");


        // 30 Dreiecke in einer Reihe
        for (let i: number = 0; i < 30; i++) {
            drawTriangle(20 + i * 20, 20, "#FFFFFF");
        }

        // 10 Dreiecke an zufälliger Position zwischen 150 und 250 horizontal und 200 und 260 vertikal
        for (let i: number = 0; i < 10; i++) {
            let x: number = 150 + Math.random() * 100;
            let y: number = 200 + Math.random() * 60;
            drawTriangle(x, y, "#00FFFF");
        }
    }

    function drawTriangle(_x: number, _y: number, _color: string): void {
        //Triangle
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 20, _y + 30);
        crc2.lineTo(_x - 20, _y + 30);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
    }

}