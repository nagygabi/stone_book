function pageLoaded() {
  const root = document.getElementById("root");
  let notes = [];

  //a tömbbe tolunk bele információt a push-sal, csinálunk egy objektumot, de nem változóval, hanem notes.push

  notes.push({
    tag: "div",
    content: `
    <h2>HTML</h2>
    1. div helyett szemantikus elemek (header, nav stb.) használata, <br>
    2. egybeágyazása a tageknek (div-ben p)<br>
    3. block és inline elemek 
    `,
  });
  notes.push({
    tag: "code",
    content: `
    header, nav, main, footer<br>
    h1, p, div, ul<br>
    span, button, img<hr>
    `,
  });

  notes.push({
    tag: "div",
    content: `
    <h2>CSS</h2>
    1. css reset<br>
    2. position absolue-relative pontos értése, mit mihez viszonyítunk<br>
    3. selectorok (pl. div.class vagy div class) használata
    `,
  });
  notes.push({
    tag: "code",
    content: `
    box-sizing: border-box, margin, padding: 0; <br>
    h1 {position: absolute;}<br>
    div.class{}<hr>
    `,
  });

  notes.push({
    tag: "div",
    content: `
    <h2>JS</h2>
    1.hogyan írjuk bele az elemet a rootba<br>
    2. a for használata<br>
    3. érték kiíratása
    `,
  });

  notes.push({
    tag: "code",
    content: `
    function newItem(){root.insertAdjacenmentHTML("beforeend", row);}<br>
    for (let index = 0; index < array.length; index++) {const element = array[index];} <hr>
    
    `,
  });

  notes.push({
    tag: "div",
    content: `
    <h2>Általánosan</h2>
    1. tervezés<br>
    2. strukturálás<br>
    3. tiszta kód (tabolás, kommentelés, változónevek használata)
    `,
  });

  for (note of notes) {
    root.insertAdjacentHTML(
      "beforeend",
      `
    <${note.tag}>${note.content}</${note.tag}>
    
    `
    );
  }
}
window.addEventListener("load", pageLoaded);
