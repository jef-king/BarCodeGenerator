function updateBarcodes() {
    const prefix = document.getElementById('prefixInput').value;
    const startNum = parseInt(document.getElementById('startNum').value) || 1;
    const totalCount = parseInt(document.getElementById('totalCount').value) || 100;
    const cols = parseInt(document.getElementById('gridCols').value) || 5;
    const barWidth = parseFloat(document.getElementById('barWidth').value) || 1;
    const barHeight = parseInt(document.getElementById('barHeight').value) || 15;
    const barColor = document.getElementById('barColor').value;
    const gridSpacing = parseInt(document.getElementById('gridSpacing').value) || 0;

    const gridContainer = document.getElementById('barcodeGridContainer');

    gridContainer.style.gridTemplateColumns = `repeat(${cols}, minmax(0, 1fr))`;
    gridContainer.style.gap = `${gridSpacing}px`;
    gridContainer.innerHTML = '';

    document.getElementById('itemCountDisplay').textContent = totalCount;

    const approxPages = Math.ceil(totalCount / (cols * 20));
    document.getElementById('pageCountDisplay').textContent = `Est. Pages: ${approxPages}`;

    for (let i = 0; i < totalCount; i++) {
        const currentNum = startNum + i;
        const barcodeValue = prefix + currentNum;

        const cell = document.createElement('div');
        cell.className = "flex flex-col items-center justify-center p-1.5 border border-slate-200 rounded bg-white text-center overflow-hidden h-full";

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.id = `barcode-${i}`;
        cell.appendChild(svg);

        gridContainer.appendChild(cell);

        try {
            JsBarcode(svg, barcodeValue, {
                format: 'CODE128',
                lineColor: barColor,
                width: barWidth,
                height: barHeight,
                displayValue: true,
                fontSize: 10,
                margin: 2
            });
        } catch (e) {
            cell.innerHTML = `<span class="text-[10px] text-red-500 font-semibold">Invalid: ${barcodeValue}</span>`;
        }
    }
}

window.onload = function() {
    updateBarcodes();
};