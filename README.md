# BarCodeGenerator

[Link](https://jef-king.github.io/BarCodeGenerator/)

BarCodeGenerator is a browser-based tool for creating batches of printable CODE128 barcodes. Configure a numbered series, preview the generated labels, and print the sheet on A4 paper.

## Project Scope

The project is a small client-side utility. It generates CODE128 barcodes only; it does not create QR codes or other barcode formats, store generated data, or require a server-side application.

## Features

- Generate up to 500 sequential barcodes in one batch.
- Add a text prefix and choose the starting number.
- Set the number of columns and spacing between barcode cells.
- Adjust bar width, barcode height, and bar color.
- Preview the generated sheet and estimated page count as settings change.
- Print the sheet using an A4 portrait print layout.

## Use

Open `index.html` in a modern web browser. Set the prefix, start number, total count, and visual options in the configuration panel. Use **Print A4 Sheet** to open the browser's print dialog.

The page loads Tailwind CSS, Montserrat, and JsBarcode from CDNs, so an internet connection is needed for all external resources to load. No package installation or build step is required.

## Project Files

- `index.html` contains the page structure and search/social metadata.
- `styles.css` contains custom scrollbar and print styles.
- `script.js` builds the barcode grid and renders each barcode with JsBarcode.
