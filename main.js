import * as NeptuneJS from "./node_modules/neptunecss-js/neptune.min.js"

// Create Github Button
const gitHubButton = new NeptuneJS.Link({
    parent: "#button-box",
    text: "GitHub",
    size: "m",
    style: "primary",
    href: "https://github.com/neptune-css"
});

// Create NPM Button
const npmButton = new NeptuneJS.Link({
    parent: "#button-box",
    text: "NPM",
    size: "m",
    style: "primary",
    href: "https://www.npmjs.com/package/neptunecss"
});

// Create VS Code Button
const vscodeButton = new NeptuneJS.Link({
    parent: "#button-box",
    text: "VS Code Marketplace",
    size: "m",
    style: "primary",
    href: "https://marketplace.visualstudio.com/items?itemName=NeptuneCSS.neptunecss-snippets"
});

function openURL(url) {
    
}