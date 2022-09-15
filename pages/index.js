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