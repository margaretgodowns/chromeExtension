$(document).ready(function(){

  $.ajax({
    url: 'http://www.reddit.com/r/listentothis.json',
    method: 'GET',

    success:(function(data){

      var songPosts = "<ul>"
      for(var i = 1; i < 6; i++){

        songPosts += '<li class="link"><a href="' + data.data.children[i].data.url + '"></li><li><img src ="' + data.data.children[i].data.thumbnail + '">' + data.data.children[i].data.title + '<li>';

      }

      songPosts += '</ul>';

    $(".songLinks").html(songPosts);

    console.log(data.data.children[i].data.thumbnail)
  }

)

});




});
