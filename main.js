
/**
 *
 * Entrega 2 - Curso Javascript - Codehouse 
 * Estructura del simulador
 * 
 * Objetivos generales
 * 
 * Mostrar tu simulador JS interactuando con HTML
 * Integrar las herramientas JS aprendidas hasta aquí
 * Objetivos específicos
 * Modifica su estructura anterior, integrando JS con JavaScript mediante el uso de DOM y Eventos.
 * Programa el circuito de interacción completo de la lógica de tu aplicación web, agregando las nuevas herramientas JS aprendidas
 * Guarda tus objetos o arrays de objetos en localstorage para dejar disponible los datos agregados por el usuario ejemplo ( los productos en un carrito de compras )
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


document.getElementById("empWines_cartIcon").addEventListener("click", ()=>{
    document.getElementById("carrito").classList.toggle("active")
})

let Carrito = JSON.parse(localStorage.getItem("carrito")) || []

const productosWines = [

    {
        winery: "Maselva",
        wine: "Emporda 2012",
        location: "Spain· Empordà",
        image: "https://images.vivino.com/thumbs/ApnIiXjcT5Kc33OHgNb9dA_375x500.jpg",
        price: 1200,
        id: 1
        },
        {
        winery: "Ernesto Ruffo",
        wine: "Amarone della Valpolicella Riserva N.V.",
        location: "Italy. Amarone della Valpolicella",
        image: "https://images.vivino.com/thumbs/nC9V6L2mQQSq0s-wZLcaxw_pb_x300.png",
        price: 1800,        
        id: 2
        },
        {
        winery: "Cartuxa",
        wine: "Pêra-Manca Tinto 1990",
        location: "Portugal. Alentejo",
        image: "https://images.vivino.com/thumbs/L33jsYUuTMWTMy3KoqQyXg_pb_x300.png",
        price: 3200,
        id: 3
        },
        {
        winery: "Schrader",
        wine: "Cabernet Sauvignon RBS Beckstoffer To Kalon Vineyard 2015",
        location: "United State. Oakville",
        image: "https://images.vivino.com/thumbs/GpcSXs2ERS6niDxoAsvESA_pb_x300.png",
        price: 2400,        
        id: 4
        },
        {
        winery: "Hundred Acre",
        wine: "Wraith Cabernet Sauvignon 2013",
        rating: {
        average: "4.9",
        reviews: "68 ratings"
        },
        location: "United State. Napa Valley",
        image: "https://images.vivino.com/thumbs/PBhGMcRNQ7aVnVNr7VgnWA_pb_x300.png",
        price: 1000,
        id: 5
        },
        {
        winery: "Sine Qua Non",
        wine: "Ratsel Syrah N.V.",
        location: "United State· California",
        image: "https://images.vivino.com/thumbs/ZzMKzqFqRO-6oI3ys3gGgQ_pb_x300.png",
        price: 800,        
        id: 6
        },
        {
        winery: "Del Dotto",
        wine: "The Beast Cabernet Sauvignon 2012",
        location: "United State. Rutherford",
        image: "https://images.vivino.com/thumbs/easjTPIcS-mCQ99XoYOMgQ_pb_x300.png",
        price: 3000,        
        id: 7
        },
        {
        winery: "Darioush",
        wine: "Darius II Cabernet Sauvignon 2016",
        rating: {
        average: "4.9",
        reviews: "59 ratings"
        },
        location: "United State. Napa Valley",
        image: "https://images.vivino.com/thumbs/U19RXtSdRMmoAesl2CBygA_pb_x300.png",
        price: 1200,
        id: 8
        },
        {
        winery: "Garbole",
        wine: "Hurlo 2009",
        location: "Italy. Veneto",
        image: "https://images.vivino.com/thumbs/f_G1SS0eT_C6hZGGwdEZqA_pb_x300.png",
        price: 1200,
        id: 9
        },
        {
        winery: "Scarecrow",
        wine: "Cabernet Sauvignon 2016",
        location: "United State. Rutherford",
        image: "https://images.vivino.com/thumbs/pU7uFKR-TAKAOQaf3Hpn2A_pb_x300.png",
        price: 990,        
        id: 10
        },
        {
        winery: "E. Guigal",
        wine: "Côte-Rôtie La Mouline 1990",
        location: "France. Côte-Rôtie",
        image: "https://images.vivino.com/thumbs/HYVZMFigQ5qXxni7s9SpWw_pb_x300.png",
        price: 1000,        
        id: 11
        },
        {
        winery: "Domaine Armand Rousseau",
        wine: "Chambertin Grand Cru 1993",
        location: "France. Chambertin Grand Cru",
        image: "https://images.vivino.com/thumbs/1XYwrN2-SQqqJlCMSUp3tA_pb_x300.png",
        price: 1000,        
        id: 12
        },
        {
        winery: "Catena Zapata",
        wine: "Estiba Reservada 1994",
        location: "Argentina. Agrelo",
        image: "https://images.vivino.com/thumbs/Yt464jw0QS-ugF7ZQEbE2Q_pb_x300.png",
        price: 940,        
        id: 13
        },
        {
        winery: "Bodegas Valduero",
        wine: "Ribera Del Duero Gran Reserva 12 Años 1999",
        location: "Spain. Ribera del Duero",
        image: "https://images.vivino.com/thumbs/5kJTu3dMQUCEtBy3zIhrKA_pb_x300.png",
        price: 1000,        
        id: 14
        },
]

const productos = document.getElementById("productos")
const productosCarrito = document.getElementById("productosCarrito")
const total = document.getElementById("total")
const empWines_cartIcon = document.getElementById("empWines_cartIcon")
const botonQueLimpia = document.getElementById("botonQueLimpia")

function botonesComprar(){
    const botones = document.getElementsByClassName("botonesCompra")
    const arrayBotones = Array.from(botones)

    arrayBotones.forEach(el => {
        el.addEventListener("click", (evento)=> {
            let winery = evento.target.parentElement.children[0].innerText
            let wine = evento.target.parentElement.children[1].innerText
            let price = Number(evento.target.parentElement.children[3].children[0].innerText)

            let productoABuscar = Carrito.find(el => el.wine == wine)

            if(productoABuscar){
                productoABuscar.cantidad++
            }else{
                Carrito.push({
                    winery: winery,
                    wine: wine,
                    price: price,
                    cantidad: 1
                })
            }

            actualizadoraCarrito()
        })
    })
}

function botonEliminar() {
    const botones = document.getElementsByClassName("botonesEliminar")
    const arrayBotones = Array.from(botones)


    arrayBotones.forEach(el => {
        el.addEventListener("click", (evento) => {
            let wine = evento.target.parentElement.children[1].innerText

            let productoABuscar = Carrito.find(el => el.wine == wine)

            if(productoABuscar.cantidad == 1){
                let index = Carrito.findIndex(el => el.wine == productoABuscar.wine)

                Carrito.splice(index, 1)
            }else{
                productoABuscar.cantidad = productoABuscar.cantidad - 1
            }

            actualizadoraCarrito()
        })
    })
}

function actualizadoraCarrito(){
    productosCarrito.innerHTML = ""
    Carrito.forEach(el => {
        productosCarrito.innerHTML += `
                <div class="producto">
                    <h3>${el.winery}</h3>
                    <h4>${el.wine}</h4>
                    <p>Precio: $${el.price}</p>
                    <p>Cantidad: ${el.cantidad}</p>
                    <button class="botonesEliminar btn btn-dark">X</button>
                </div>
        `
    })

    total.innerText = Carrito.reduce((acc, el)=> {
        return acc + el.price * el.cantidad
    }, 0)

    empWines_cartIcon.children[0].innerText = Carrito.reduce((acc, el)=> {
        return acc + el.cantidad
    }, 0)

    localStorage.setItem("carrito", JSON.stringify(Carrito))

    botonEliminar()
}


botonQueLimpia.addEventListener("click", () => {
    Carrito = []
    localStorage.clear()
    actualizadoraCarrito()
})

document.addEventListener("DOMContentLoaded", () => {
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
        `
    })
    botonesComprar()

    actualizadoraCarrito()
})
