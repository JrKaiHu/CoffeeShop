const app = Vue.createApp({
    data() {
        return {
            carouselItems: [
                {
                    classesLst: {
                        'carousel-item': true,
                        active: true,
                    },
                    src: 'https://fakeimg.pl/2048x892/?text=Img1(2048x892)',
                },
                {
                    classesLst: {
                        'carousel-item': true,
                        active: false,
                    },
                    src: 'https://fakeimg.pl/2048x892/?text=Img2(2048x892)',
                },
                {
                    classesLst: {
                        'carousel-item': true,
                        active: false,
                    },
                    src: 'https://fakeimg.pl/2048x892/?text=Img3(2048x892)',
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
                    imgSrc: 'https://fakeimg.pl/600x600/?text=600x600(1)',
                    typeName: '單品配方',
                    price: 'NT$285 - NT$650',
                },
                {
                    classLst: ['col'],
                    imgSrc: 'https://fakeimg.pl/600x600/?text=600x600(2)',
                    typeName: '複合配方',
                    price: 'NT$310 - NT$710',
                },
                {
                    classLst: ['col', 'd-none', 'd-md-block'],
                    imgSrc: 'https://fakeimg.pl/600x600/?text=600x600(3)',
                    typeName: '春夏配方',
                    price: 'NT$500 - NT$1050',
                },
            ],
            latestProducts: [
                {
                    classLst: ['col'],
                    imgSrc: 'https://fakeimg.pl/600x600/?text=600x600(1)',
                    name: 'T-shirt',
                    pricing: 'NT$3680',
                    actualPrice: 'NT$2944',
                },
                {
                    classLst: ['col'],
                    imgSrc: 'https://fakeimg.pl/600x600/?text=600x600(2)',
                    name: '馬克杯',
                    pricing: 'NT$1400',
                    actualPrice: 'NT$1120',
                },
                {
                    classLst: ['col', 'd-none', 'd-md-block'],
                    imgSrc: 'https://fakeimg.pl/600x600/?text=600x600(3)',
                    name: '棒球帽',
                    pricing: 'NT$2300',
                    actualPrice: 'NT$1904',
                },
                {
                    classLst: ['col', 'd-none', 'd-md-block'],
                    imgSrc: 'https://fakeimg.pl/600x600/?text=600x600(4)',
                    name: '購物袋',
                    pricing: 'NT$1800',
                    actualPrice: 'NT$1440',
                },
            ],
            productTypes: [
                {
                    classLst: ['col', 'mt-2'],
                    imgSrc: 'https://fakeimg.pl/600x600/?text=600x600(1)',
                    name: '咖啡豆',
                },
                {
                    classLst: ['col', 'mt-2'],
                    imgSrc: 'https://fakeimg.pl/600x600/?text=600x600(2)',
                    name: '濾泡咖啡',
                },
                {
                    classLst: ['col', 'mt-2'],
                    imgSrc: 'https://fakeimg.pl/600x600/?text=600x600(3)',
                    name: '咖啡器具',
                },
                {
                    classLst: ['col', 'mt-2'],
                    imgSrc: 'https://fakeimg.pl/600x600/?text=600x600(4)',
                    name: '原創商品',
                },
            ],
            infos: [
                {
                    classLst: ['col'],
                    imgSrc: 'https://fakeimg.pl/600x400/?text=600x400(1)',
                    title: '夏季配方冰鎮咖啡開始販售',
                    date: '2022-05-15',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                },
                {
                    classLst: ['col', 'd-none', 'd-md-block'],
                    imgSrc: 'https://fakeimg.pl/600x400/?text=600x400(2)',
                    title: '父親節特惠活動開跑',
                    date: '2022-06-12',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                },
                {
                    classLst: ['col', 'd-none', 'd-md-block'],
                    imgSrc: 'https://fakeimg.pl/600x400/?text=600x400(3)',
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
