const search = document.getElementById('input');
const container = document.getElementById('productsContainer');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');







const products = [
    {
        image: 'abinash-jothimani-P4KX6qSaBcY-unsplash.jpg',
        name: 'HTML',
        price: '$80.00',
    },

    {
        image: 'alexandra-fuller-4RNLzJzEMMs-unsplash.jpg',
        name: 'CSS',
        price: '$30.00',
    },

    {
        image: 'gulfer-ergin-LUGuCtvlk1Q-unsplash.jpg',
        name: 'JavaScript',
        price: '$20.00',
    },

    {
        image: 'karolina-grabowska-H_eb_VfG2Ow-unsplash.jpg',
        name: 'Angular',
        price: '$50.00',
    },

    {
        image: 'kimberly-farmer-lUaaKCUANVI-unsplash.jpg',
        name: 'Learning Techniques',
        price: '$110.00',
    },

    {
        image: 'nick-fewings-f2Bi-VBs71M-unsplash.jpg',
        name: 'Improving Productivity',
        price: '$35.00',
    },

    {
        image: 'thought-catalog-o0Qqw21-0NI-unsplash.jpg',
        name: 'Modern Programming',
        price: '$95.00',
    },

    {
        image: 'toa-heftiba-ip9R11FMbV8-unsplash.jpg',
        name: 'Mindful Learning',
        price: '$150.00',
    }
];

products.map((item) => {
    container.innerHTML += `
        <div class='booksContainer'>
            <img src='${item.image}' class='productsImg'>
            <p>${item.name}</p>
            <p class="star">&#11088; &#11088; &#11088; &#11088; &#9734;  </p>
            <p>${item.price}</p>
        </div>
    `
});


btn1.addEventListener('click', () => {
    container.innerHTML ="";
    products.map((item) => {
    container.innerHTML += `
        <div class='booksContainer'>
            <img src='${item.image}' class='productsImg'>
            <p>${item.name}</p>
            <p class="star">&#11088; &#11088; &#11088; &#11088; &#9734;  </p>
            <p>${item.price}</p>
        </div>
    `
})
});






const products2 = [
    {
        image: 'alexandra-fuller-4RNLzJzEMMs-unsplash.jpg',
        name: 'CSS',
        price: '$30.00',
    },

    {
        image: 'toa-heftiba-ip9R11FMbV8-unsplash.jpg',
        name: 'Mindful Learning',
        price: '$150.00',
    },

    {
        image: 'abinash-jothimani-P4KX6qSaBcY-unsplash.jpg',
        name: 'HTML',
        price: '$80.00',
    },

    {
        image: 'karolina-grabowska-H_eb_VfG2Ow-unsplash.jpg',
        name: 'Angular',
        price: '$50.00',
    },

    {
        image: 'kimberly-farmer-lUaaKCUANVI-unsplash.jpg',
        name: 'Learning Techniques',
        price: '$110.00',
    },

    {
        image: 'gulfer-ergin-LUGuCtvlk1Q-unsplash.jpg',
        name: 'JavaScript',
        price: '$20.00',
    },

    {
        image: 'thought-catalog-o0Qqw21-0NI-unsplash.jpg',
        name: 'Modern Programming',
        price: '$95.00',
    },

    {
        image: 'nick-fewings-f2Bi-VBs71M-unsplash.jpg',
        name: 'Improving Productivity',
        price: '$35.00',
    },
];


btn2.addEventListener('click', () => {
    container.innerHTML = "";
    products2.map((item) => {
    container.innerHTML += `
        <div class='booksContainer'>
            <img src='${item.image}' class='productsImg'>
            <p>${item.name}</p>
            <p class="star">&#11088; &#11088; &#11088; &#11088; &#9734;  </p>
            <p>${item.price}</p>
        </div>
    `
})
});



const products3 = [
    {
        image: 'alexandra-fuller-4RNLzJzEMMs-unsplash.jpg',
        name: 'CSS',
        price: '$30.00',
    },

    {
        image: 'gulfer-ergin-LUGuCtvlk1Q-unsplash.jpg',
        name: 'JavaScript',
        price: '$20.00',
    },

    {
        image: 'thought-catalog-o0Qqw21-0NI-unsplash.jpg',
        name: 'Modern Programming',
        price: '$95.00',
    },

     {
        image: 'karolina-grabowska-H_eb_VfG2Ow-unsplash.jpg',
        name: 'Angular',
        price: '$50.00',
    },

    {
        image: 'kimberly-farmer-lUaaKCUANVI-unsplash.jpg',
        name: 'Learning Techniques',
        price: '$110.00',
    },

    {
        image: 'nick-fewings-f2Bi-VBs71M-unsplash.jpg',
        name: 'Improving Productivity',
        price: '$35.00',
    },

    {
        image: 'toa-heftiba-ip9R11FMbV8-unsplash.jpg',
        name: 'Mindful Learning',
        price: '$150.00',
    },

    {
        image: 'abinash-jothimani-P4KX6qSaBcY-unsplash.jpg',
        name: 'HTML',
        price: '$80.00',
    },
];


btn3.addEventListener('click', () => {
    container.innerHTML = "";
    products3.map((item) => {
    container.innerHTML += `
        <div class='booksContainer'>
            <img src='${item.image}' class='productsImg'>
            <p>${item.name}</p>
            <p class="star">&#11088; &#11088; &#11088; &#11088; &#9734;  </p>
            <p>${item.price}</p>
        </div>
    `
})
});




const products4 = [
    {
        image: 'alexandra-fuller-4RNLzJzEMMs-unsplash.jpg',
        name: 'CSS',
        price: '$30.00',
    },

    {
        image: 'karolina-grabowska-H_eb_VfG2Ow-unsplash.jpg',
        name: 'Angular',
        price: '$50.00',
    },

    {
        image: 'thought-catalog-o0Qqw21-0NI-unsplash.jpg',
        name: 'Modern Programming',
        price: '$95.00',
    },

    {
        image: 'nick-fewings-f2Bi-VBs71M-unsplash.jpg',
        name: 'Improving Productivity',
        price: '$35.00',
    },

    {
        image: 'kimberly-farmer-lUaaKCUANVI-unsplash.jpg',
        name: 'Learning Techniques',
        price: '$110.00',
    },

    {
        image: 'gulfer-ergin-LUGuCtvlk1Q-unsplash.jpg',
        name: 'JavaScript',
        price: '$20.00',
    },

    {
        image: 'toa-heftiba-ip9R11FMbV8-unsplash.jpg',
        name: 'Mindful Learning',
        price: '$150.00',
    },

    {
        image: 'abinash-jothimani-P4KX6qSaBcY-unsplash.jpg',
        name: 'HTML',
        price: '$80.00',
    },
];


btn4.addEventListener('click', () => {
    container.innerHTML = "";
    products4.map((item) => {
    container.innerHTML += `
        <div class='booksContainer'>
            <img src='${item.image}' class='productsImg'>
            <p>${item.name}</p>
            <p class="star">&#11088; &#11088; &#11088; &#11088; &#9734;  </p>
            <p>${item.price}</p>
        </div>
    `
})
});




const products5 = [
    {
        image: 'nick-fewings-f2Bi-VBs71M-unsplash.jpg',
        name: 'Improving Productivity',
        price: '$35.00',
    },

    {
        image: 'kimberly-farmer-lUaaKCUANVI-unsplash.jpg',
        name: 'Learning Techniques',
        price: '$110.00',
    },

    {
        image: 'gulfer-ergin-LUGuCtvlk1Q-unsplash.jpg',
        name: 'JavaScript',
        price: '$20.00',
    },

    {
        image: 'alexandra-fuller-4RNLzJzEMMs-unsplash.jpg',
        name: 'CSS',
        price: '$30.00',
    },

    {
        image: 'karolina-grabowska-H_eb_VfG2Ow-unsplash.jpg',
        name: 'Angular',
        price: '$50.00',
    },

    {
        image: 'thought-catalog-o0Qqw21-0NI-unsplash.jpg',
        name: 'Modern Programming',
        price: '$95.00',
    },

    {
        image: 'toa-heftiba-ip9R11FMbV8-unsplash.jpg',
        name: 'Mindful Learning',
        price: '$150.00',
    },

    {
        image: 'abinash-jothimani-P4KX6qSaBcY-unsplash.jpg',
        name: 'HTML',
        price: '$80.00',
    },
];


btn5.addEventListener('click', () => {
    container.innerHTML = "";
    products5.map((item) => {
    container.innerHTML += `
        <div class='booksContainer'>
            <img src='${item.image}' class='productsImg'>
            <p>${item.name}</p>
            <p class="star">&#11088; &#11088; &#11088; &#11088; &#9734;  </p>
            <p>${item.price}</p>
        </div>
    `
})
});







// Adding RegularExpression to the search box
search.addEventListener('input', (e) => {
    e.preventDefault();
    let pattern = new RegExp(`${search.value.trim()}`, 'i');

    let book = products.filter((item) => {
    return pattern.test(item.name) | pattern.test(item.price)})

    container.innerHTML = "";

    book.map((reg) => {
        container.innerHTML += `
        <div class='booksContainer'>
            <img src='${reg.image}' class='productsImg'>
            <p>${reg.name}</p>
            <p class="star">&#11088; &#11088; &#11088; &#11088; &#9734;  </p>
            <p>${reg.price}</p>
        </div>
        `

    })
})










