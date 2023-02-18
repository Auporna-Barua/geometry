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
    // console.log(rectanglenArea);
  }

});

// step-3: Parallelogram value
document.getElementById("parallelogramBtn").addEventListener("click", function () {
    const parallelogramBase = document.getElementById("parallelogramBase").value;
    const parallelogramBaseParse = parseFloat(parallelogramBase);
    const parallelogramHeight = document.getElementById(
      "parallelogramHeight"
    ).value;
    const parallelogramHeightParse = parseFloat(parallelogramHeight);

    if (
      isNaN(parallelogramBaseParse) ||
      isNaN(parallelogramHeightParse) ||
      parallelogramBase < 1 ||
      parallelogramHeight < 1
    ) {
      alert("Input is required, must be a positve number");
    } else {
      const parallelogramArea =
        parallelogramBaseParse * parallelogramHeightParse;
      console.log(parallelogramArea);
    }

  });

// step-4: Rhombus value
document.getElementById("rhombusBtn").addEventListener("click", function () {
  const rhombusD1 = document.getElementById("rhombusD1").value;
    const rhombusD1Parse = parseFloat(rhombusD1);
  const rhombusD2 = document.getElementById("rhombusD2").value;
  const rhombusD2Parse = parseFloat(rhombusD2);
  
  if (
    isNaN(rhombusD1Parse) ||
    isNaN(rhombusD2Parse) ||
    rhombusD1 < 1 ||
    rhombusD2 < 1
  ) {
    alert("Input is required, must be a positve number");
  } else {
    const rhombusArea = 0.5 * rhombusD1Parse * rhombusD2Parse;
    console.log(rhombusArea);
  }
  
});

// step-5: Pentagon value
const PentagonP = document.getElementById("pentagonP").value;
const PentagonB = document.getElementById("pentagonB").value;
const PentagonBtn = document.getElementById("pentagonBtn");

// step-6: Ellipse value
const EllipseA = document.getElementById("ellipseA").value;
const EllipseB = document.getElementById("ellipseB").value;
const EllipseBtn = document.getElementById("ellipseBtn");
