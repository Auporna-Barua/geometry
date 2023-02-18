

// common function for tringle and Pentagon
function validationGeomaetry(num1, num2) {
  if (isNaN(num1) || isNaN(num2) || num1 < 1 || num2 < 1) {
    return alert("Input is required, must be a positve number");
  } else {
    const area = (0.5 * num1 * num2).toFixed(2);
    return area;
  }
}
// step-1: Triangle value

document.getElementById("triangleBtn").addEventListener("click", function () {
  const triangleBase = document.getElementById("triangleBase").value;
  const triangleBaseParse = parseFloat(triangleBase);
  const triangleHeight = document.getElementById("triangleHeight").value;
  const triangleHeightParse = parseFloat(triangleHeight);

  const triangleArea = validationGeomaetry(
    triangleBaseParse,
    triangleHeightParse
  );
  console.log(triangleArea);
  const text = `<li class= "list-group-item d-flex justify-content-between align-items-start gap-2"><div class="ms-2 me-auto">Triangle</div>
                <div>${triangleArea}cm<sup>2</sup></div>
                <button class="btn btn-primary btn-sm">
                  Convert to m <sup>2</sup>
                </button> </li>`;
  if (triangleArea) {
    document.getElementById("resultShow").innerHTML += text;
  }

  // }
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
    const rectanglenArea = (rectangleWidthParse * rectanglenLandParse).toFixed(
      2
    );

    const text = `<li class= "list-group-item d-flex justify-content-between align-items-start gap-2"><div class="ms-2 me-auto">Rectangle</div>
                <div>${rectanglenArea}cm<sup>2</sup></div>
                <button class="btn btn-primary btn-sm">
                  Convert to m <sup>2</sup>
                </button> </li>`;
    document.getElementById("resultShow").innerHTML += text;
  }
});

// step-3: Parallelogram value
document
  .getElementById("parallelogramBtn")
  .addEventListener("click", function () {
    const parallelogramBase =
      document.getElementById("parallelogramBase").value;
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
      const parallelogramArea = (
        parallelogramBaseParse * parallelogramHeightParse
      ).toFixed(2);
      const text = `<li class= "list-group-item d-flex justify-content-between align-items-start gap-2"><div class="ms-2 me-auto">Parallelogram</div>
                <div>${parallelogramArea}cm<sup>2</sup></div>
                <button class="btn btn-primary btn-sm">
                  Convert to m <sup>2</sup>
                </button> </li>`;

      document.getElementById("resultShow").innerHTML += text;
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
    const rhombusArea = (0.5 * rhombusD1Parse * rhombusD2Parse).toFixed(2);
    const text = `<li class= "list-group-item d-flex justify-content-between align-items-start gap-2"><div class="ms-2 me-auto">Rhombus</div>
                <div>${rhombusArea}cm<sup>2</sup></div>
                <button class="btn btn-primary btn-sm">
                  Convert to m <sup>2</sup>
                </button> </li>`;

    document.getElementById("resultShow").innerHTML += text;
  }
});

// step-5: Pentagon value
document.getElementById("pentagonBtn").addEventListener("click", function () {
  const PentagonP = document.getElementById("pentagonP").value;
  const PentagonPParse = parseFloat(PentagonP);
  const PentagonB = document.getElementById("pentagonB").value;
  const PentagonBParse = parseFloat(PentagonB);

  const pentagonArea = validationGeomaetry(PentagonBParse, PentagonPParse);
  const text = `<li class= "list-group-item d-flex justify-content-between align-items-start gap-2"><div class="ms-2 me-auto">Pentagon</div>
                <div>${pentagonArea}cm<sup>2</sup></div>
                <button class="btn btn-primary btn-sm">
                  Convert to m <sup>2</sup>
                </button> </li>`;

  document.getElementById("resultShow").innerHTML += text;
});

// step-6: Ellipse value
document.getElementById("ellipseBtn").addEventListener("click", function () {
  const ellipseA = document.getElementById("ellipseA").value;
  const ellipseAParse = parseFloat(ellipseA);
  const ellipseB = document.getElementById("ellipseB").value;
  const ellipseBParse = parseFloat(ellipseB);

  if (
    isNaN(ellipseAParse) ||
    isNaN(ellipseBParse) ||
    ellipseA < 1 ||
    ellipseB < 1
  ) {
    alert("Input is required, must be a positve number");
  } else {
    const ellipseArea = (3.1416 * ellipseAParse * ellipseBParse).toFixed(2);
    const text = `<li class= "list-group-item d-flex justify-content-between align-items-start gap-2"><div class="ms-2 me-auto">Elipse</div>
                <div>${ellipseArea}cm<sup>2</sup></div>
                <button class="btn btn-primary btn-sm">
                  Convert to m <sup>2</sup>
                </button> </li>`;

    document.getElementById("resultShow").innerHTML += text;
  }
});
