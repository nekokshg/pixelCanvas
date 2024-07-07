//Function to calculate the number of 16px by 16px blocks per height and width in px
//Takes into account of partial blocks
//Ex: calculateBlocks(82, 16) => { blocksX: 5.125, blocksY: 1 }

export function calculateBlocks(width, height) {
    const blockSize = 16;
    const blocksX = width / blockSize;
    const blocksY = height / blockSize;
    return { blocksX, blocksY };
}