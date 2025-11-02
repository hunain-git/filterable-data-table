const productData = [
    { name: "Laptop Pro 13", category: "Computers", price: 1299.99 },
    { name: "Smartphone X", category: "Phones", price: 899.00 },
    { name: "Wireless Headphones", category: "Audio", price: 199.50 },
    { name: "Mechanical Keyboard", category: "Peripherals", price: 120.00 },
    { name: "27-inch Monitor", category: "Displays", price: 349.99 },
    { name: "Gaming Mouse", category: "Peripherals", price: 75.00 },
    { name: "Smart Watch V2", category: "Wearables", price: 249.00 },
    { name: "Portable SSD 1TB", category: "Storage", price: 95.00 },
    { name: "Charging Cable (USB-C)", category: "Accessories", price: 15.00 },
    { name: "Tablet Lite", category: "Tablets", price: 320.00 },
    { name: "Bluetooth Speaker", category: "Audio", price: 85.99 }
];

// --- 2. DOM ELEMENT REFERENCES --- ??

const searchInput = document.getElementById('search-input');
const tableBody = document.getElementById('table-body');
const noResultsMessage = document.getElementById('no-results');

// --- 3. RENDERING FUNCTION (DOM Manipulation) --- //
/** Renders the given array of product data into the HTML table body. /
 
 @param {Array<Object>} dataArray 
 */
function renderTable(dataArray) {

    tableBody.innerHTML = '';

    if (dataArray.length === 0) {
        noResultsMessage.classList.remove('hidden');
        return;
    }

    noResultsMessage.classList.add('hidden');


    dataArray.forEach(product => {
        const row = document.createElement('tr');
        row.className = "text-gray-700"; 

        // -- Create and populate the cells (td) --//
        
        const nameCell = document.createElement('td');
        nameCell.textContent = product.name;
        row.appendChild(nameCell);

        const categoryCell = document.createElement('td');
        categoryCell.textContent = product.category;
        row.appendChild(categoryCell);

        const priceCell = document.createElement('td');
        priceCell.className = "text-right font-semibold";

        priceCell.textContent = `$${product.price.toFixed(2)}`;
        row.appendChild(priceCell);

        tableBody.appendChild(row);
    });
}

// --- 4. FILTERING LOGIC (Array Filtering) --- //

function handleFilter() {
    const searchTerm = searchInput.value.toLowerCase().trim();


    if (searchTerm === '') {
        renderTable(productData);
        return;
    }

    const filteredData = productData.filter(product => {

        const searchableText = [
            product.name, 
            product.category, 
            String(product.price) 
        ].join(' ').toLowerCase();


        return searchableText.includes(searchTerm);
    });


    renderTable(filteredData);
}

// --- 5. INITIALIZATION --- //

searchInput.addEventListener('keyup', handleFilter);
window.onload = () => {
    renderTable(productData);
};