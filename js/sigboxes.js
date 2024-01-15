class SignatureBox {
  constructor(obj) {
    this.wrapper = obj;
    this.clearButton = this.wrapper.querySelector("[data-action=clear]");
    this.changeBackgroundColorButton = this.wrapper.querySelector(
      "[data-action=change-background-color]"
    );
    this.changeColorButton = this.wrapper.querySelector(
      "[data-action=change-color]"
    );
    this.changeWidthButton = this.wrapper.querySelector(
      "[data-action=change-width]"
    );
    this.undoButton = this.wrapper.querySelector("[data-action=undo]");
    this.savePNGButton = this.wrapper.querySelector("[data-action=save-png]");
    this.saveJPGButton = this.wrapper.querySelector("[data-action=save-jpg]");
    this.saveSVGButton = this.wrapper.querySelector("[data-action=save-svg]");
    this.saveSVGWithBackgroundButton = this.wrapper.querySelector(
      "[data-action=save-svg-with-background]"
    );
    this.canvas = this.wrapper.querySelector("canvas");
    this.signaturePad = new SignaturePad(this.canvas, {
      // It's Necessary to use an opaque color when saving image as JPEG;
      // this option can be omitted if only saving as PNG or SVG
      backgroundColor: "rgb(255, 255, 255)",
    });
    if (this.clearButton) {
        this.clearButton.addEventListener("click", () => {
            signaturePad.clear();
          });
          
    }
  }

   resizeCanvas() {
    // When zoomed out to less than 100%, for some very strange reason,
    // some browsers report devicePixelRatio as less than 1
    // and only part of the canvas is cleared then.
    const ratio =  Math.max(window.devicePixelRatio || 1, 1);
  
    // This part causes the canvas to be cleared
    this.canvas.width = this.canvas.offsetWidth * ratio;
    this.canvas.height = this.canvas.offsetHeight * ratio;
    this.canvas.getContext("2d").scale(ratio, ratio);
  
    // This library does not listen for canvas changes, so after the canvas is automatically
    // cleared by the browser, SignaturePad#isEmpty might still return false, even though the
    // canvas looks empty, because the internal data of this library wasn't cleared. To make sure
    // that the state of this library is consistent with visual state of the canvas, you
    // have to clear it manually.
    //signaturePad.clear();
    
    // If you want to keep the drawing on resize instead of clearing it you can reset the data.
    this.signaturePad.fromData(signaturePad.toData());
  }
  
}

function signBoxes() {
  const boxes = document.querySelectorAll('.sigbox');
  const box = [];
  for (let i = 0; i < boxes.length; i++) {
    box.push(new SignatureBox(boxes[i]));
  }
}
