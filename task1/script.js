

const data = [
    { id: 1, name: 'Jawahar', age: 30 },
    { id: 2, name: 'dos', age: 25 },
    { id: 3, name: 'Smithe', age: 40 },
    { id: 4, name: 'Johnson', age: 35 },
    { id: 5, name: 'Ajith', age: 28 },
    { id: 6, name: 'David', age: 32 },
    { id: 7, name: 'Vijay', age: 27 },
    { id: 8, name: 'Suriya', age: 31 },
];

const itemsPerPage = 3;
let currentPage = 1;

function renderTable(pageNumber) {
    const tableBody = document.querySelector('#myTable tbody');
    tableBody.innerHTML = '';

    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = data.slice(startIndex, endIndex);

    paginatedData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item.id}</td><td>${item.name}</td><td>${item.age}</td>`;
        tableBody.appendChild(row);
    });
}

function renderPaginationButtons() {
    const totalButtons = Math.ceil(data.length / itemsPerPage);
    const paginationButtons = document.querySelector('#paginationButtons');
    paginationButtons.innerHTML = '';

    for (let i = 1; i <= totalButtons; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', function() {
            currentPage = i;
            renderTable(currentPage);
        });
        paginationButtons.appendChild(button);
    }
}

function sortTable(columnIndex) {
    data.sort((a, b) => {
        const aValue = a[Object.keys(a)[columnIndex]];
        const bValue = b[Object.keys(b)[columnIndex]];
        if (typeof aValue === 'string' && typeof bValue === 'string') {
            return aValue.localeCompare(bValue);
        }
        return aValue - bValue;
    });

    renderTable(currentPage);
}

renderTable(currentPage);
renderPaginationButtons();
