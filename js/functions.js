
var data = [];
$(document).ready(function ( ) {
    //bind event handlers
    //$('.buttons a').click(function(e){e.preventDefault()});
    //$('.showChampions').click(function(){});
    // get JSON data
    /*var mongodb = require('mongodb').MongoClient;
    MongoClient.connect("mongodb://localhost:27017/LeagueOfLegends", function(err, db) {
    if(!err) {
    console.log("We are connected");
    }
    });
    */
    $.getJSON("champions.json", function (response) { 
        data = response;
        var champions = Object.keys(data);
        for(var i=0; i<champions.length; i++) {
            console.log(data[champions[i]]);
            console.log(data[champions[i]]["name"]);
            var attackspeed = 0.625/(1-data[champions[i]]["stats"]["attackspeedoffset"])
            var champInfo = '<div class="col-xs-6 col-md-4 championItem" id="champion">'+
                                '<div class="champTopBar">' +
                                    '<div class="champSprite"><img src="img%20copy/champion/'+data[champions[i]]["image"]["full"]+'"></div>'+
                                    '<div class="champName"><h2>'+data[champions[i]]["name"]+ '</h2></div>' +
                                    '<div class="champTitle"><h2>' + data[champions[i]]["title"] +'</h2></div>' + 
                                '</div>'+
                                '<div class="row" id="stats">' +
                                    '<div class="col-sm-6" id="statsLeft">'+
                                        '<p> Health: '+data[champions[i]]["stats"]["hp"]+'(+'+data[champions[i]]["stats"]["hpperlevel"]+')</p>' + 
                                        '<p> Health Regen: '+data[champions[i]]["stats"]["hpregen"]+'(+'+data[champions[i]]["stats"]["hpregenperlevel"]+')</p>' +
                                        '<p> Mana: '+data[champions[i]]["stats"]["mp"]+'(+'+data[champions[i]]["stats"]["mpperlevel"]+')</p>' +
                                        '<p> Mana Regen: '+data[champions[i]]["stats"]["mpregen"]+'(+'+data[champions[i]]["stats"]["mpregenperlevel"]+')</p>' +
                                        '<p> Move Speed: '+data[champions[i]]["stats"]["movespeed"]+'</p>' +
                                    '</div>'+
                                    '<div class="col-sm-6" class="pull-left" id="statsRight">'+
                                        '<p> Armor: '+data[champions[i]]["stats"]["armor"]+'(+'+data[champions[i]]["stats"]["armorperlevel"]+')</p>' +
                                        '<p> Magic Resist: '+data[champions[i]]["stats"]["spellblock"]+'(+'+data[champions[i]]["stats"]["spellblockperlevel"]+')</p>' +
                                        '<p> Attack Range: '+data[champions[i]]["stats"]["attackrange"]+'</p>' +
                                        '<p> Attack Damage: '+data[champions[i]]["stats"]["attackdamage"]+'('+data[champions[i]]["stats"]["attackdamageperlevel"]+')</p>' +   
                                        '<p> Attack Speed: '+attackspeed.toFixed(3)+'(+'+data[champions[i]]["stats"]["attackspeedperlevel"]+')</p>' +   
                                    '</div>'
            $("#championList").append(champInfo);
        }
    });
    
    /*Object.prototype.each = function(collection, callback){
    if(Array.isArray(collection)){
        for(var i=0; i<collection.length; i++){
           callback(collection[i]);
           }
        }
     else {
         for(var x in collection){
             callback(collection[x]);
             }
     }
}*/

    Array.prototype.concatAll = function() {
        var results = [];
        this.forEach(function(subArray) {
            results.push.apply(results, subArray);
            return results;
        });
    };
    console.log(championData);
    var search = function(championName) {
        console.log(championData[championName]);
    };
    //each(championData, console.log());
    /*var showAll = function(championData) {
        forEach(championData, function() {
            var champInfo = '<div class="champStats">'+
                                '<h2>'this.name'</h2>'+
                                '<img src="'this.image.full'">'+
                                '<p>'this.stats.hp'</p>'
                                '<p>'this.stats.hpperlevel'</p>'+
                            '</div>';
            return $(".champList").append(champInfo);
        });
    };*/
});

