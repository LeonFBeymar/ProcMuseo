document.addEventListener('DOMContentLoaded', () => {

    const url = 'http://localhost:3000/sala'
    
    axios.get(url)
        .then(response => {
            console.log(response.data)
            sala = response.data
            let divSala = document.getElementById('salas')
            let tarjetasSala = `<table class="table"><thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                </tr>
                            </thead>
                            <tbody>`

            for (let i = 0; i < sala.length; i++) {
                tarjetasSala += `
                                <tr>
                                <th scope="row">${i+1}</th>
                                <td>${sala[i].nombre}</td>
                                </tr>
                            `
            }
            tarjetasSala +=`</tbody>
            </table>`
            divSala.innerHTML = tarjetasSala

        })
        .catch(err => console.log(err))
})


window.addEventListener('DOMContentLoaded', event => {

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

    navbarShrink();

    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

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