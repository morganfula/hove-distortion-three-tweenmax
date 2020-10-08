const hoverDistort = new hoverEffect({
  parent: document.querySelector(".wrapper"),
  intensity: 0.9,
  image1: "img-1.jpg",
  image2: "img-2.jpg",
  displacementImage: "1.png",
});

let Size = 0.001;

function IncreaseSize() {
  const elem = document.getElementById("text");
  const text = new Blotter.Text("Other", {
    family: "Nothing You Could Do",
    weight: 100,
    size: 180,
    fill: "white",
  });

  const material = new Blotter.RollingDistortMaterial();

  material.uniforms.uSineDistortAmplitude.value = 0.04;

  const blotter = new Blotter(material, {
    texts: text,
  });

  const scope = blotter.forText(text);

  scope.appendTo(elem);

  Size += 0.001;
}

IncreaseSize();
