exports.seed = function(knex, Promise) {
  return knex('resources').del()
    .then(function () {
      return Promise.all([
        knex('resources').insert({id: 1, title: 'Weird Animal Facts', url:'https://www.thedodo.com/16-amazing-animal-facts-1094218100.html', image:'https://assets3.thrillist.com/v1/image/2498964/size/tmg-article_tall.jpg', description:'Australians cannot blame their flatulance on Kangaroos!', user_id: 3}),
        knex('resources').insert({id: 2, title: 'Facebook', url:'https://www.facebook.com/', image:'https://images-na.ssl-images-amazon.com/images/I/9149om0gRsL.jpg', description:'An in-depth exploration of Earths weirdest species', user_id: 2}),
        knex('resources').insert({id: 3, title: 'Slide of Hand', url:'https://assets3.thrillist.com/v1/image/2498964/size/tmg-article_tall.jpg', image:'https://i.kinja-img.com/gawker-media/image/upload/s--I3zUSxo9--/c_scale,dpr_2.0,f_auto,fl_progressive,q_80,w_800/17uk3i3sjmn9tjpg.jpg', description:'Coin trick', user_id: 1}),
        knex('resources').insert({id: 4, title: 'My birthday wish', url:'https://img.buzzfeed.com/buzzfeed-static/static/2015-10/29/11/enhanced/webdr06/enhanced-2099-1446132874-22.jpg?downsize=800:*&output-format=auto&output-quality=auto', image:'https://images-na.ssl-images-amazon.com/images/I/71ICjgNrlbL._SL1500_.jpg', description:'A build your own fort kit :smile', user_id: 1}),
        knex('resources').insert({id: 5, title: 'New Orlean Map', url:'https://www.bigeasy.com/onthetown/maps', image:'https://civilrightstrail.com/app/uploads/2017/10/Destination_NewOrleans_page.jpg', description:'New Orleans for a quick reference', user_id: 1}),
        knex('resources').insert({id: 6, title: 'Fauna and Flora', url:'https://www.fauna-flora.org/', image:'https://www.parconazionaledelvesuvio.it/wp-content/uploads/2018/03/la_fauna-ente_parco_nazionale_del_vesuvio-01.jpg', description:'Next level magic', user_id: 2}),
        knex.raw(`SELECT setval('resources_id_seq', 3, true)`)
      ]);
    });
};
