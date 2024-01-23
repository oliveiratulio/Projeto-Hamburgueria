const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all');
const buttonMapAll = document.querySelector('.map-all');
const buttonSumAll = document.querySelector('.sum-all');
const buttonFilterAll = document.querySelector('.filter-all'); 



function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach((product) => {
        myLi += `
            <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price"> R$ ${product.price}</p>
            </li>`
    })

     list.innerHTML = myLi

}


function mapAllItems() {
    

    const newPrices = menuOptions.map((product) => ({
      ...product,
        price: product.price * 0.9, // vai dar 10% de desconto
        
    }))
    
    showAll(newPrices)

}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

       
    list.innerHTML =  `
          <li>
            <p>O Valor total de todos os Hambúrgueres é de R$ ${totalValue}</p>
            </li>
            `

    
    console.log(totalValue)
}

function filterAllItems() {
    const filterVegan = menuOptions.filter((product) => product.vegan)
    
    showAll(filterVegan)
    
}


buttonShowAll.addEventListener('click',() => showAll(menuOptions))
buttonMapAll.addEventListener('click',mapAllItems )
buttonSumAll.addEventListener('click', sumAllItems)
buttonFilterAll.addEventListener('click', filterAllItems)