console.log("rectangle");

export function loadDemo(demoContainerElement) {
    console.log("loading rectangle demo");
    const canvasElement = document.createElement("canvas");
    const canvasDomWidth = 512;
    const canvasDomHeight = 512;
    canvasElement.style.width = canvasDomWidth;
    canvasElement.style.height = canvasDomHeight;
    demoContainerElement.appendChild(canvasElement);
    const canvasBoundingRect = canvasElement.getBoundingClientRect();
    const devicePixelRatio = window.devicePixelRatio;
    canvasElement.width = devicePixelRatio * canvasBoundingRect.width;
    canvasElement.height = devicePixelRatio * canvasBoundingRect.height;
    const canvasContext = canvasElement.getContext("2d");
    const graphicWidth = 2;
    const graphicHeight = 2;
    canvasContext.translate(0, canvasElement.height);
    canvasContext.scale(
        devicePixelRatio * canvasDomWidth / graphicWidth,
        -devicePixelRatio * canvasDomHeight / graphicHeight,
    );
    const diagramWidth = graphicWidth * 0.95;
    const diagramHeight = graphicHeight * 0.95;
    const diagramXxx = (graphicWidth - diagramWidth) / 2;
    const diagramYyy = (graphicHeight - diagramHeight) / 2;
    canvasContext.translate(diagramXxx, diagramYyy);
    canvasContext.scale(diagramWidth / 1.25, diagramHeight / 1.25);
    // canvasContext.fillStyle = "red";
    // canvasContext.fillRect(
    //     0,
    //     0,
    //     2,
    //     2,
    // );
    const rectangleHypotenuse = 1;
    const rectangleWidth = 1 / 2;
    const rectangleHeight = Math.sqrt(
        rectangleHypotenuse * rectangleHypotenuse -
            rectangleWidth * rectangleWidth,
    );
    const rectangleVertexAaa = [0, 0];
    const rectangleVertexBbb = [0, rectangleHeight];
    const rectangleVertexCcc = [rectangleWidth, rectangleHeight];
    const rectangleVertexDdd = [rectangleWidth, 0];
    canvasContext.beginPath()
    canvasContext.moveTo(
        rectangleVertexAaa[0],
        rectangleVertexAaa[1],
    );
    canvasContext.lineTo(
        rectangleVertexBbb[0],
        rectangleVertexBbb[1],
    );
    canvasContext.lineTo(
        rectangleVertexCcc[0],
        rectangleVertexCcc[1],
    );
    canvasContext.strokeStyle = "red";
    canvasContext.lineWidth = 2 / 200;
    canvasContext.stroke();
    canvasContext.beginPath()
    canvasContext.moveTo(
        rectangleVertexCcc[0],
        rectangleVertexCcc[1],
    );
    canvasContext.lineTo(
        rectangleVertexDdd[0],
        rectangleVertexDdd[1],
    );
    canvasContext.lineTo(
        rectangleVertexAaa[0],
        rectangleVertexAaa[1],
    );
    canvasContext.strokeStyle = "blue";
    canvasContext.lineWidth = 2 / 200;    
    canvasContext.stroke();
    canvasContext.beginPath()
    canvasContext.moveTo(
        rectangleVertexAaa[0],
        rectangleVertexAaa[1],
    );
    canvasContext.lineTo(
        rectangleVertexCcc[0],
        rectangleVertexCcc[1],
    );
    canvasContext.strokeStyle = "green";
    canvasContext.lineWidth = 2 / 200;
    canvasContext.stroke();
    // const yyyCoordinateAaa = -1;
    // const xxxCoordinateBbb = -1;
    // const yyyCoordinateBbb = -1;
}
