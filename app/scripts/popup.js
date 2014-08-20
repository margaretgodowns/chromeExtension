$(document).ready(function(){

  $.ajax({
    url: 'http://www.reddit.com/r/listentothis.json',
    method: 'GET',

    success:(function(data){

      var songPosts = "<ul>"
      for(var i = 0; i < 5; i++){

        songPosts += '<li><a href="' + data.data.children[i].data.url + '"><img src ="' + data.data.children[i].data.thumbnail + ">" + data.data.children[i].data.title + '<li>';

      }

      songPosts += '</ul>';

    $(".songLinks").html(songPosts);

    console.log(data.data.children[i].data.thumbnail)
  }

)

});




});
