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
                    classLst: ['col', 'p-3'],
                    imgSrc: 'images\\coffee_bean_1.jpg',
                    typeName: '單品配方',
                    price: 'NT$285-NT$650',
                },
                {
                    classLst: ['col', 'p-3'],
                    imgSrc: 'images\\coffee_bean_2.jpg',
                    typeName: '複合配方',
                    price: 'NT$310-NT$710',
                },
                {
                    classLst: ['col', 'p-3'],
                    imgSrc: 'images\\coffee_bean_2.jpg',
                    typeName: '複合配方',
                    price: 'NT$310-NT$710',
                },
                {
                    classLst: ['col', 'p-3', 'd-none', 'd-md-block'],
                    imgSrc: 'images\\coffee_bean_3.jpg',
                    typeName: '春夏配方',
                    price: 'NT$500-NT$1050',
                },
            ],
            latestProducts: [
                {
                    classLst: ['col', 'p-3'],
                    imgSrc: 'images\\T-shirt.jpg',
                    name: 'T-shirt',
                    pricing: 'NT$3680',
                    actualPrice: 'NT$2944',
                },
                {
                    classLst: ['col', 'p-3'],
                    imgSrc: 'images\\杯子.jpg',
                    name: '馬克杯',
                    pricing: 'NT$1400',
                    actualPrice: 'NT$1120',
                },
                {
                    classLst: ['col', 'p-3', 'd-none', 'd-md-block'],
                    imgSrc: 'images\\帽子.jpg',
                    name: '棒球帽',
                    pricing: 'NT$2300',
                    actualPrice: 'NT$1904',
                },
                {
                    classLst: ['col', 'p-3', 'd-none', 'd-md-block'],
                    imgSrc: 'images\\購物袋.jpg',
                    name: '購物袋',
                    pricing: 'NT$1800',
                    actualPrice: 'NT$1440',
                },
            ],
            productTypes: [
                {
                    classLst: ['col', 'p-3', 'mt-2'],
                    imgSrc: 'images\\咖啡豆.jpg',
                    name: '咖啡豆',
                },
                {
                    classLst: ['col', 'p-3', 'mt-2'],
                    imgSrc: 'images\\濾泡咖啡.jpg',
                    name: '濾泡咖啡',
                },
                {
                    classLst: ['col', 'p-3', 'mt-2'],
                    imgSrc: 'images\\咖啡器具.jpg',
                    name: '咖啡器具',
                },
                {
                    classLst: ['col', 'p-3', 'mt-2'],
                    imgSrc: 'images\\原創商品.jpg',
                    name: '原創商品',
                },
            ],
            infos: [
                {
                    classLst: ['col', 'p-3'],
                    imgSrc: 'images\\夏季配方.jpg',
                    title: '夏季配方冰鎮咖啡開始販售',
                    date: '2022-05-15',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                },
                {
                    classLst: ['col', 'p-3'],
                    imgSrc: 'images\\夏季配方.jpg',
                    title: '夏季配方冰鎮咖啡開始販售',
                    date: '2022-05-15',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                },
                {
                    classLst: ['col', 'p-3', 'd-none', 'd-md-block'],
                    imgSrc: 'images\\父親節.jpg',
                    title: '父親節特惠活動開跑',
                    date: '2022-06-12',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                },
                {
                    classLst: ['col', 'p-3', 'd-none', 'd-md-block'],
                    imgSrc: 'images\\年中慶.jpg',
                    title: '年中慶即將結束',
                    date: '2022-07-09',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                },
            ],
        };
    },
});

const app3 = Vue.createApp({
    data() {
        return {
            isNeedChildSpace: false,
            ieThirstySeat: false,
            isHandMadeCake: false,
            isFreeWifi: false,
            isBrunch: false,
            isBagel: false,
            isMeetingRoom: false,

            shopNameKeyWord: '',

            shopsInfoArray: [
                {
                    shopName: '台北大安店',
                    phone: '0224584175',
                    address: '台北市大安區大安路一段256號',
                    businessHours: ['週一至週五 06:30-17:00', '週六 06:30-14:00', '週日 公休'],
                    mealTime: '全時段供餐',
                    checkItems: new Map([
                        ['親子友善空間', false],
                        ['座位30席以上', false],
                        ['手做蛋糕', true],
                        ['免費Wifi', true],
                        ['輕食早午餐', true],
                        ['貝果', true],
                        ['會議型空間租借', false],
                    ]),
                },
                {
                    shopName: '台北淡水店',
                    phone: '0224774147',
                    address: '台北市淡水區淡水路三段77號',
                    businessHours: ['週一至週五 06:30-17:00', '週六 06:30-14:00', '週日 公休'],
                    mealTime: '全時段供餐',
                    checkItems: new Map([
                        ['親子友善空間', true],
                        ['座位30席以上', true],
                        ['手做蛋糕', false],
                        ['免費Wifi', true],
                        ['輕食早午餐', true],
                        ['貝果', false],
                        ['會議型空間租借', true],
                    ]),
                },
                {
                    shopName: '台北內湖店',
                    phone: '0224993595',
                    address: '台北市內湖區內湖路一段21號',
                    businessHours: ['週一至週五 06:30-17:00', '週六 06:30-14:00', '週日 公休'],
                    mealTime: '全時段供餐',
                    checkItems: new Map([
                        ['親子友善空間', false],
                        ['座位30席以上', false],
                        ['手做蛋糕', true],
                        ['免費Wifi', true],
                        ['輕食早午餐', true],
                        ['貝果', true],
                        ['會議型空間租借', false],
                    ]),
                },
                {
                    shopName: '台中逢甲店',
                    phone: '0424517310',
                    address: '台中市西屯區西屯路二段85號',
                    businessHours: ['週一至週五 06:30-17:00', '週六 06:30-14:00', '週日 公休'],
                    mealTime: '全時段供餐',
                    checkItems: new Map([
                        ['親子友善空間', false],
                        ['座位30席以上', false],
                        ['手做蛋糕', true],
                        ['免費Wifi', true],
                        ['輕食早午餐', true],
                        ['貝果', false],
                        ['會議型空間租借', false],
                    ]),
                },
                {
                    shopName: '台中市政店',
                    phone: '0432543360',
                    address: '台中市西屯區市政路32號',
                    businessHours: ['週一至週五 06:30-17:00', '週六 06:30-14:00', '週日 公休'],
                    mealTime: '全時段供餐',
                    checkItems: new Map([
                        ['親子友善空間', false],
                        ['座位30席以上', false],
                        ['手做蛋糕', true],
                        ['免費Wifi', true],
                        ['輕食早午餐', true],
                        ['貝果', true],
                        ['會議型空間租借', false],
                    ]),
                },
                {
                    shopName: '台中市美術館店',
                    phone: '0224993595',
                    address: '台中市西區五權路一段75號',
                    businessHours: ['週一至週五 06:30-17:00', '週六 06:30-14:00', '週日 公休'],
                    mealTime: '全時段供餐',
                    checkItems: new Map([
                        ['親子友善空間', false],
                        ['座位30席以上', false],
                        ['手做蛋糕', false],
                        ['免費Wifi', false],
                        ['輕食早午餐', true],
                        ['貝果', true],
                        ['會議型空間租借', false],
                    ]),
                },
                {
                    shopName: '高雄美麗島店',
                    phone: '076211247',
                    address: '高雄市苓雅區中山路二段914號',
                    businessHours: ['週一至週五 06:30-17:00', '週六 06:30-14:00', '週日 公休'],
                    mealTime: '全時段供餐',
                    checkItems: new Map([
                        ['親子友善空間', true],
                        ['座位30席以上', false],
                        ['手做蛋糕', true],
                        ['免費Wifi', true],
                        ['輕食早午餐', true],
                        ['貝果', false],
                        ['會議型空間租借', false],
                    ]),
                },
                {
                    shopName: '高雄小港店',
                    phone: '075335698',
                    address: '高雄市小港區六福路三段87號',
                    businessHours: ['週一至週五 06:30-17:00', '週六 06:30-14:00', '週日 公休'],
                    mealTime: '全時段供餐',
                    checkItems: new Map([
                        ['親子友善空間', true],
                        ['座位30席以上', false],
                        ['手做蛋糕', true],
                        ['免費Wifi', true],
                        ['輕食早午餐', true],
                        ['貝果', false],
                        ['會議型空間租借', false],
                    ]),
                },
                {
                    shopName: '高雄市駁二特區店',
                    phone: '075216914',
                    address: '高雄市鹽埕區大勇路125號',
                    businessHours: ['週一至週五 06:30-17:00', '週六 06:30-14:00', '週日 公休'],
                    mealTime: '全時段供餐',
                    checkItems: new Map([
                        ['親子友善空間', false],
                        ['座位30席以上', true],
                        ['手做蛋糕', false],
                        ['免費Wifi', false],
                        ['輕食早午餐', true],
                        ['貝果', false],
                        ['會議型空間租借', false],
                    ]),
                },
            ],

            nowShopsInfo: [],
        };
    },
    computed: {
        // ShopsInfoList: function () {
        //     // Using lodash library to clone the array deeply
        //     let shopsList = _.cloneDeep(this.shopsInfoArray);
        //     if (this.isNeedChildSpace) {
        //         shopsList = shopsList.filter((item) =>
        //             item.checkItems.get("親子友善空間")
        //         );
        //     }
        //     if (this.ieThirstySeat) {
        //         shopsList = shopsList.filter((item) =>
        //             item.checkItems.get("座位30席以上")
        //         );
        //     }
        //     if (this.isHandMadeCake) {
        //         shopsList = shopsList.filter((item) =>
        //             item.checkItems.get("手做蛋糕")
        //         );
        //     }
        //     if (this.isFreeWifi) {
        //         shopsList = shopsList.filter((item) =>
        //             item.checkItems.get("免費Wifi")
        //         );
        //     }
        //     if (this.isBrunch) {
        //         shopsList = shopsList.filter((item) =>
        //             item.checkItems.get("輕食早午餐")
        //         );
        //     }
        //     if (this.isBagel) {
        //         shopsList = shopsList.filter((item) =>
        //             item.checkItems.get("貝果")
        //         );
        //     }
        //     if (this.isMeetingRoom) {
        //         shopsList = shopsList.filter((item) =>
        //             item.checkItems.get("會議型空間租借")
        //         );
        //     }
        //     return shopsList;
        // },
    },
    methods: {
        OnButtonClickedLookUpByType() {
            this.nowShopsInfo = _.cloneDeep(this.shopsInfoArray);

            if (this.isNeedChildSpace) {
                this.nowShopsInfo = this.nowShopsInfo.filter((item) => item.checkItems.get('親子友善空間'));
            }

            if (this.ieThirstySeat) {
                this.nowShopsInfo = this.nowShopsInfo.filter((item) => item.checkItems.get('座位30席以上'));
            }

            if (this.isHandMadeCake) {
                this.nowShopsInfo = this.nowShopsInfo.filter((item) => item.checkItems.get('手做蛋糕'));
            }

            if (this.isFreeWifi) {
                this.nowShopsInfo = this.nowShopsInfo.filter((item) => item.checkItems.get('免費Wifi'));
            }

            if (this.isBrunch) {
                this.nowShopsInfo = this.nowShopsInfo.filter((item) => item.checkItems.get('輕食早午餐'));
            }

            if (this.isBagel) {
                this.nowShopsInfo = this.nowShopsInfo.filter((item) => item.checkItems.get('貝果'));
            }

            if (this.isMeetingRoom) {
                this.nowShopsInfo = this.nowShopsInfo.filter((item) => item.checkItems.get('會議型空間租借'));
            }
        },
        OnButtonClickedLookUpByRegion() {
            this.nowShopsInfo = _.cloneDeep(this.shopsInfoArray);

            this.nowShopsInfo = this.nowShopsInfo.filter((item) => item.shopName.includes(this.shopNameKeyWord));
        },
    },

    mounted() {
        console.log('mounted');
        this.nowShopsInfo = this.shopsInfoArray;
    },
});

const footerApp = Vue.createApp({});

footerApp.component('my-footer', {
    template: `
<div class="row mx-0">
    <div class="col-6 mx-auto mt-4">
        <div class="text-center">
            <h2 class="text-primary">XYZ Coffee</h2>
        </div>
    </div>
</div>
<div class="row mx-0">
    <div class="col-5 mx-auto mt-2">
        <div class="text-center lh-3 text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptate recusandae quae non consequatur architecto
            autem repellat, delectus illo iusto natus nostrum quia
            minima voluptates odio corrupti.
        </div>
    </div>
</div>
<div class="row mx-0">
    <div class="col-6 mx-auto mt-3">
        <div class="text-center">
            <i
                class="bi bi-facebook me-2"
                style="font-size: 1.7rem; color: rgb(27, 100, 236)"
            ></i>
            <i
                class="bi bi-instagram me-2"
                style="font-size: 1.7rem; color: rgb(27, 100, 236)"
            ></i>
            <i
                class="bi bi-twitter me-2"
                style="font-size: 1.7rem; color: rgb(27, 100, 236)"
            ></i>
            <i
                class="bi bi-google"
                style="font-size: 1.7rem; color: rgb(27, 100, 236)"
            ></i>
        </div>
    </div>
</div>
<div class="row mx-0">
    <div class="col-12 col-lg-8 mx-auto">
        <div class="text-center mt-3 mb-4">
            <button
                type="button"
                class="btn btn-footer btn-outline-primary me-2"
            >
                Home
            </button>
            <button
                type="button"
                class="btn btn-footer btn-outline-primary me-2"
            >
                About
            </button>
            <button
                type="button"
                class="btn btn-footer btn-outline-primary me-2"
            >
                Contact
            </button>
            <button
                type="button"
                class="btn btn-footer btn-outline-primary me-2"
            >
                Blog
            </button>
            <button 
                type="button" 
                class="btn btn-footer btn-outline-primary"
            >
                Article
            </button>
        </div>
    </div>
</div>`,
});

const navApp = Vue.createApp({
    data() {
        return {
            UserName: 'Wolf Hu',
            logText: '登入',
            shopNameArray: [
                '台北大安店',
                '台北淡水店',
                '台北內湖店',
                '台中逢甲店',
                '台中市政店',
                '台中市美術館店',
                '高雄美麗島店',
                '高雄小港店',
                '高雄市駁二特區店',
            ],
        };
    },
});

navApp.component('my-nav', {
    template: `
<div class="container">
    <button
        class="navbar-toggler me-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
        <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand me-auto me-md-5" href="/index.html">
        <h2 class="mb-0">XYZ coffee</h2>
    </a>
    <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
    >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item me-3 dropdown">
                <a
                    class="nav-link"
                    href="/onlineShop.html"
                    id="navbarDropdown"
                    role="button"
                >
                    <p class="mb-0 mt-3 text-center">Online shop</p>
                    <p class="text-center">線上商店</p>
                </a>
                <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                >
                    <li class="my-3">
                        <a
                            class="dropdown-item"
                            href="/onlineShop.html"
                        >
                            線上商店
                        </a>
                    </li>
                    <li class="mb-3">
                        <a
                            class="dropdown-item"
                            href="javascript:void(0);"
                        >
                            聯名商品
                        </a>
                    </li>
                    <li class="mb-3">
                        <a
                            class="dropdown-item"
                            href="javascript:void(0);"
                        >
                            咖啡豆
                        </a>
                    </li>
                    <li class="mb-3">
                        <a
                            class="dropdown-item"
                            href="javascript:void(0);"
                        >
                            濾泡咖啡
                        </a>
                    </li>
                    <li class="mb-3">
                        <a
                            class="dropdown-item"
                            href="javascript:void(0);"
                        >
                            咖啡器具
                        </a>
                    </li>
                    <li class="mb-3">
                        <a
                            class="dropdown-item"
                            href="javascript:void(0);"
                        >
                            原創商品
                        </a>
                    </li>
                </ul>
            </li>
            <li class="nav-item me-3">
                <a class="nav-link" href="#">
                    <p class="mb-0 mt-3 text-center">About us</p>
                    <p class="text-center">關於我們</p>
                </a>
            </li>
            <li class="nav-item me-3 dropdown">
                <a
                    class="nav-link"
                    href="/shopsInfo.html"
                    id="navbarDropdown"
                    role="button"
                >
                    <p class="mb-0 mt-3 text-center">Shop</p>
                    <p class="text-center">分店一覽</p>
                </a>
                <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                >

                    <li class="mt-3" v-for="shopName in shopnames">
                        <a class="dropdown-item" href="#">
                            {{shopName}}
                        </a>
                    </li>

                    <hr />

                    <li>
                        <a
                            class="dropdown-item"
                            href="/shopsInfo.html"
                        >
                            more
                        </a>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <p class="mb-0 mt-3 text-center">News</p>
                    <p class="text-center">最新消息</p>
                </a>
            </li>
        </ul>
        <button 
            class="btn btn-primary mx-2" 
            type="button" 
            @click = logInOut
            data-bs-toggle="modal" 
            data-bs-target="#loginModal"
        > 
            {{logtext}} 
        </button>

        <div 
            class="modal fade" 
            id="loginModal" 
            data-bs-backdrop="static" 
            data-bs-keyboard="false" 
            tabindex="-1" 
            aria-labelledby="staticBackdropLabel" 
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 
                            class="modal-title" 
                            id="staticBackdropLabel"
                        >
                            會員登入
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <input type="text" class="account form-control my-4" placeholder="Username" />
                            </div>
                            <div class="form-group">
                                <input type="password" class="password form-control my-4" placeholder="Password" />
                            </div>
                            <div class="form-group">
                                <input type="checkbox" class="remember mb-3" />  記住我的密碼
                            </div>
                            <button type="button" class="btn btn-info fs-2">登入</button>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">OK</button>
                        <button type="button" class="btn btn-primary">Close</button> -->
                        <div class="signup">
                            <span class="fs-4 me-4">尚未成為會員</span>
                            <a href="#" type="button" class="member fs-2">立即加入</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button class="btn btn-primary" type="button">註冊</button>
        <div id="User" class="ms-5 fs-1"> {{name}} </div>
    </div>
</div>`,
    props: ['name', 'logtext', 'shopnames'],
    methods: {
        logInOut() {
            console.log('logInOut');
        },
    },
});

document.addEventListener('DOMContentLoaded', () => {
    const vm = app.mount('#carouselIndicators');
    const vm2 = app2.mount('#cardGroup');
    const vm3 = app3.mount('#shopsInfomation');
    const vm4 = footerApp.mount('#footerId');
    const vm5 = navApp.mount('#navId');
});
