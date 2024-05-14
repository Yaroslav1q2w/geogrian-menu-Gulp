const menuCategories=[{id:1,title:"Холодные закуски",images:["../img/Rectangle 25.jpg","../img/Rectangle 26.jpg","../img/Rectangle 27.jpg","../img/Rectangle 28.jpg","../img/Rectangle 29.jpg","../img/Rectangle 22 (1).jpg","../img/Rectangle 21.jpg","../img/Rectangle 32.jpg"],items:[{name:"Закуска 1",grams:"100г",calories:"200 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"100 грн"},{name:"Закуска 2",grams:"100г",calories:"200 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"120 грн"},{name:"Закуска 3",grams:"100г",calories:"200 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"120 грн"},{name:"Закуска 4",grams:"100г",calories:"200 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"120 грн"},{name:"Закуска 5",grams:"100г",calories:"200 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"120 грн"},{name:"Закуска 6",grams:"100г",calories:"200 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"120 грн"},{name:"Закуска 7",grams:"100г",calories:"200 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"120 грн"},{name:"Закуска 8",grams:"100г",calories:"200 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"120 грн"},{name:"Закуска 9",grams:"100г",calories:"200 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"120 грн"},{name:"Закуска 10",grams:"100г",calories:"200 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"120 грн"}]},{id:2,title:"Салаты",images:["../img/Rectangle 25.jpg","../img/Rectangle 26.jpg","../img/Rectangle 27.jpg","../img/Rectangle 28.jpg","../img/Rectangle 29.jpg","../img/Rectangle 22 (1).jpg","../img/Rectangle 21.jpg","../img/Rectangle 32.jpg"],items:[{name:"Салат 1",grams:"150г",calories:"250 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"130 грн"},{name:"Салат 2",grams:"150г",calories:"250 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"140 грн"},{name:"Салат 3",grams:"150г",calories:"250 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"140 грн"},{name:"Салат 4",grams:"150г",calories:"250 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"140 грн"},{name:"Салат 5",grams:"150г",calories:"250 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"140 грн"},{name:"Салат 6",grams:"150г",calories:"250 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"140 грн"},{name:"Салат 7",grams:"150г",calories:"250 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"140 грн"},{name:"Салат 8",grams:"150г",calories:"250 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"140 грн"},{name:"Салат 9",grams:"150г",calories:"250 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"140 грн"},{name:"Салат 10",grams:"150г",calories:"250 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"140 грн"}]},{id:3,title:"Выпечка",images:["../img/Rectangle 25.jpg","../img/Rectangle 26.jpg","../img/Rectangle 27.jpg","../img/Rectangle 28.jpg","../img/Rectangle 29.jpg","../img/Rectangle 22 (1).jpg","../img/Rectangle 21.jpg","../img/Rectangle 32.jpg"],items:[{name:"Выпечка 1",grams:"100г",calories:"300 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"150 грн"},{name:"Выпечка 2",grams:"100г",calories:"300 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"160 грн"},{name:"Выпечка 3",grams:"100г",calories:"300 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"160 грн"},{name:"Выпечка 4",grams:"100г",calories:"300 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"160 грн"},{name:"Выпечка 5",grams:"100г",calories:"300 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"160 грн"},{name:"Выпечка 6",grams:"100г",calories:"300 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"160 грн"},{name:"Выпечка 7",grams:"100г",calories:"300 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"160 грн"},{name:"Выпечка 8",grams:"100г",calories:"300 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"160 грн"},{name:"Выпечка 9",grams:"100г",calories:"300 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"160 грн"},{name:"Выпечка 10",grams:"100г",calories:"300 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"160 грн"}]},{id:4,title:"Супы",images:["../img/Rectangle 25.jpg","../img/Rectangle 26.jpg","../img/Rectangle 27.jpg","../img/Rectangle 28.jpg","../img/Rectangle 29.jpg","../img/Rectangle 22 (1).jpg","../img/Rectangle 21.jpg","../img/Rectangle 32.jpg"],items:[{name:"Суп 1",grams:"250г",calories:"100 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"110 грн"},{name:"Суп 2",grams:"250г",calories:"100 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"120 грн"},{name:"Суп 3",grams:"250г",calories:"100 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"120 грн"},{name:"Суп 4",grams:"250г",calories:"100 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"120 грн"},{name:"Суп 5",grams:"250г",calories:"100 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"120 грн"},{name:"Суп 6",grams:"250г",calories:"100 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"120 грн"},{name:"Суп 7",grams:"250г",calories:"100 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"120 грн"},{name:"Суп 8",grams:"250г",calories:"100 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"120 грн"},{name:"Суп 9",grams:"250г",calories:"100 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"120 грн"},{name:"Суп 10",grams:"250г",calories:"100 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"120 грн"}]},{id:5,title:"Блюда на мангале",images:["../img/Rectangle 25.jpg","../img/Rectangle 26.jpg","../img/Rectangle 27.jpg","../img/Rectangle 28.jpg","../img/Rectangle 29.jpg","../img/Rectangle 22 (1).jpg","../img/Rectangle 21.jpg","../img/Rectangle 32.jpg"],items:[{name:"Мангал 1",grams:"200г",calories:"400 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"200 грн"},{name:"Мангал 2",grams:"200г",calories:"400 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"220 грн"},{name:"Мангал 3",grams:"200г",calories:"400 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"220 грн"},{name:"Мангал 4",grams:"200г",calories:"400 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"220 грн"},{name:"Мангал 5",grams:"200г",calories:"400 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"220 грн"},{name:"Мангал 6",grams:"200г",calories:"400 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"220 грн"},{name:"Мангал 7",grams:"200г",calories:"400 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"220 грн"},{name:"Мангал 8",grams:"200г",calories:"400 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"220 грн"},{name:"Мангал 9",grams:"200г",calories:"400 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"220 грн"},{name:"Мангал 10",grams:"200г",calories:"400 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"220 грн"}]},{id:6,title:"Горячие блюда",images:["../img/Rectangle 25.jpg","../img/Rectangle 26.jpg","../img/Rectangle 27.jpg","../img/Rectangle 28.jpg","../img/Rectangle 29.jpg","../img/Rectangle 22 (1).jpg","../img/Rectangle 21.jpg","../img/Rectangle 32.jpg"],items:[{name:"Горячое блюдо 1",grams:"300г",calories:"350 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"180 грн"},{name:"Горячое блюдо 2",grams:"300г",calories:"350 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"190 грн"},{name:"Горячое блюдо 3",grams:"300г",calories:"350 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"190 грн"},{name:"Горячое блюдо 4",grams:"300г",calories:"350 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"190 грн"},{name:"Горячое блюдо 5",grams:"300г",calories:"350 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"190 грн"},{name:"Горячое блюдо 6",grams:"300г",calories:"350 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"190 грн"},{name:"Горячое блюдо 7",grams:"300г",calories:"350 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"190 грн"},{name:"Горячое блюдо 8",grams:"300г",calories:"350 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"190 грн"},{name:"Горячое блюдо 9",grams:"300г",calories:"350 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"190 грн"},{name:"Горячое блюдо 10",grams:"300г",calories:"350 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"190 грн"}]},{id:7,title:"Соусы",images:["../img/Rectangle 25.jpg","../img/Rectangle 26.jpg","../img/Rectangle 27.jpg","../img/Rectangle 28.jpg","../img/Rectangle 29.jpg","../img/Rectangle 22 (1).jpg","../img/Rectangle 21.jpg","../img/Rectangle 32.jpg"],items:[{name:"Соус 1",grams:"50г",calories:"50 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"50 грн"},{name:"Соус 2",grams:"50г",calories:"50 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"60 грн"},{name:"Соус 3",grams:"50г",calories:"50 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"60 грн"},{name:"Соус 4",grams:"50г",calories:"50 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"60 грн"},{name:"Соус 5",grams:"50г",calories:"50 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"60 грн"},{name:"Соус 6",grams:"50г",calories:"50 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"60 грн"},{name:"Соус 7",grams:"50г",calories:"50 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"60 грн"},{name:"Соус 8",grams:"50г",calories:"50 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"60 грн"},{name:"Соус 9",grams:"50г",calories:"50 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"60 грн"},{name:"Соус 10",grams:"50г",calories:"50 ккал",ingredients:"Состав: кур. грудка 100г; орех грец. 60г; вода 20г; шафран 5г; уксус винный 1,5 ст.л.; масло слив. 2ст.л.; соль,перец по вкусу; хмели сунели 1ч.л.;чеснок 5г; лук репчатый 10г.",price:"60 грн"}]}],swiper=new Swiper(".mySwiper",{slidesPerView:"auto",spaceBetween:6,loop:!0,centeredSlides:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}}),swiper2=new Swiper(".mySwiper2",{direction:"horizontal",loop:!0,pagination:{el:".mySwiper2Pagination",clickable:!0}}),buttonBurger=document.querySelector(".header__menu-burger"),burgerMenu=document.querySelector(".menu__burger"),spanBtnBurger=document.querySelector(".header__menu-btn"),buttonList=()=>{buttonBurger.addEventListener("click",(()=>{buttonBurger.classList.toggle("active"),burgerMenu.classList.toggle("active"),spanBtnBurger.classList.toggle("active")}))};buttonList(),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".gallery__list-img, .gallery__slider-img"),i=document.getElementById("modalElem"),n=document.getElementById("modalImage"),r=document.querySelector(".close");e.forEach((e=>{e.addEventListener("click",(e=>{i.classList.add("open"),n.src=e.target.src}))})),r.addEventListener("click",(()=>{i.classList.remove("open")})),i.addEventListener("click",(e=>{e.target===i&&i.classList.remove("open")}))})),document.querySelectorAll(".swiper-slide__button, .menu__list__button").forEach((e=>{e.addEventListener("click",(function(){const e=this.getAttribute("data-category-name");openMenuModal(e)}))}));const menuModal=document.getElementById("menuModal"),openMenuModal=e=>{const i=menuCategories.find((i=>i.title===e));if(!i)return;const n=menuModal.querySelector(".menu-modal__content");n.innerHTML="";const r=i.images?.slice(0,4).map((e=>`<img src="${e}" class="menu-image" />`)).join("")||"",a=i.images?.slice(-4).map((e=>`<img src="${e}" class="menu-image" />`)).join("")||"",t=i.items.map((e=>`\n\t\t\t<div class="menu-item">\n\t\t\t\t\t<div class="menu-item__header">\n\t\t\t\t\t\t<h3 class="menu-item__name">${e.name}</h3>\n\t\t\t\t\t\t<p class="menu-item__price">${e.price}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class="menu-item__details">${e.grams}, ${e.calories}</p>\n\t\t\t\t\t<p class="menu-item__ingredients">${e.ingredients}</p>\n\t\t\t</div>\n\t`)).join(""),g=`\n\t\t\t<div class="menu-images">${r}</div>\n\t\t\t<h2 class="menu-title">${i.title}</h2>\n\t\t\t<div class="menu-items">${t}</div>\n\t\t\t<div class="menu-images">${a}</div>\n\t`;n.insertAdjacentHTML("beforeend",g),menuModal.classList.add("open")};document.querySelectorAll(".close").forEach((e=>{e.addEventListener("click",(function(){menuModal.classList.remove("open")}))})),menuModal.addEventListener("click",(function(e){e.target===this&&this.classList.remove("open")}));const menuLink=document.querySelectorAll(".nav__link, .home__button, .menu__link-item");menuLink.forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();const i=this.getAttribute("href"),n=document.querySelector(i).offsetTop;window.scrollTo({top:n,behavior:"smooth"}),buttonBurger.classList.contains("active")&&spanBtnBurger.classList.contains("active")&&burgerMenu.classList.contains("active")&&(buttonBurger.classList.remove("active"),burgerMenu.classList.remove("active"),spanBtnBurger.classList.remove("active"))}))}));