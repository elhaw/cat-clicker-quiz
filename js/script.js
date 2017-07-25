



var cats = [{
        path: "img/cat.jpg",
        id: "0",
        name: 'lazy Cat',
        click :0
    },
    {
        path: "img/cat.jpg",
        id: "1",
        name: 'shy Cat',
       click :0

    },
     {
        path: "img/cat.jpg",
        id: "2",
        name: 'mmm Cat',
        click :0

    },
    {
        path: "img/cat.jpg",
        id: "3",
        name: 'beauty Cat',
        click :0

    },
    {
        path: "img/cat.jpg",
        id: "4",
        name: 'IT Cat',
        click:0

    }   
 ]


for (var i = 0; i < cats.length ; i ++)
{	
	var containerId = "cat-container"+ i;
	var catName = cats[i].name;
	var imgPath = cats[i].path;
	var clickId = "click"+i;
	var imageId = "cat"+i;
	$('.left-container').append('<div id ="'+containerId+'">');
	$('#'+containerId+'').append('<p>'+catName+'</p>');	
	$('#'+containerId+'').append('<p id = "'+clickId+'">'+cats[i].click+'</p>');
	$('#'+containerId+'').append('<img id ="'+imageId+'"src ="'+imgPath+'">');


	$( '#cat'+i+'' ).click( (function(icopy) {
	  return function() {
	    cats[icopy].click++;
	    $('#click'+icopy+'').text(cats[icopy].click);
	  }
	})(i));
	
}


