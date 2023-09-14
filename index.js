
 /**variable sincrona - traer datos de internet */
async function traerDatos(){
    try {
        /**hará una espera mientras trae los datos */
        const response = await fetch ("https://rickandmortyapi.com/api/character") /**traera todoen un obj */

        /**Esta const trera todo el obj en un archivo json*/
        const data = await response.json()

        /**para ver lo que esta trayendo */
        /*console.log(data)*/

        /**recorrer la data */
        data.results.forEach(element => {

            /**podemos  escribir codg htnl - comillas invertidas*/
            const article = document.createRange().createContextualFragment (`
            
                <article>

                    <div class="image-container">
                        <img src="${element.image}">
                    </div>

                    <h2>${element.name}</h2>

                    <span>${element.status}</span>

                </article>
            
            `)
            const main = document.querySelector("main")
            /**agrege el article (borramos los q estan en el html) */
            main.append(article)
        });

    } catch (error) {
        
    }
}

traerDatos();