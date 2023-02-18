// step-1: Triangle value

document.getElementById("triangleBtn").addEventListener("click", function () {
  const triangleBase = document.getElementById("triangleBase").value;
  const triangleBaseParse = parseFloat(triangleBase);
  const triangleHeight = document.getElementById("triangleHeight").value;
  const triangleHeightParse = parseFloat(triangleHeight);

  if (
    isNaN(triangleBaseParse) ||
    isNaN(triangleHeightParse) ||
    triangleBase < 1 ||
    triangleHeight < 1
  ) {
    alert("Input is required, must be a positve number");
  } else {
    const triangleArea = 0.5 * triangleBaseParse * triangleHeightParse;
    // console.log(triangleArea);
  }
});

// step-2: Rectangle value
document.getElementById("rectangleBtn").addEventListener("click", function () {
  const rectangleWidth = document.getElementById("rectangleWidth").value;
   const rectangleWidthParse = parseFloat(rectangleWidth);
  const rectangleLand = document.getElementById("rectangleLand").value;
  const rectanglenLandParse = parseFloat(rectangleLand);

  if (
    isNaN(rectangleWidthParse) ||
    isNaN(rectanglenLandParse) ||
    rectangleWidth < 1 ||
    rectangleLand < 1
  ) {
    alert("Input is required, must be a positve number");
  } else {
    const rectanglenArea =  rectangleWidthParse * rectanglenLandParse;
    console.log(rectanglenArea);
  }

});

// step-3: Parallelogram value
document.getElementById("rectangleBtn").addEventListener("click", function () {
  const ParallelogramBase = document.getElementById("parallelogramBase").value;
  const ParallelogramHeight = document.getElementById(
    "parallelogramHeight"
  ).value;
  // const ParallelogramBtn = document.getElementById("parallelogramBtn");
});

// step-4: Rhombus value
const RhombusD1 = document.getElementById("rhombusD1").value;
const RhombusD2 = document.getElementById("rhombusD2").value;
const RhombusBtn = document.getElementById("rhombusBtn");

// step-5: Pentagon value
const PentagonP = document.getElementById("pentagonP").value;
const PentagonB = document.getElementById("pentagonB").value;
const PentagonBtn = document.getElementById("pentagonBtn");

// step-6: Ellipse value
const EllipseA = document.getElementById("ellipseA").value;
const EllipseB = document.getElementById("ellipseB").value;
const EllipseBtn = document.getElementById("ellipseBtn");
