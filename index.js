"use strict"

document.getElementById("submit-btn").addEventListener("click", pickColor)

const schemeMode = document.getElementById("color-scheme-type")
const colorPalette = document.getElementById("color-palette")
const seedColor = document.getElementById("seed-color")

function pickColor() {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${seedColor.value.slice(1)}&mode=${
      schemeMode.value
    }&count=6
    `
  )
    .then((res) => res.json())
    .then((data) => {
      const colorBar = data.colors
        .map((colors) => {
          return `
                <div style="background-color:${colors.hex.value}" class="color">
                  <div class="color-code">
                    <p id="color-value">${colors.hex.value}</p>
                  </div>
                </div>
        `
        })
        .join("")
      colorPalette.innerHTML = colorBar
    })
}
