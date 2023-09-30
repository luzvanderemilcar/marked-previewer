
const defaultInput = "# Text highlights\n\n____\n" +
"## Bold\n\nStrong emphasis can be achieved by using the `<strong>` tag inside the HTML code. This change the text weight of the text inside the tags (opening and closing tags)." + "> *Example*\ > `<strong>Bolded Text</strong>`\n \t> Output: **Bolded Text**\n" + "[Text Highlight - More on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong) \n" +
"1. To make stand out  2. To differ 3. To emphasize \n " + " 'span' \n " + " 	> Note :  \n" + "![lamp image](https://www.w3schools.com/images/lamp.jpg)\n" + " **Hint!**\nYou can use CSS property *text-weight* and set it's value to *bold* to achieve visual highlights with CSS." +
"\`\`\` \n selector {\n text-weight: bold \n}\`\`\` \n";

// Element setup
const Editor = document.querySelector("#editor-div");
const Preview = document.querySelector("#preview-div");
const editorField = document.querySelector("#editor");
const previewBody = document.querySelector("#preview.card-body");
const ViewController = document.querySelector("#view-controller");
const Eraser = document.querySelector("#eraser");

editorField.innerHTML = defaultInput;
previewBody.innerHTML = DOMPurify.sanitize(marked.parse(editorField.innerHTML));

editorField.addEventListener("input", updateValue);

ViewController.addEventListener("click", toggleView);

Eraser.addEventListener("click", ()=> {
  editorField.innerHTML = "";
  previewBody.innerHTML = ""
});

function updateValue(e) {
  previewBody.innerHTML = DOMPurify.sanitize(marked.parse(e.target.value));
}

// switch view between editor and preview 
function toggleView() {
  if (Preview.style.display == "none") {
Preview.style.display = "block";
Editor.style.display = "none";
ViewController.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
  } else {
Preview.style.display = "none"
Editor.style.display = "block";
ViewController.innerHTML = '<i class="fa-regular fa-eye"></i>';
  }
}
