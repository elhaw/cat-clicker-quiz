



var cats = [{
        path: "img/cat.jpg",
        id: "0",
        name: 'lazy Cat',
        clickVal :0
    },
    {
        path: "img/cat.jpg",
        id: "1",
        name: 'shy Cat',
       clickVal :0

    },
     {
        path: "img/cat.jpg",
        id: "2",
        name: 'mmm Cat',
        clickVal :0

    },
    {
        path: "img/cat.jpg",
        id: "3",
        name: 'beauty Cat',
        clickVal :0

    },
    {
        path: "img/cat.jpg",
        id: "4",
        name: 'IT Cat',
        clickVal :0

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
	$('#'+containerId+'').append('<p id = "'+clickId+'">'+i+'</p>');
	$('#'+containerId+'').append('<img id ="'+imageId+'"src ="'+imgPath+'">');

	
}
