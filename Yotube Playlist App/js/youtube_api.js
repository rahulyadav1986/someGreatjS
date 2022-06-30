$(document).ready(function(){
    let key= 'AIzaSyCplz937EKvTNrAJf8RhgztorUqadEANng';
    let youtubeUser= 'UCwmScL-zapNerUJTu3Jy3bQ';
    let playlistId= 'PLV8g3qzGNuWgjFqtkydebK0lVe1_nQQJ1';
    let URL= 'https://www.googleapis.com/youtube/v3/playlistItems';
    let subcount= document.getElementById('subcount');

    var options={
        part: 'snippet',
        key: key,
        maxResults: 500,
        playlistId: playlistId
    }

    loadVids();

    function loadVids(){
        $.getJSON(URL, options, function(data){
            var id= data.items[0].snippet.resourceId.videoId;
            mainVid(id);
            resultLoop(data)
        })
    }

    function mainVid(id){
        $('#video').html(`
            <iframe src="https://www.youtube-nocookie.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `)
    }

    function resultLoop(data){
        $.each(data.items, function(i, item){
            let thumb= item.snippet.thumbnails.medium.url;
            let title= item.snippet.title;
            let desc= item.snippet.description.substring(0, 100);
            let vid= item.snippet.resourceId.videoId 

            $('.video_list_section').append(`
                <li class="d-flex flex-wrap" data-key="${vid}">
                    <div class="image_back">
                        <img src="${thumb}" alt="">
                    </div>
                    <div class="details">
                        <h2>${title}</h2>
                        <p>${desc}</p>
                    </div>
                </li>
            `);
        });
    }

    $('.video_list_section') .on('click', 'li', function(){
        let id= $(this).attr('data-key');
        mainVid(id);
    });
    function getsubscribers(){
        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${key}`)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            subcount.innerHTML= data["items"][0].statistics.subscriberCount;
        })
    }
    getsubscribers();

    



});