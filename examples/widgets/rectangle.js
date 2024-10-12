export default class RectangleWidget extends HTMLElement {
    constructor() {
        super()        
    }

    connectedCallback() {
        console.log('rectangle')
    }
}
// export function loadDemo(demoContainerElement) {
//     const diagramWidth = 3;
//     const diagramHeight = 3;
//     const diagramRelativePadding = 0.05;
//     const diagramWidthPadding = diagramWidth * diagramRelativePadding;
//     const diagramHeightPadding = diagramHeight * diagramRelativePadding;
//     const viewXxx = -diagramWidthPadding;
//     const viewYyy = -diagramHeightPadding;
//     const viewWidth = diagramWidth + 2 * diagramWidthPadding;
//     const viewHeight = diagramHeight + 2 * diagramHeightPadding;
//     const rectangleHypotenuse = 1;
//     const rectangleHypotenuseAngle = Math.PI / 2 / 8 * 3;
//     // const rectangleWidth = 1 / 2;
//     const rectangleWidth = Math.cos(rectangleHypotenuseAngle);
//     const rectangleHeight = Math.sin(rectangleHypotenuseAngle);
//     // Math.sqrt(
//     //     rectangleHypotenuse * rectangleHypotenuse -
//     //         rectangleWidth * rectangleWidth,
//     // );
//     const rectangleVertex_Aaa = [0, 0];
//     const rectangleVertex_Bbb = [0, rectangleHeight];
//     const rectangleVertex_Ccc = [rectangleWidth, rectangleHeight];
//     const rectangleVertex_Ddd = [rectangleWidth, 0];
//     const rectangleVertices = [
//         rectangleVertex_Aaa,
//         rectangleVertex_Bbb,
//         rectangleVertex_Ccc,
//         rectangleVertex_Ddd,
//     ];
//     const bigTriangleVertex_Eee = [
//         0,
//         Math.sqrt(
//             rectangleHeight * rectangleHeight + rectangleWidth * rectangleWidth,
//         ) / rectangleHeight * rectangleHypotenuse,
//     ];
//     const bigTriangleVertex_Fff = [
//         Math.sqrt(
//             rectangleHeight * rectangleHeight + rectangleWidth * rectangleWidth,
//         ) / rectangleWidth * rectangleHypotenuse,
//         0,
//     ];
//     const bigTriangleVertices = [
//         rectangleVertex_Aaa,
//         bigTriangleVertex_Eee,
//         bigTriangleVertex_Fff,
//     ];
//     const rectangleFooDelta = rectangleHypotenuseAngle < (Math.PI / 4)
//         ? bigTriangleVertex_Fff[0] - rectangleVertex_Ccc[0]
//         : bigTriangleVertex_Eee[1] - rectangleVertex_Bbb[1];
//     const midTriangleVertex_Ggg = [
//         bigTriangleVertex_Fff[0] - rectangleFooDelta,
//         0,
//     ];
//     const midTriangleVertices = [
//         rectangleVertex_Aaa,
//         rectangleVertex_Bbb,
//         midTriangleVertex_Ggg,
//     ];
//     const smallTriangleVertex_Hhh = [
//         0,
//         rectangleFooDelta,
//     ];
//     const smallTriangleVertices = [
//         rectangleVertex_Aaa,
//         smallTriangleVertex_Hhh,
//         rectangleVertex_Ddd,
//     ];
//     const otherSmallTriangleVertex_Iii = [
//         rectangleVertex_Ccc[0],
//         rectangleVertex_Ccc[1] -
//         rectangleFooDelta,
//     ];
//     const otherSmallTriangleVertices = [
//         rectangleVertex_Bbb,
//         rectangleVertex_Ccc,
//         otherSmallTriangleVertex_Iii,
//     ];
//     const svgNS = "http://www.w3.org/2000/svg";
//     const svgElement = document.createElementNS(svgNS, "svg");
//     svgElement.setAttribute(
//         "viewBox",
//         `${viewXxx} ${viewYyy} ${viewWidth} ${viewHeight}`,
//     );
//     svgElement.style.width = 512;
//     svgElement.style.height = 512;
//     const diagramTransformElement = document.createElementNS(svgNS, "g");
//     diagramTransformElement.setAttribute(
//         "transform",
//         `translate(0,${diagramHeight}) scale(1,-1)`,
//     );
//     svgElement.appendChild(diagramTransformElement);
//     const diagramBackgroundElement = document.createElementNS(svgNS, "rect");
//     diagramBackgroundElement.setAttribute("x", 0);
//     diagramBackgroundElement.setAttribute("y", 0);
//     diagramBackgroundElement.setAttribute("width", diagramWidth);
//     diagramBackgroundElement.setAttribute("height", diagramHeight);
//     diagramBackgroundElement.setAttribute("fill", "rgb(241,241,241)");
//     diagramTransformElement.appendChild(diagramBackgroundElement);
//     // rectangleVertices.forEach(
//     //     (someRectangleVertex) => {
//     //         const vertexCircleElement = document.createElementNS(
//     //             svgNS,
//     //             "circle",
//     //         );
//     //         vertexCircleElement.setAttribute("cx", someRectangleVertex[0]);
//     //         vertexCircleElement.setAttribute("cy", someRectangleVertex[1]);
//     //         vertexCircleElement.setAttribute("r", 0.04);
//     //         vertexCircleElement.setAttribute("fill", "transparent");
//     //         vertexCircleElement.setAttribute("stroke", "red");
//     //         vertexCircleElement.setAttribute("stroke-width", 0.0075);
//     //         diagramTransformElement.appendChild(vertexCircleElement);
//     //     },
//     // );
//     // bigTriangleVertices.forEach(
//     //     (someRectangleVertex) => {
//     //         const vertexCircleElement = document.createElementNS(
//     //             svgNS,
//     //             "circle",
//     //         );
//     //         vertexCircleElement.setAttribute("cx", someRectangleVertex[0]);
//     //         vertexCircleElement.setAttribute("cy", someRectangleVertex[1]);
//     //         vertexCircleElement.setAttribute("r", 0.03);
//     //         vertexCircleElement.setAttribute("fill", "transparent");
//     //         vertexCircleElement.setAttribute("stroke", "blue");
//     //         vertexCircleElement.setAttribute("stroke-width", 0.0075);
//     //         diagramTransformElement.appendChild(vertexCircleElement);
//     //     },
//     // );
//     // midTriangleVertices.forEach(
//     //     (someRectangleVertex) => {
//     //         const vertexCircleElement = document.createElementNS(
//     //             svgNS,
//     //             "circle",
//     //         );
//     //         vertexCircleElement.setAttribute("cx", someRectangleVertex[0]);
//     //         vertexCircleElement.setAttribute("cy", someRectangleVertex[1]);
//     //         vertexCircleElement.setAttribute("r", 0.02);
//     //         vertexCircleElement.setAttribute("fill", "transparent");
//     //         vertexCircleElement.setAttribute("stroke", "green");
//     //         vertexCircleElement.setAttribute("stroke-width", 0.0075);
//     //         diagramTransformElement.appendChild(vertexCircleElement);
//     //     },
//     // );
//     // smallTriangleVertices.forEach(
//     //     (someRectangleVertex) => {
//     //         const vertexCircleElement = document.createElementNS(
//     //             svgNS,
//     //             "circle",
//     //         );
//     //         vertexCircleElement.setAttribute("cx", someRectangleVertex[0]);
//     //         vertexCircleElement.setAttribute("cy", someRectangleVertex[1]);
//     //         vertexCircleElement.setAttribute("r", 0.01);
//     //         vertexCircleElement.setAttribute("fill", "cyan");
//     //         diagramTransformElement.appendChild(vertexCircleElement);
//     //     },
//     // );
//     // otherSmallTriangleVertices.forEach(
//     //     (someRectangleVertex) => {
//     //         const vertexCircleElement = document.createElementNS(
//     //             svgNS,
//     //             "circle",
//     //         );
//     //         vertexCircleElement.setAttribute("cx", someRectangleVertex[0]);
//     //         vertexCircleElement.setAttribute("cy", someRectangleVertex[1]);
//     //         vertexCircleElement.setAttribute("r", 0.01);
//     //         vertexCircleElement.setAttribute("fill", "lime");
//     //         diagramTransformElement.appendChild(vertexCircleElement);
//     //     },
//     // );
//     [
//         ...rectangleVertices,
//         ...bigTriangleVertices,
//         ...midTriangleVertices,
//         ...smallTriangleVertices,
//         ...otherSmallTriangleVertices,
//     ].forEach(
//         (someRectangleVertex) => {
//             const vertexCircleElement = document.createElementNS(
//                 svgNS,
//                 "circle",
//             );
//             vertexCircleElement.setAttribute("cx", someRectangleVertex[0]);
//             vertexCircleElement.setAttribute("cy", someRectangleVertex[1]);
//             vertexCircleElement.setAttribute("r", 0.02);
//             vertexCircleElement.setAttribute("fill", "red");
//             diagramTransformElement.appendChild(vertexCircleElement);
//         },
//     );
//     demoContainerElement.appendChild(svgElement);
// }

// class RectangleDemoElement extends HTMLElement {
//     constructor() {
//         super();        
//         this.svgElement = new SVGSVGElement()
//         this.rectangleVertexAaa = document.importNode()
//     }
//     connectedCallback() {}
//     disconnectedCallback() {}
//     attributeChangedCallback() {}
// }