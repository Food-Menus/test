const sheetID = '1ugEQGVWUYlnd3che6zaLcI8oJ_qobiZwBljVYPGEiis'; // استبدل بـ ID الخاص بجدولك
const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:json`;


async function fetchProducts() {
    const response = await fetch(base);
    const data = await response.text();
    const json = JSON.parse(data.substring(47).slice(0, -2));
    const products = json.table.rows.map(row => {
        return {
            name: row.c[0].v,
            price: row.c[1].v,
            image: row.c[2] ? row.c[2].v : ''
        };
    });
    return products;
}

async function displayProducts() {
    const products = await fetchProducts();
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        productList.innerHTML += `
            <div class="product">
                <h2>${product.name}</h2>
                <p>السعر: <span>${product.price}</span> ر.س</p>
                ${product.image ? `<img src="${product.image}" alt="${product.name}" style="width:100px;height:auto;" />` : ''}
            </div>
        `;
    });
}

displayProducts();
