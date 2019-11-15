let products = [
    {
        id: 'p1',
        name: 'Pineapples',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/07/30/11/05/pineapple-867245__340.jpg',
        price: 35,
        category: 'fruits'
    },
    {
        id: 'p2',
        name: 'Apples',
        imageUrl: 'https://cdn.pixabay.com/photo/2016/07/09/12/16/apple-1506119__340.jpg',
        price: 30,
        category: 'fruits'
    },
    {
        id: 'p3',
        name: 'Bananas',
        imageUrl: 'https://cdn.pixabay.com/photo/2016/01/03/17/59/bananas-1119790__340.jpg',
        price: 10,
        category: 'fruits'
    },
    {
        id: 'p4',
        name: 'Oranges',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/01/20/15/06/orange-1995056__340.jpg',
        price: 15,
        category: 'fruits'
    },
    {
        id: 'p5',
        name: 'Grapes',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/09/22/23/43/grapes-3696472__340.jpg',
        price: 40,
        category: 'fruits'
    },
    {
        id: 'p6',
        name: 'Kales',
        imageUrl: 'https://biznakenya.com/wp-content/uploads/2016/03/Sukuma_Wiki_Kale.jpg',
        price: 20,
        category: 'vegetables'
    },
    {
        id: 'p7',
        name: 'Onions',
        imageUrl: 'https://i5.walmartimages.ca/images/Large/601/045/999999-33383601045.jpg',
        price: 10,
        category: 'vegetables'
    },
    {
        id: 'p8',
        name: 'Tomatoes',
        imageUrl: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg?w=1155&h=1528',
        price: 10,
        category: 'vegetables'
    },
    {
        id: 'p9',
        name: 'Cabbages',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Cabbage_and_cross_section_on_white.jpg',
        price: 15,
        category: 'vegetables'
    },
    {
        id: 'p10',
        name: 'Spinach',
        imageUrl: 'https://cdn1.medicalnewstoday.com/content/images/articles/270/270609/spinach.jpg',
        price: 20,
        category: 'vegetables'
    },
    ];
    
    function getItems(category) {
    if (category) {
        let filteredProducts = products.filter(item => {
            return item.category === category;
        });
        return filteredProducts;
    }
    return products;
    }
    
    GreensKiosk = {
    getItems: getItems
    };
    
    module.exports = GreensKiosk;