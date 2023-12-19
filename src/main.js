// HEADER
const sideBar = document.querySelector('.sidebar');

function showSidebar(){
    sideBar.classList.toggle('translate-x-0')
    sideBar.classList.toggle('translate-x-96')
}

const headerScroll = document.querySelector('header')
const titleHero = document.querySelector('.title')
const descHero = document.querySelector('.description')


window.addEventListener('scroll', function(){
    // headerScroll.classList.toggle('border-b-2', window.scrollY > 50)
    headerScroll.classList.toggle('bg-primary', window.scrollY > 50)
})
// HEADER END

setTimeout(()=> {
    titleHero.classList.remove('translate-y-20', 'opacity-0')
    setTimeout(()=> {
        descHero.classList.remove('translate-y-20', 'opacity-0')
    }, 500)
}, 1000)


const bestProdWrapper = document.querySelector('.best-product-wrapper')
const anivCollectWrapper = document.querySelector('.aniv-collection-wrapper')
const searchBox = document.querySelector('#search-box')
const searchProductWrapper = document.querySelector('.search-product-wrapper')
const searchItemWrapper = document.querySelector('.search-item-wrapper')

searchBox.addEventListener('click', function() {
    searchProductWrapper.classList.remove('-translate-y-96')
    searchProductWrapper.classList.remove('opacity-0')
    searchProductWrapper.classList.add('translate-y-16')
})



const productData = [
    {
        id: 1,
        name: 'Breeon Ft Loewe',
        desc: 'a brand new design from breeon',
        image: '/assets/image/best-seller-1.jpg',
        size: 'L',
        price: 150000
    },
    {
        id: 2,
        name: 'Breeon down to Earth',
        desc: 'a brand new design from breeon',
        image: '/assets/image/best-seller-2.jpg',
        size: 'L',
        price: 200000
    },
    {
        id: 3,
        name: 'Breeon Ft Chrome Heart',
        desc: 'a brand new design from breeon',
        image: '/assets/image/best-seller-1.jpg',
        size: 'XL',
        price: 150000
    },
    {
        id: 4,
        name: 'Breeon Faith',
        desc: 'a brand new design from breeon',
        image: '/assets/image/best-seller-1.jpg',
        size: 'XL',
        price: 150000
    },
    {
        id: 5,
        name: 'Breoon raise the star',
        desc: 'a brand new design from breeon',
        image: '/assets/image/best-seller-1.jpg',
        size: 'XL',
        price: 150000
    },
    {
        id: 6,
        name: 'Seizing Bound',
        desc: 'a brand new design from breeon',
        image: '/assets/image/best-seller-1.jpg',
        size: 'XL',
        price: 150000
    },
    {
        id: 7,
        name: 'Woman Particular',
        desc: 'a brand new design from breeon',
        image: '/assets/image/best-seller-1.jpg',
        size: 'XL',
        price: 150000
    },
    {
        id: 8,
        name: 'Simps Environ',
        desc: 'a brand new design from breeon',
        image: '/assets/image/best-seller-1.jpg',
        size: 'S',
        price: 150000
    },
    {
        id: 9,
        name: 'Lakers ft Breeon',
        desc: 'a brand new design from breeon',
        image: '/assets/image/best-seller-1.jpg',
        size: 'S',
        price: 150000
    },
    {
        id: 10,
        name: 'Breoon wn sm',
        desc: 'a brand new design from breeon',
        image: '/assets/image/best-seller-1.jpg',
        size: 'S',
        price: 150000
    },
]

const bestSellerData = [];

productData.forEach((product, key) => {
    updateProduct(product, key)
    updateSearchItemCard(product, key)
})

const itemSearchCard = document.querySelectorAll('.item-card')
function searchProduct(){
    const searchBoxVal = searchBox.value.toUpperCase()
    const titleSearch = searchItemWrapper.getElementsByTagName('h1')
    const itemNotFound = document.querySelector('.item-not-found')

    for(let i = 0; i < titleSearch.length; i++){
        let prodIndex = itemSearchCard[i].getElementsByTagName('h1')[0];
        let prodCardEl = itemSearchCard[i]

        if(prodIndex){
            let match = prodIndex.innerText || prodIndex.innerHTML
            if(match.toUpperCase().indexOf(searchBoxVal) > -1){
                itemSearchCard[i].classList.remove('hidden')
                // itemNotFound.classList.add('hidden')
            } 
            else {
                itemSearchCard[i].classList.add('hidden')
                // itemNotFound.classList.remove('hidden')
            }
        }
    }
}

function updateSearchItemCard(item,key){
    searchItemWrapper.innerHTML += searchItemCard(item, key)
}

function searchItemCard(item, key){
    return `<div class="item-card w-full h-[70px] bg-white shadow-md flex relative md:h-20" onclick=showModal(${key})>
                <div class="relative w-[40%] bg-green-400 h-full overflow-hidden">
                    <img src="${item.image}" class="absolute w-full h-full object-cover" alt="">
                </div>
                <div class="w-[60%] h-full text-black py-1 px-1 flex flex-col justify-between">
                    <h1 class="font-semibold text-sm title-prod">${item.name}</h1>
                    <p>${item.price}</p>
                </div>
            </div>`                                         
}

function updateProduct(prod, key){
    if(bestSellerData == null){
        bestSellerData[key] = productData[key];
    }
    // let wrapper = ''
    bestProdWrapper.innerHTML += bestProductCard(prod, key) 
    anivCollectWrapper.innerHTML += anivCollectionsCard(prod, key)
}



function bestProductCard(prod, key){
    return`<div class="w-44 border-2 shadow-md h-72 overflow-hidden relative md:w-56" onclick="showModal(${key})">
                <div class="w-full h-32 overflow-hidden relative md:h-36">
                    <img src="${prod.image}" class="absolute w-full md:-top-10"/>
                </div>
                <div class="px-2 py-1 flex flex-col justify-between h-40 w-full md:h-36">
                    <div>
                        <h1 class="font-semibold">${prod.name}</h1>
                        <p>${prod.desc}</p>
                    </div>
                    <div>
                        <p>${prod.price}</p>
                    </div>
                </div>
           </div>`
}

function anivCollectionsCard(prod, key){
    return`<div class="w-44 border-2 shadow-md h-72 overflow-hidden relative md:w-56" onclick="showModal(${key})">
                <div class="w-full h-32 overflow-hidden relative md:h-36">
                    <img src="${prod.image}" class="absolute w-full md:-top-10"/>
                </div>
                <div class="px-2 py-1 flex flex-col justify-between h-40 w-full md:h-36">
                    <div>
                        <h1 class="font-semibold">${prod.name}</h1>
                        <p>${prod.desc}</p>
                    </div>
                    <div>
                        <p>${prod.price}</p>
                    </div>
                </div>
           </div>`
}

const modalContainer = document.querySelector('.modal-container');
const modalWrapper = document.querySelector('.modal-wrapper')

let modalData = [];


function showModal(key){
    if(modalData[key] == null){
        modalData[key] = productData[key];
    }
    searchProductWrapper.classList.add('-translate-y-96')
    searchProductWrapper.classList.add('opacity-0')
    searchProductWrapper.classList.remove('translate-y-16')

    updateModal()
}

function closeModal(key){
    delete modalData[key]
    modalWrapper.innerHTML = ''
    modalContainer.classList.remove('flex')
    modalContainer.classList.add('hidden')
}


function updateModal(){
    modalWrapper.innerHTML = '';

    modalContainer.classList.remove('hidden')
    modalContainer.classList.add('flex')

    modalData.forEach((prod, key) => {
        modalWrapper.innerHTML = modalCard(prod, key)
    })
}

function modalCard(prod, key){
    return `<div class="bg-white w- h-[400px] shadow-lg flex flex-col relative md:w-[700px] md:h-[400px] md:flex-row">
                <div class="absolute right-5 top-3 text-xl z-10 cursor-pointer" onclick="closeModal(${key})">
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <div class="overflow-hidden h-[40%] w-full relative md:h-full">
                    <img src="${prod.image}" alt="" class="w-full absolute -top-44 md:top-0">
                </div>
                <div class="w-full px-[3%] py-2 flex flex-col justify-between h-[60%] md:pt-10 md:pb-5 md:h-full">
                    <div class="flex flex-col gap-4">
                        <div>
                            <h1 class="font-semibold text-lg md:text-xl">${prod.name}</h1>
                            <p class="text-sm">${prod.desc}</p>
                        </div>
                        <div>
                            <h1 class="font-semibold text-base">SIZE</h1>
                            <p class="text-sm">${prod.size}</p>
                        </div>
                    </div>
                    <div class="w-full flex flex-col gap-1 items-end md:gap-2">
                        <p class="text-xl  font-semibold md:text-2xl">Rp. ${prod.price}</p>
                        <button class="w-full py-3 bg-primary text-white" onclick="addCart(${key})">Add to cart</button>
                    </div>
                </div>
            </div>`
}



let cartData = [];








// Footer
let footerContent = document.querySelectorAll('.footer-content');
let footerList = document.querySelectorAll('.footer-list');
let plusIcon = document.querySelectorAll('.plus-icon');
let minusIcon = document.querySelectorAll('.minus-icon');

footerContent.forEach((item, index) => {
    item.addEventListener('click', function(){
        footerList[index].classList.toggle('hidden')
        plusIcon[index].classList.toggle('hidden')
        minusIcon[index].classList.toggle('hidden')
    })
})
// Footer