const products = [
    { id: "6129", type: "body-sexy", price: 100, name: "Body Sexy", image: "imagenes/BodySexy/6129.png" },
    { id: "6154", type: "body-sexy", price: 500, name: "Body Sexy", image: "imagenes/BodySexy/6154.png" },
    { id: "61116", type: "body-sexy", price: 30, name: "Body Sexy", image: "imagenes/BodySexy/61116.png" },
    { id: "6188", type: "body-sexy", price: 25, name: "Body Sexy", image: "imagenes/BodySexy/6188.png" },
    { id: "6141", type: "body-sexy", price: 30, name: "Body Sexy", image: "imagenes/BodySexy/6141.png" },
    { id: "6147", type: "body-sexy", price: 25, name: "Body Sexy", image: "imagenes/BodySexy/6147.png" },
    { id: "6591", type: "body-sexy", price: 25, name: "Body Sexy", image: "imagenes/BodySexy/6591.png" },
    { id: "65737", type: "body-sexy", price: 25, name: "Body Sexy", image: "imagenes/BodySexy/65737.png" },
    { id: "60240Z", type: "body-sexy", price: 30, name: "Body Sexy", image: "imagenes/BodySexy/60240Z.png" },
    { id: "61124", type: "body-sexy", price: 25, name: "Body Sexy", image: "imagenes/BodySexy/61124.png" },
    { id: "65925", type: "body-sexy", price: 25, name: "Body Sexy", image: "imagenes/BodySexy/65925.png" },
    { id: "6159", type: "body-sexy", price: 25, name: "Body Sexy", image: "imagenes/BodySexy/6159.png" },
    { id: "6164", type: "body-sexy", price: 25, name: "Body Sexy", image: "imagenes/BodySexy/6164.png" },
    { id: "65927", type: "body-sexy", price: 25, name: "Body Sexy", image: "imagenes/BodySexy/65927.png" },
    { id: "61100", type: "body-sexy", price: 25, name: "Body Sexy", image: "imagenes/BodySexy/61100.png" },
    { id: "6180", type: "body-sexy", price: 25, name: "Body Sexy", image: "imagenes/BodySexy/6180.png" },
    { id: "6172", type: "body-sexy", price: 25, name: "Body Sexy", image: "imagenes/BodySexy/6172.png" },
    { id: "6160", type: "body-sexy", price: 25, name: "Body Sexy", image: "imagenes/BodySexy/6160.png" },
    { id: "6162", type: "body-sexy", price: 30, name: "Body Sexy", image: "imagenes/BodySexy/6162.png" },
    { id: "6150", type: "body-sexy", price: 25, name: "Body Sexy", image: "imagenes/BodySexy/6150.png" },
    { id: "7126", type: "body-sexy", price: 25, name: "Body Sexy", image: "imagenes/BodySexy/7126.png" },
    { id: "6140", type: "body-sexy", price: 25, name: "Body Sexy", image: "imagenes/BodySexy/6140.png" },

    //con mangas
    { id: "6074ZT", type: "body-sexy-mangas", price: 30, name: "Body Sexy con Mangas", image:"imagenes/BodySexyConMangas/6074ZT.png" },
    { id: "6133", type: "body-sexy-mangas", price: 35, name: "Body Sexy con Mangas", image:"imagenes/BodySexyConMangas/6133.png" },
    { id: "6135", type: "body-sexy-mangas", price: 30, name: "Body Sexy con Mangas", image:"imagenes/BodySexyConMangas/6135.png" },
    { id: "6139", type: "body-sexy-mangas", price: 30, name: "Body Sexy con Mangas", image:"imagenes/BodySexyConMangas/6139.png" },
    { id: "6158", type: "body-sexy-mangas", price: 30, name: "Body Sexy con Mangas", image:"imagenes/BodySexyConMangas/6158.png" },
    { id: "6168", type: "body-sexy-mangas", price: 25, name: "Body Sexy con Mangas", image:"imagenes/BodySexyConMangas/6168.png" },
    { id: "6174", type: "body-sexy-mangas", price: 30, name: "Body Sexy con Mangas", image:"imagenes/BodySexyConMangas/6174.png" },
    { id: "6177", type: "body-sexy-mangas", price: 35, name: "Body Sexy con Mangas", image:"imagenes/BodySexyConMangas/6177.png" },
    { id: "7129", type: "body-sexy-mangas", price: 25, name: "Body Sexy con Mangas", image:"imagenes/BodySexyConMangas/7129.png" },
    { id: "60115Z", type: "body-sexy-mangas", price: 30, name: "Body Sexy con Mangas", image:"imagenes/BodySexyConMangas/60115Z.png" },
    { id: "65745", type: "body-sexy-mangas", price: 25, name: "Body Sexy con Mangas", image:"imagenes/BodySexyConMangas/65745.png" },

    //enterizos
    { id: "8803", type: "body-sexy-enterizo", price: 30, name: "Body Sexy Enterizo", image:"imagenes/BodySexyEnterisos/8803.png" },
    { id: "8806TZ", type: "body-sexy-enterizo", price: 30, name: "Body Sexy Enterizo", image:"imagenes/BodySexyEnterisos/8806TZ.png" },
    
    // piernas cubiertas
    { id: "7112", type: "body-sexy-piernas", price: 25, name: "Body Sexy Piernas Cubiertas", image:"imagenes/BodySexyPiernasCubiertas/7112.png" },
    { id: "7114", type: "body-sexy-piernas", price: 25, name: "Body Sexy Piernas Cubiertas", image:"imagenes/BodySexyPiernasCubiertas/7114.png" },
    { id: "7121", type: "body-sexy-piernas", price: 35, name: "Body Sexy Piernas Cubiertas", image:"imagenes/BodySexyPiernasCubiertas/7121.png" },
    { id: "7525", type: "body-sexy-piernas", price: 30, name: "Body Sexy Piernas Cubiertas", image:"imagenes/BodySexyPiernasCubiertas/7525.png" },

    // sets Dos Piezas
    { id: "65798", type: "set-dos-piezas", price: 35, name: "Sets dos Piezas", image:"imagenes/SetsDosPiezas/65798.png" },
    { id: "70251", type: "set-dos-piezas", price: 45, name: "Sets dos Piezas", image:"imagenes/SetsDosPiezas/70251.png" }
];


let currentPriceFilter = "";
let currentTypeFilter = "";
let currentSelectedButton = null;

function renderProducts() {
    const catalog = document.getElementById("catalog");
    catalog.innerHTML = "";

    const filteredProducts = products.filter(product => {
        return (currentPriceFilter ? product.price == currentPriceFilter : true) &&
            (currentTypeFilter ? product.type == currentTypeFilter : true);
    });

    filteredProducts.forEach(product => {
        const productElement = document.createElement("div");
        productElement.className = "product";
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p class="price">S/.${product.price}</p>
            <p class="code">Código: ${product.id}</p>
            <button onclick="copyCode('${product.name}  Código: ${product.id}  Precio: S/.${product.price}')">Copiar Código</button>
        `;
        catalog.appendChild(productElement);
    });
}

function copyCode(code) {
    navigator.clipboard.writeText(code).then(() => {
        alert("Código copiado: " + code);
    });
}

document.querySelectorAll(".filter-button").forEach(button => {
    button.addEventListener("click", (e) => {
        const price = e.target.getAttribute("data-price");
        const type = e.target.getAttribute("data-type");

        if (price !== null) {
            currentPriceFilter = price;
        }

        if (type !== null) {
            currentTypeFilter = type;
        }

        renderProducts();

        // Cambiar el color del botón seleccionado
        if (currentSelectedButton) {
            currentSelectedButton.classList.remove("selected");
        }
        e.target.classList.add("selected");
        currentSelectedButton = e.target;
    });
});

// Inicializar la vista con todos los productos
renderProducts();