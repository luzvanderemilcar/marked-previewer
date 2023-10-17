// Element setup
const Editor = document.querySelector("#editor-div");
const Preview = document.querySelector("#preview-div");
const editorField = document.querySelector("#editor");
const previewBody = document.querySelector("#preview.card-body");
const ViewController = document.querySelector("#view-controller");
const Eraser = document.querySelector("#eraser");
const copyMarkedButton = document.querySelector("#copy-text");
const copyHTMLButton = document.querySelector("#copy-html");

let smallScreen;

// Event Listeners
editorField.addEventListener("input", updateValue);

ViewController.addEventListener("click", toggleView);

Eraser.addEventListener("click", () => {
    previewBody.innerHTML = "";
    editorField.value = "";
});

copyMarkedButton.addEventListener("click", copyMarkedText);
copyHTMLButton.addEventListener("click", copyHTMLText);

function updateValue(e) {
    previewBody.innerHTML = DOMPurify.sanitize(marked.parse(e.target.value));
}



// switch view between editor and preview 
function toggleView() {
    if (smallScreen) {
        if (Editor.style.display == "none") {
            Preview.style.display = "none"
            Editor.style.display = "block";
            ViewController.innerHTML = '<i class="fa-regular fa-eye"></i>';
        } else {
            Preview.style.display = "block";
            Editor.style.display = "none";
            ViewController.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
        }
    } else {
        if (Editor.style.display == "none") {
            Editor.style.display = "block";
        }
        if (Preview.style.display == "block") {
            Preview.style.display = "none";
            ViewController.innerHTML = '<i class="fa-regular fa-eye"></i>';
        } else {
            Preview.style.display = "block";
            ViewController.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
        }
    }
}

// Check the size of screen base on media query
function screenWidthStateLever(media) {
    if (media.matches) {
        smallScreen = true;
    } else {
        smallScreen = false;
    }
}

function copyMarkedText() {
    const cb = navigator.clipboard;
    if (editorField.value.length > 0) {
    cb.writeText(editorField.value).then(() => alert('Marked Text copied'));
    }
}

function copyHTMLText() {
    const cb = navigator.clipboard;
    if (editorField.value.length > 0) {
    cb.writeText(previewBody.innerHTML).then(() => alert('HTML Text copied'));
    }
}
const smallScreenMedia = window.matchMedia("(max-width: 500px)");

screenWidthStateLever(smallScreenMedia);
smallScreenMedia.addListener(screenWidthStateLever);