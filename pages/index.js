document.addEventListener('DOMContentLoaded', () => {

    const url = 'http://localhost:3000/sala'
    
    axios.get(url)
        .then(response => {
            console.log(response.data[0].nombre)
            sala = response.data
            let divSala = document.getElementById('salas')
            let tarjetasSala = '<div class="columns">'

            for (let i = 0; i < sala.length; i++) {
                tarjetasSala += `
                <div class="column is-one-fifth">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    ${i + 1}. ${sala[i].nombre}
                                </p>
                            </header>
                        </div>
                </div>
                `
            }
            tarjetasSala += '</div>'
            divSala.innerHTML = tarjetasSala

        })
        .catch(err => console.log(err))
})


window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});