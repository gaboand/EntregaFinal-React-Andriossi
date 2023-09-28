    import imagen1 from "./components/img/prod1-1.webp";
    import imagen2 from "./components/img/prod2-1.webp";
    import imagen3 from "./components/img/prod3-1.webp";
    import imagen4 from "./components/img/prod4-1.webp";
    import imagen5 from "./components/img/prod5-1.webp";
    import imagen6 from "./components/img/prod6-1.webp";
    import imagen7 from "./components/img/prod7-1.webp";
    import imagen8 from "./components/img/prod8-1.webp";
    import imagen9 from "./components/img/prod9-1.webp";
    import imagen10 from "./components/img/prod10-1.webp";
    import imagen11 from "./components/img/prod11-1.webp";
    import imagen12 from "./components/img/prod12-1.webp";

    const products = [
        {
            id:'1',
            name:'CARDIGAN ORANGE',
            precio: 35000,
            category: 'Cardigan',
            img: imagen1,    
            stock: 25,
            description: 'Descripción del producto'
        },
        { id:'2', name:'TAPADO COMODORO', precio: 70000, category:'tapados', img: imagen2, stock:10, description:'Descripción del producto' },
        { id:'3', name:'TAPADO COLOMBO', precio: 65000, category:'tapados', img: imagen3, stock:15, description:'Descripción del producto' },
        { id:'4', name:'CARDIGAN TAG', precio: 55000, category:'cardigan', img: imagen4, stock:15, description:'Descripción del producto' },
        { id:'5', name:'TAPADO USHUAIA', precio: 85000, category:'tapados', img: imagen5, stock:15, description:'Descripción del producto' },
        { id:'6', name:'TAPADO ICELAND', precio: 80000, category:'tapados', img: imagen6, stock:15, description:'Descripción del producto' },
        { id:'7', name:'TAPADO BAHIA', precio: 50000, category:'tapados', img: imagen7, stock:15, description:'Descripción del producto' },
        { id:'8', name:'CARDIGAN MALL', precio: 50000, category:'cardigan', img: imagen8, stock:15, description:'Descripción del producto' },
        { id:'9', name:'TAPADO RAWSON', precio: 70000, category:'tapados', img: imagen9, stock:15, description:'Descripción del producto' },
        { id:'10', name:'CAMPERA NIGHT', precio: 85000, category:'camperas', img: imagen10, stock:15, description:'Descripción del producto' },
        { id:'11', name:'PANTALON HIGH PRINT', precio: 45000, category:'pantalones', img: imagen11, stock:15, description:'Descripción del producto' },
        { id:'12', name:'CAMPERA MDQ', precio: 65000, category:'camperas', img: imagen12, stock:15, description:'Descripción del producto' },
    ]

    export const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(()=>{
                resolve (products)
            },500)
        })
    }

    export const getProductsById = (productId) => {
        return new Promise((resolve) =>{
            setTimeout(() => {
                resolve(products.find(prod => prod.id === productId))
            },500)

        })
    }

    export const getProductByCategory = (category) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const productsInCategory = products.filter(prod => prod.category.toLowerCase() === category.toLowerCase());
                resolve(productsInCategory);
            }, 500);
        });
    };

