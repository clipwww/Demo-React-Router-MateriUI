var request = require("request");
var fs = require('fs');
var cheerio = require("cheerio");

var url = "http://2cat.or.tl/~tedc21thc/live/index.html";

// 取得網頁資料
request({
    url: url,
    method: "GET"
}, function (error, response, body) {
//error是錯誤訊息，沒發生錯誤時就會是null
//response是取得的物件
//body就是整個抓回來的html
if (!error) {

    // 用 cheerio 解析 html 資料
    var $ = cheerio.load(body);
    var result = [];
    var thread_post = function(title, rand_id, id, quote, img){
        this.title = title;
        this.rand_id = rand_id;
        this.id = id;
        this.quote = quote;
        this.img = img;
    }


    var post = $(".threadpost");
   

    for(var i=0; i<post.length; i++){

       var label = $(post[i]).find("label").text().split("\n");
       var title = label[0];
       var rand_id = label[1];
       var id = $(post[i]).find(".qlink").text();
       var quote = $(post[i]).find(".quote").text();
       var img = $(post[i]).find("img").attr("src");
       // var resqote = $(post[i]).find(".resqote").text();

       var temp = new thread_post(title, rand_id, id, quote, img);
       result.push(temp);

    }

    fs.writeFileSync("data/result.json", JSON.stringify(result));

} else {
  console.log("擷取錯誤：" + error);
}
});  

