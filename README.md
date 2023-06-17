# Neptune CSS - Quick Start

![readme_banner_quickstart](https://github.com/neptune-css/branding-resources/blob/main/Banner/GitHub/readme_banner_quickstart.png)

Welcome to the Quick Start guide for Neptune CSS framework! This README provides all the information you need to get started with Neptune CSS and quickly style your web projects.

## What is Neptune CSS?

Neptune CSS is a powerful CSS framework designed to facilitate the development of modern and responsive websites. It offers a variety of pre-built components, styles, and layouts to help you create visually appealing web pages.

## Prerequisites

Before getting started with Neptune CSS, make sure you have the following prerequisites:

- A current version of HTML, CSS and JavaScript
- A text editor of your choice
- Basic understanding of HTML, CSS and JavaScript

## Installation

You can install Neptune CSS using either NPM or via a CDN.

### Option 1: Clone repository

To clone the repository, run the following commands:

```bash
git clone https://github.com/neptune-css/quickstart.git
```

```bash
cd quickstart
```

```bash
npm install
```

### Option 2: Installation via NPM

To install Neptune CSS using NPM, open your terminal or command prompt and run the following command:

```bash
npm install neptunecss
```

```bash
npm install neptunecss-js
```

After the installation is complete, you can import Neptune CSS into your project:

```javascript
import { Button } from 'path/to/your/neptune.min.css';
```

Now you can use the button class like:

```javascript
const myButton = new Button({
    // Configuration
});
```

You can find more information [here](https://neptune-css.gitbook.io/neptune-css-docs/neptune-js).

### Option 3: CDN Integration

Alternatively, you can integrate Neptune CSS via a Content Delivery Network (CDN). Add the following links to the head section of your HTML file:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/neptunecss@latest/neptune.min.css">
```

```html
<script src="https://cdn.jsdelivr.net/npm/neptunecss-js@latest/neptune.min.js"></script>
```

## Usage

Once you have successfully included Neptune CSS in your project, you can start using its styles and components. Simply add the appropriate CSS classes to your HTML elements.

```html
<button class="button button-m">
    <span class="nutton-text">Default M</span>
</button>
```

## Customization

You can customize Neptune CSS to give your project a personal touch. Modify the colors, fonts, and other style properties by overriding the corresponding CSS classes.

```html
<link rel="stylesheet" href="path/to/your/custom.css">
```

```css
/* Example customizations in custom.css */
/* Default button */
button {
    position: relative;
    box-sizing: border-box;
    border-radius: var(--rounded-m);
    border: none;
    max-width: 450px;
    position: relative;
    transition: var(--transition-duration);
}

button .button-text {
    color: var(--text-button);
}
```

## Documentation

For more information on using and customizing Neptune CSS, refer to the official documentation. Visit the website at https://neptunecss.org for detailed guides and examples.

## Contributors

If you would like to contribute to Neptune CSS, visit the official GitHub repository at https://github.com/neptune-css/neptune-css. We welcome contributions, suggestions, and bug reports from the community.

Enjoy using Neptune CSS for your web projects!
