const app = Vue.createApp({
    data() {
        return {
            carouselItems: [
                {
                    classesLst: {
                        'carousel-item': true,
                        active: true,
                    },
                    src: 'images\\carousel_1.jpg',
                },
                {
                    classesLst: {
                        'carousel-item': true,
                        active: false,
                    },
                    src: 'images\\carousel_2.jpg',
                },
                {
                    classesLst: {
                        'carousel-item': true,
                        active: false,
                    },
                    src: 'images\\carousel_3.jpg',
                },
            ],
        };
    },
});

const app2 = Vue.createApp({
    data() {
        return {
            coffeeBeanTypes: [
                {
                    classLst: ['col'],
                    imgSrc: 'images\\coffee_bean_1.jpg',
                    typeName: '單品配方',
                    price: 'NT$285-NT$650',
                },
                {
                    classLst: ['col'],
                    imgSrc: 'images\\coffee_bean_2.jpg',
                    typeName: '複合配方',
                    price: 'NT$310-NT$710',
                },
                {
                    classLst: ['col', 'd-none', 'd-md-block'],
                    imgSrc: 'images\\coffee_bean_3.jpg',
                    typeName: '春夏配方',
                    price: 'NT$500-NT$1050',
                },
            ],
            latestProducts: [
                {
                    classLst: ['col'],
                    imgSrc: 'images\\T-shirt.jpg',
                    name: 'T-shirt',
                    pricing: 'NT$3680',
                    actualPrice: 'NT$2944',
                },
                {
                    classLst: ['col'],
                    imgSrc: 'images\\杯子.jpg',
                    name: '馬克杯',
                    pricing: 'NT$1400',
                    actualPrice: 'NT$1120',
                },
                {
                    classLst: ['col', 'd-none', 'd-md-block'],
                    imgSrc: 'images\\帽子.jpg',
                    name: '棒球帽',
                    pricing: 'NT$2300',
                    actualPrice: 'NT$1904',
                },
                {
                    classLst: ['col', 'd-none', 'd-md-block'],
                    imgSrc: 'images\\購物袋.jpg',
                    name: '購物袋',
                    pricing: 'NT$1800',
                    actualPrice: 'NT$1440',
                },
            ],
            productTypes: [
                {
                    classLst: ['col', 'mt-2'],
                    imgSrc: 'images\\咖啡豆.jpg',
                    name: '咖啡豆',
                },
                {
                    classLst: ['col', 'mt-2'],
                    imgSrc: 'images\\濾泡咖啡.jpg',
                    name: '濾泡咖啡',
                },
                {
                    classLst: ['col', 'mt-2'],
                    imgSrc: 'images\\咖啡器具.jpg',
                    name: '咖啡器具',
                },
                {
                    classLst: ['col', 'mt-2'],
                    imgSrc: 'images\\原創商品.jpg',
                    name: '原創商品',
                },
            ],
            infos: [
                {
                    classLst: ['col'],
                    imgSrc: 'images\\夏季配方.jpg',
                    title: '夏季配方冰鎮咖啡開始販售',
                    date: '2022-05-15',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                },
                {
                    classLst: ['col', 'd-none', 'd-md-block'],
                    imgSrc: 'images\\父親節.jpg',
                    title: '父親節特惠活動開跑',
                    date: '2022-06-12',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                },
                {
                    classLst: ['col', 'd-none', 'd-md-block'],
                    imgSrc: 'images\\年中慶.jpg',
                    title: '年中慶即將結束',
                    date: '2022-07-09',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                },
            ],
        };
    },
});

document.addEventListener('DOMContentLoaded', () => {
    const vm = app.mount('#carouselIndicators');
    const vm2 = app2.mount('#cardGroup');
});
