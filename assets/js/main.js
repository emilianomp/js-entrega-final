/**
 *
 * Proyecto Final - Curso Javascript - Codehouse 
 * Estructura del simulador
 * 
 * Objetivos generales
 * 
 * Crear un simulador interactivo
 * Ecommerce de Vinos
 *
 * 
 * @link        https://gitlab.com
 * @since       1.0.0
 * 
 * @package     EMP
 * @base        Ignacion Basilio <ignacio.n.basilio.b@gmail.com.> 
 * @base_api    https://api.sampleapis.com/wines/reds
 * @author      Emiliano Mendoza Peña <developer2030emp@gmail.com>
 * @comision    65340 - JavaScript en Coderhouse
 */

// Toggle the cart visibility when clicking the cart icon
document.getElementById("empWines_cartIcon").addEventListener("click", () => {
    document.getElementById("carrito").classList.toggle("active");
});

// Initialize the shopping cart from localStorage, or start with an empty array
let Carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Fetch wine data from the API
fetch('https://api.sampleapis.com/wines/reds') // Fetching red wines from the API
    .then(response => response.json()) // Parse the JSON response
    .then(data => {


        // Map the API data to match your required format
        const productosWines = data.map((wine, index) => ({
            id: index + 1,
            winery: wine.winery || 'Unknown Winery',
            wine: wine.wine || 'Unknown Wine',
            location: wine.location || 'Unknown Country',
            image: wine.image || 'Unknown Image',
            price: Math.floor(Math.random() * (2500 - 1000 + 1)) + 1000, // Random price between 1000 and 2500
        }));

        // Insert the wines into the DOM
        const productos = document.getElementById("productos");
        productosWines.forEach(el => {
            productos.innerHTML += `
                <div id="${el.id}" class="producto">
                    <div class="img">
                        <img src="${el.image}" alt="${el.winery} - ${el.wine} - ${el.location}" />
                    </div>
                    <h3 class="h6 text-uppercase">${el.winery}</h3>
                    <h4 class="h6"><strong>${el.wine}</strong></h4>
                    <p>Precio: $<span>${el.price}</span></p>
                    <p>Pais: ${el.location}</p>
                    <button class="botonesCompra btn btn-dark">Comprar</button>
                </div>
            `;
        });

        // Set up event listeners for adding products to the cart
        botonesComprar();
        actualizadoraCarrito();
    })
    .catch(error => {
        console.error('Error fetching wine data:', error);
    });

// DOM elements
const productosCarrito = document.getElementById("productosCarrito");
const total = document.getElementById("total");
const empWines_cartIcon = document.getElementById("empWines_cartIcon");
const botonQueLimpia = document.getElementById("botonQueLimpia");
const terminarCompraBoton = document.getElementById("terminarCompraBoton");

// Function to handle adding products to the cart
function botonesComprar() {
    const botones = document.getElementsByClassName("botonesCompra");
    const arrayBotones = Array.from(botones);

    arrayBotones.forEach(el => {
        el.addEventListener("click", (evento) => {
            const id = Number(evento.target.parentElement.id);
            const winery = evento.target.parentElement.children[1].innerText;
            const wine = evento.target.parentElement.children[2].innerText;
            const price = Number(evento.target.parentElement.children[3].children[0].innerText);

            // Find the product in the cart by id
            let productoABuscar = Carrito.find(el => el.id === id);

            // If the wine is already in the cart, increment the quantity
            if (productoABuscar) {
                productoABuscar.cantidad++;
            } else {
                // If the wine is not in the cart, initialize it with the correct properties
                Carrito.push({
                    id: id,
                    winery: winery,
                    wine: wine,
                    price: price,
                    cantidad: 1, // Always initialize cantidad to 1 when a new wine is added
                });
            }

            // Update the cart UI
            actualizadoraCarrito();
        });
    });
}

// Function to handle removing products from the cart
function botonEliminar() {
    const botones = document.getElementsByClassName("botonesEliminar");
    const arrayBotones = Array.from(botones);

    arrayBotones.forEach((button) => {
        button.addEventListener("click", () => {
            const id = Number(button.dataset.id); // Use data-id for matching

            // Find the index of the item by id
            const itemIndex = Carrito.findIndex(item => item.id === id);

            if (itemIndex !== -1) {
                // Reduce quantity or remove item
                if (Carrito[itemIndex].cantidad > 1) {
                    Carrito[itemIndex].cantidad--;
                } else {
                    Carrito.splice(itemIndex, 1); // Remove the item if quantity is 1
                }
            }

            actualizadoraCarrito(); // Update the cart UI
        });
    });
}

// Function to update the cart display
function actualizadoraCarrito() {
    productosCarrito.innerHTML = ""; // Clear current cart items

    // Loop through each item in the cart and display it
    Carrito.forEach(el => {
        productosCarrito.innerHTML += `
            <div class="producto">
                <h4>${el.wine}</h4>
                <p>Precio: $${el.price}</p>
                <p>Cantidad: ${el.cantidad}</p>
                <button class="botonesEliminar btn btn-dark" data-id="${el.id}">X</button>
            </div>
        `;
    });

    // Update the total price and cart item count
    total.innerText = Carrito.reduce((acc, el) => acc + el.price * el.cantidad, 0);

    empWines_cartIcon.children[0].innerText = Carrito.reduce((acc, el) => acc + el.cantidad, 0);

    // Save the updated cart to localStorage
    localStorage.setItem("carrito", JSON.stringify(Carrito));

    // Reattach event listeners for the "Eliminar" buttons
    botonEliminar();
}

// Function to clear the cart
botonQueLimpia.addEventListener("click", () => {
    Carrito = []; // Clear the cart array
    localStorage.clear(); // Clear the localStorage
    actualizadoraCarrito(); // Update the UI
});

// Function to handle finishing the purchase
terminarCompraBoton.addEventListener("click", () => {
    if (Carrito.length === 0) {
        Swal.fire({
            title: "No tienes nada en el carrito",
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false,
            imageUrl: "https://media1.tenor.com/m/q-E5wj1K6OYAAAAd/monsters-inc-sully.gif",
        });
    } else {
        Swal.fire({
            title: "Gracias por su compra",
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false,
            imageUrl: "https://media.tenor.com/Cyi2zT7wcmcAAAAj/pentol-gif-eak.gif",
        });
    }

    // Clear the cart after purchase
    Carrito = [];
    actualizadoraCarrito(); // Update the cart UI
});