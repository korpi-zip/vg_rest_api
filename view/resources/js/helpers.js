export default class Helpers {

    /**
     * Genera un número entero aleatorio en un rango determinado
     * @param {int} min El intervalo inferior
     * @param {int} max El intervalo superior
     * @returns {int} Un valor aleatorio entero en un rango determinado
     */
    static random = (min, max) => {
        min = Math.ceil(min) // aproximar al entero superior
        max = Math.floor(max) // aproximar al tenero inferior
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    /**
     * Permite conocer el elemento seleccionado de un conjunto de radio buttons
     * @param {String} selector Un selector CSS que permite seleccionar el grupo de radio buttons
     * @returns {String} Retorna el atributo value del radio button seleccionado
     */
    static selectedRadioButton = selector => {
        const radio = document.querySelector(selector + ":checked")
        return radio ? radio.value : radio
    }
  

     /**
     * Permite conocer los el estado checked de una lista de elementos
     * @param {String} selector Un selector CSS que permite referenciar el grupo
                       de check boxes.
     * @returns {Array} Retorna una lista de elementos
     */
    static getItems = selector => {
        const items = document.querySelectorAll(selector)
        return [...items].map((item) => { // operador rest >  desestructuración
            return { value: item.value, checked: item.checked }
        })
    }

   
    
    /**
     * Permite conocer información sobre el elemento seleccionado
     * @param {String} selector Un selector CSS para imput tipo Select con opciones
     * @returns {Array} Retorna una lista con 3 elementos, Indice, Valor y Texto
     */
    static selectedItemList = selector => {
        const list = document.querySelector(selector)
        const item = list.options[list.selectedIndex]
        return {
            selectedIndex: list.selectedIndex,
            value: item.value,
            text: item.text,
        }
    }


   

    /**
     * Asigna options a una etiqueta Select a partir de un array
     * @param {Array} selector Un selector CSS que permite referenciar una lista de Options
     * @returns {Array} Retorna la misma lista con los nuevas Opciones
     */
    static populateSelectList = (selector, items = [], value = '', text = '', firstOption = '')  => {
        let list = document.querySelector(selector)
        
        list.options.length = 0
        if (firstOption) {
            list.add(new Option(firstOption, ''))
        }
        items.forEach(item => list.add(new Option(item[text], item[value])))
        return list // <-- OJO
    }


    /**
     * Carga el contenido HTML de una url dada en un contenedor
     * @param {String} direccion de un recurso HTML
     * @param {String} selector que referencia a un contenedor 
     */
    static loadPage = async (url, container) => {
        try {
            const element = document.querySelector(container)
            if (!element) {
                throw new Error(`Parece que el selector '${container}' no es válido`)
            }
    
            const response = await fetch(url)
            // console.log(response);
            if (response.ok) {
                const html = await response.text()
                element.innerHTML = html
                return element // para permitir encadenamiento
            } else {
                throw new Error(
                    `${response.status} - ${response.statusText}, al intentar acceder al recurso '${response.url}'`
                )
            }
        } catch (e) {
            console.log(e)
        }
    }
    // obtener un recurso HTTP mediante una petición fetch pero se diferencia de loadPage en que se espera que el recurso esté en formato JSON


     /**
     * Carga el contenido de un JSON en una variable
     * @param {String} direccion de un recurso JSON
     * @returns {array} array con el contenido del archivo json
     */
    static fetchData = async url => {

        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(
                `${response.status} - ${response.statusText}, al intentar acceder al recurso '${response.url}'`
            )
        }

        return await response.json()
    }


}