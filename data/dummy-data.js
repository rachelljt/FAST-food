import Stall from '../models/Stall';
import Meal from '../models/Meals';

export const STALLS = [
    new Stall('s1', 'Beverages'),
    new Stall('s2', 'Chicken Rice'),
    new Stall('s3', 'Indian Food'),
    new Stall('s4', 'Noodle'),
    new Stall('s5', 'Taiwanese'),
    new Stall('s6', 'Western Food')
];

export const MEALS = [
    new Meal('s1m1', 's1', 'Ice Lemon Tea', 1.50, 'https://www.ohhowcivilized.com/wp-content/uploads/2019/05/0519-lemon-iced-tea-10.jpg'),
    new Meal('s1m2', 's1', 'Ice Milo', 1.50, 'http://hajikadirfoodchains.sg/image/cache/catalog/Fresh%20Juices/Milo%20Ice-500x500.jpg' ),
    new Meal('s1m3', 's1', 'Ice Tea', 1.20, 'http://hajikadirfoodchains.sg/image/cache/catalog/Fresh%20Juices/Teh%20O%20Ice-500x500.png'),
    new Meal('s1m4', 's1', 'Ice Coffee', 1.40, 'https://images.eatthismuch.com/site_media/img/927338_tabitharwheeler_1987479b-93e4-4227-a598-bf34dcf1867f.jpg'),
    new Meal('s1m5', 's1', 'Mineral Water', 1.00, 'https://sc02.alicdn.com/kf/UT8c4ClXuVaXXagOFbXy.jpg_350x350.jpg'),
    new Meal('s1m6', 's1', 'Bandung', 1.40, 'https://magazine.foodpanda.my/wp-content/uploads/sites/12/2016/04/tc6-e1461773572325.jpg'),
    new Meal('s1m7', 's1', 'Hot Chrysanthemum', 0.80, 'https://pm1.narvii.com/6057/25eb53ff7430e79e3bf7537537763cbd6d438c9b_hq.jpg'),
    new Meal('s1m8', 's1', 'Hot Coffee', 0.70, 'https://www.lifeslittlesweets.com/wp-content/uploads/2018/05/IMG_8973_1_-Sweetened-Condensed-Milk-Coffee-680x1020.jpg'),
    new Meal('s2m1', 's2', 'Chicken Rice (Steamed/Roasted)', 4.20, 'https://sethlui.com/wp-content/uploads/2019/06/maxwell-food-centre-ah-tai-tian-tian-hainanese-chicken-rice-chinatown-27.jpg'),
    new Meal('s2m2', 's2', 'Chicken Porridge w/ cuttlefish', 3.00, 'https://farm5.staticflickr.com/4912/44269648730_8cecd89881_b.jpg'),
    new Meal('s2m3', 's2', 'Chicken Macaroni', 3.00, 'https://3.bp.blogspot.com/-ZGfO7uO2i9c/ThumyiIbyHI/AAAAAAAAG-s/3lLOjh7_S2I/s1600/P1200927.JPG'),
    new Meal('s2m4', 's2', 'Hainanese Chap Chye', 6.00, 'https://i1.wp.com/eatbook.sg/wp-content/uploads/2019/10/Tian-Tian-Hainanese-Curry-Rice-Chap-Chye-2.jpg?w=1500&ssl=1'),
    new Meal('s2m5', 's2', 'Braised Egg', 0.80, 'https://www.chopsticksandflour.com/wp-content/uploads/2019/05/gyeran-jangjorim-egg-close-up-600x400.jpg'),
    new Meal('s3m1', 's3', 'Nasi Briyani', 5.00, 'https://lh3.googleusercontent.com/proxy/cM3molxo24MxRxdtSWNfHVebCe9ts0nuEtoDSGHRnUezKG-Bz3DSxm0k2IaAL5B5H0vKACpFz2y_bFpWiI4R6JJoODPZVohcklwaq86nuHhZHZbytsoWO5Iz2ny6F0EP-MlKKDROhIXoGoF4V06wuV_k-KR8KHqLVuw6RJxtIQcv1HF5Q-zZyng1WC2DZw1_jVTNSOQ7ID6YcM55EzHLaG6IE8Au2l8DVq7mJx7M0fCYlKt4BqqS-w'),
    new Meal('s3m2', 's3', 'Roti John', 4.50, 'https://cdn.kuali.com/wp-content/uploads/2020/05/04102216/roti-john.png'),
    new Meal('s3m3', 's3', 'Mee Goreng', 3.00, 'https://tasteasianfood.com/wp-content/uploads/2019/08/Mee-Goreng-featured-image.jpeg'),
    new Meal('s3m4', 's3', 'Paper Thosai', 3.00, 'https://burpple-1.imgix.net/foods/4cc1bf1c1d1f86c443a1657347_original.?w=645&dpr=1&fit=crop&q=80&auto=format')

];