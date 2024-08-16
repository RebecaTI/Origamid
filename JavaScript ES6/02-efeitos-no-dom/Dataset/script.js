const div = document.querySelector('[data-cor]');

div.dataset.height = 1000;

delete div.dataset.height

div.dataset.totalHeight = 2000;

console.log(div.dataset)