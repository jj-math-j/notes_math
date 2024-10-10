console.log("rectangle");

export function loadDemo(demoContainerElement) {
    const diagramWidth = 2;
    const diagramHeight = 2;
    const diagramRelativePadding = 0.05;
    const diagramWidthPadding = diagramWidth * diagramRelativePadding;
    const diagramHeightPadding = diagramHeight * diagramRelativePadding;
    const viewXxx = -diagramWidthPadding;
    const viewYyy = -diagramHeightPadding;
    const viewWidth = diagramWidth + 2 * diagramWidthPadding;
    const viewHeight = diagramHeight + 2 * diagramHeightPadding;
    const rectangleHypotenuse = 1;
    const rectangleWidth = 1 / 2;
    const rectangleHeight = Math.sqrt(
        rectangleHypotenuse * rectangleHypotenuse -
            rectangleWidth * rectangleWidth,
    );
    const rectangleVertex_Aaa = [0, 0];
    const rectangleVertex_Bbb = [0, rectangleHeight];
    const rectangleVertex_Ccc = [rectangleWidth, rectangleHeight];
    const rectangleVertex_Ddd = [rectangleWidth, 0];
    const rectangleVertices = [
        rectangleVertex_Aaa,
        rectangleVertex_Bbb,
        rectangleVertex_Ccc,
        rectangleVertex_Ddd,
    ];
    const svgNS = "http://www.w3.org/2000/svg";
    const svgElement = document.createElementNS(svgNS, "svg");
    svgElement.setAttribute(
        "viewBox",
        `${viewXxx} ${viewYyy} ${viewWidth} ${viewHeight}`,
    );
    svgElement.style.width = 512;
    svgElement.style.height = 512;
    const diagramTransformElement = document.createElementNS(svgNS, "g");
    diagramTransformElement.setAttribute(
        "transform",
        `translate(0, ${diagramHeight}) scale(1,-1)`
    );
    svgElement.appendChild(diagramTransformElement);
    rectangleVertices.forEach((someRectangleVertex) => {
        const vertexCircleElement = document.createElementNS(svgNS, "circle");
        vertexCircleElement.setAttribute("cx", someRectangleVertex[0]);
        vertexCircleElement.setAttribute("cy", someRectangleVertex[1]);
        vertexCircleElement.setAttribute("r", 0.01);
        vertexCircleElement.setAttribute("fill", "red");
        diagramTransformElement.appendChild(vertexCircleElement);
    });
    demoContainerElement.appendChild(svgElement);
}
