import Stall from "../models/Stall";
import Meal from "../models/Meals";

export const STALLS = [
  new Stall("s1", "Beverages"),
  new Stall("s2", "Chicken Rice"),
  new Stall("s3", "Indian Food"),
  new Stall("s4", "Noodle"),
  new Stall("s5", "Taiwanese"),
  new Stall("s6", "Western Food"),
];

export const MEALS = [
  new Meal(
    "s1m1",
    "s1",
    "Ice Lemon Tea",
    1.5,
    "https://www.ohhowcivilized.com/wp-content/uploads/2019/05/0519-lemon-iced-tea-10.jpg"
  ),
  new Meal(
    "s1m2",
    "s1",
    "Ice Milo",
    1.5,
    "http://hajikadirfoodchains.sg/image/cache/catalog/Fresh%20Juices/Milo%20Ice-500x500.jpg"
  ),
  new Meal(
    "s1m3",
    "s1",
    "Ice Tea",
    1.2,
    "http://hajikadirfoodchains.sg/image/cache/catalog/Fresh%20Juices/Teh%20O%20Ice-500x500.png"
  ),
  new Meal(
    "s1m4",
    "s1",
    "Ice Coffee",
    1.4,
    "https://images.eatthismuch.com/site_media/img/927338_tabitharwheeler_1987479b-93e4-4227-a598-bf34dcf1867f.jpg"
  ),
  new Meal(
    "s1m5",
    "s1",
    "Mineral Water",
    1.0,
    "https://sc02.alicdn.com/kf/UT8c4ClXuVaXXagOFbXy.jpg_350x350.jpg"
  ),
  new Meal(
    "s1m6",
    "s1",
    "Bandung",
    1.4,
    "https://magazine.foodpanda.my/wp-content/uploads/sites/12/2016/04/tc6-e1461773572325.jpg"
  ),
  new Meal(
    "s1m7",
    "s1",
    "Hot Chrysanthemum",
    0.8,
    "https://pm1.narvii.com/6057/25eb53ff7430e79e3bf7537537763cbd6d438c9b_hq.jpg"
  ),
  new Meal(
    "s1m8",
    "s1",
    "Hot Coffee",
    0.7,
    "https://www.lifeslittlesweets.com/wp-content/uploads/2018/05/IMG_8973_1_-Sweetened-Condensed-Milk-Coffee-680x1020.jpg"
  ),
  new Meal(
    "s2m1",
    "s2",
    "Chicken Rice (Steamed/Roasted)",
    4.2,
    "https://sethlui.com/wp-content/uploads/2019/06/maxwell-food-centre-ah-tai-tian-tian-hainanese-chicken-rice-chinatown-27.jpg"
  ),
  new Meal(
    "s2m2",
    "s2",
    "Chicken Porridge w/ cuttlefish",
    3.0,
    "https://farm5.staticflickr.com/4912/44269648730_8cecd89881_b.jpg"
  ),
  new Meal(
    "s2m3",
    "s2",
    "Chicken Macaroni",
    3.0,
    "https://3.bp.blogspot.com/-ZGfO7uO2i9c/ThumyiIbyHI/AAAAAAAAG-s/3lLOjh7_S2I/s1600/P1200927.JPG"
  ),
  new Meal(
    "s2m4",
    "s2",
    "Hainanese Chap Chye",
    6.0,
    "https://i1.wp.com/eatbook.sg/wp-content/uploads/2019/10/Tian-Tian-Hainanese-Curry-Rice-Chap-Chye-2.jpg?w=1500&ssl=1"
  ),
  new Meal(
    "s2m5",
    "s2",
    "Braised Egg",
    0.8,
    "https://www.chopsticksandflour.com/wp-content/uploads/2019/05/gyeran-jangjorim-egg-close-up-600x400.jpg"
  ),
  new Meal(
    "s3m1",
    "s3",
    "Nasi Briyani",
    5.0,
    "https://lh3.googleusercontent.com/proxy/cM3molxo24MxRxdtSWNfHVebCe9ts0nuEtoDSGHRnUezKG-Bz3DSxm0k2IaAL5B5H0vKACpFz2y_bFpWiI4R6JJoODPZVohcklwaq86nuHhZHZbytsoWO5Iz2ny6F0EP-MlKKDROhIXoGoF4V06wuV_k-KR8KHqLVuw6RJxtIQcv1HF5Q-zZyng1WC2DZw1_jVTNSOQ7ID6YcM55EzHLaG6IE8Au2l8DVq7mJx7M0fCYlKt4BqqS-w"
  ),
  new Meal(
    "s3m2",
    "s3",
    "Roti John",
    4.5,
    "https://cdn.kuali.com/wp-content/uploads/2020/05/04102216/roti-john.png"
  ),
  new Meal(
    "s3m3",
    "s3",
    "Mee Goreng",
    3.0,
    "https://tasteasianfood.com/wp-content/uploads/2019/08/Mee-Goreng-featured-image.jpeg"
  ),
  new Meal(
    "s3m4",
    "s3",
    "Paper Thosai",
    3.0,
    "https://burpple-1.imgix.net/foods/4cc1bf1c1d1f86c443a1657347_original.?w=645&dpr=1&fit=crop&q=80&auto=format"
  ),
  new Meal(
    "s4m1",
    "s4",
    "Mee Sua (Dry/Soup)",
    5.5,
    "https://i2.wp.com/farm3.staticflickr.com/2843/11404854706_f323b6c3b8_z.jpg"
  ),
  new Meal(
    "s4m2",
    "s4",
    "Fishball Kway Teow Noodle Soup",
    3.5,
    "https://i1.wp.com/eatwhattonight.com/wp-content/uploads/2017/07/Fishball-Noodles-Soup_2.jpg"
  ),
  new Meal(
    "s4m3",
    "s4",
    "Handmade Fish Ball Soup",
    3.5,
    "https://2.bp.blogspot.com/-W1QdlYyxsp0/XYRIiPo6cYI/AAAAAAAEL3k/6M0eAwexW0IGCXRyhZhC--1Wa6RXoGD3QCLcBGAsYHQ/s1600/Ru%2BJi%2BFishball.JPG"
  ),
  new Meal(
    "s4m4",
    "s4",
    "Minced Meat Noodle",
    4.0,
    "https://www.misstamchiak.com/wp-content/uploads/2019/03/DSCF4842-1-1300x867.jpg"
  ),
  new Meal(
    "s4m5",
    "s4",
    "Laksa",
    3.5,
    "https://www.misstamchiak.com/wp-content/uploads/2017/06/486-baba-low-nyonya-laksa-1300x929.jpg"
  ),
  new Meal(
    "s4m6",
    "s4",
    "Mini Pot",
    5.8,
    "https://live.staticflickr.com/4041/4655637978_539b1ac517_b.jpg"
  ),
  new Meal(
    "s4m7",
    "s4",
    "Fish Dumpling Soup",
    3.0,
    "https://order.lixinfishball.com/breadtalk-hq/wp-content/uploads/sites/4/Fish-Dumpling-Soup.jpg"
  ),
  new Meal(
    "s5m1",
    "s5",
    "Pork Chop Fried Rice",
    6.8,
    "https://i.ytimg.com/vi/C9ioE3SbdD0/maxresdefault.jpg"
  ),
  new Meal(
    "s5m2",
    "s5",
    "Shrimp Fried Rice",
    6.8,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQa3L0HX54ZwStm79Eg58SqKmym30-g5wpB1Q&usqp=CAU"
  ),
  new Meal(
    "s5m3",
    "s5",
    "Braised Beef Rice",
    5.8,
    "https://www.bearnakedfood.com/wp-content/uploads/2017/05/DSCF4178-1200x800.jpg"
  ),
  new Meal(
    "s5m4",
    "s5",
    "Pork/Chicken Chop Rice",
    5.0,
    "https://images.summitmedia-digital.com/yummyph/images/june2016/Taiwanese-Pork-Chops640.jpg"
  ),
  new Meal(
    "s5m5",
    "s5",
    "Braised Pork Rice",
    4.5,
    "https://www.mrspskitchen.net/wp-content/uploads/TDP1564.jpg"
  ),
  new Meal(
    "s5m6",
    "s5",
    "Mushroom Noodle",
    3.0,
    "https://goop.com/wp-content/uploads/2015/11/StirFriedNoodleswithMushrooms1.jpg"
  ),
  new Meal(
    "s5m7",
    "s5",
    "Braised Beef Noodle Soup",
    5.8,
    "https://thewoksoflife.com/wp-content/uploads/2017/03/beef-noodle-soup-18.jpg"
  ),
  new Meal(
    "s5m8",
    "s5",
    "Braised Pork Noodle",
    4.0,
    "https://foodtravellover.files.wordpress.com/2013/06/fried-braised-pork-noodle.jpg"
  ),
  new Meal(
    "s5m9",
    "s5",
    "Vinegar Beef Noodle",
    5.0,
    "https://lh3.googleusercontent.com/proxy/ki2M2I8vkTQYiVvRTC3pffw1mgq9O5OVWVkMe5UgV9pVEbrJ2PQOcvJECarFArWlV4k0uO7MjZ0-udpZr48FYtK_0huBKs9llZ5tOVWaR3O2j8bgIyd4_R3r_tfkud61qVfmhNBH_6itB6h0_8VcPx5T8vp4n8a5axwwCsghDZTqUKbjN5Ywli99tv2Uy1Cb0eHio7g__TcJNVG4dnypkbqp7LanlI5x56j4IA"
  ),
  new Meal(
    "s5m10",
    "s5",
    "Chilli Oil Chive Dumpling",
    3.0,
    "https://www.seriouseats.com/recipes/images/2015/03/20150310-sichuan-wonton-chili-oil-recipe-new-1-1500x1125.jpg"
  ),
  new Meal(
    "s6m1",
    "s6",
    "Black Pepper Steak",
    13.5,
    "https://media-cdn.tripadvisor.com/media/photo-s/06/37/b8/ae/aston.jpg"
  ),
  new Meal(
    "s6m2",
    "s6",
    "Prime Sirloin",
    13.5,
    "https://www.astons.com.sg/wp-content/uploads/2016/11/sig1.jpg"
  ),
  new Meal(
    "s6m3",
    "s6",
    "Prime Ribeye",
    15.5,
    "https://3.bp.blogspot.com/_IdSQboBHMX4/RbjbY7P9ZcI/AAAAAAAAASw/dXE6lkzMGlk/s400/e+P1020364.JPG"
  ),
  new Meal(
    "s6m4",
    "s6",
    "Pork Chop",
    10.5,
    "https://cdn1.sg.orstatic.com/userphoto/photo/0/AG/0022CK063B935258DEB9A4px.jpg"
  ),
  new Meal(
    "s6m5",
    "s6",
    "Black Pepper Chicken",
    7.5,
    "https://keeprecipes.com/sites/keeprecipes/files/imagecache/recipe_large/101-blackpepper-chicken-chop.jpg"
  ),
  new Meal(
    "s6m6",
    "s6",
    "Chargrilled Chicken",
    7.5,
    "https://www.halaltag.com/images/photo/854-photo.jpg"
  ),
  new Meal(
    "s6m7",
    "s6",
    "Fiery Chicken",
    7.5,
    "https://burpple-1.imgix.net/foods/2fccaa683ee74778c601537455_original.?w=645&dpr=1&fit=crop&q=80&auto=format"
  ),
  new Meal(
    "s6m8",
    "s6",
    "Hickory BBQ Chicken",
    7.5,
    "https://burpple-2.imgix.net/foods/1a48286544e0e5c0cc1494585_original.?w=645&dpr=1&fit=crop&q=80&auto=format"
  ),
  new Meal(
    "s6m9",
    "s6",
    "Grilled White Fish Fillet",
    8.5,
    "https://previews.123rf.com/images/robynmac/robynmac0810/robynmac081000076/3737622-fish-and-chips-with-salad-grilled-white-fish-fillet-with-thick-potato-chips-.jpg"
  ),
  new Meal(
    "s6m10",
    "s6",
    "Breaded Fried Chicken",
    7.5,
    "https://scontent.fsin9-2.fna.fbcdn.net/v/t1.0-9/37830872_981191182061844_2157708569267404800_o.jpg?_nc_cat=109&_nc_sid=9267fe&_nc_ohc=6TJmgasf2nMAX-NJa4Q&_nc_ht=scontent.fsin9-2.fna&oh=823908159c6dc008860799288b336f55&oe=5F1A38E1"
  ),
  new Meal(
    "s6m11",
    "s6",
    "Breaded Fried White Fish",
    8.5,
    "https://phuachiuyen.files.wordpress.com/2013/05/img_8875.jpg"
  ),
  new Meal(
    "s6m12",
    "s6",
    "Beef Bolognese",
    6.9,
    "https://4.bp.blogspot.com/_GJNlElzDfsY/SBILBdcab7I/AAAAAAAABUE/K63IvhiPykQ/s400/bolognese.jpg"
  ),
  new Meal(
    "s6m13",
    "s6",
    "Carbonara",
    7.9,
    "https://burpple-3.imgix.net/foods/2fccaa7462b12766dd61610404_original.?w=645&dpr=1&fit=crop&q=80&auto=format"
  ),
  new Meal(
    "s6m14",
    "s6",
    "Classic Cheese Burger",
    12.9,
    "https://www.astons.com.sg/wp-content/uploads/2016/10/sig2.jpg"
  ),
  new Meal(
    "s6m15",
    "s6",
    "Side Dishes ($2.50 Each)",
    2.5,
    "https://goodyfeed.com/wp-content/uploads/2017/04/chicaboo-2.jpg"
  ),
];
