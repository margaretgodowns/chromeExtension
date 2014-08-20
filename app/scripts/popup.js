$.ajax({
  url: 'http://www.reddit.com/r/listentothis/.json',
  type: 'GET'
})
  .success(function(data){
    console.log(data.data.children[1].data.url);

})
