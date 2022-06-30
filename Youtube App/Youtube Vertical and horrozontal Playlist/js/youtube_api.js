$(document).ready(function () {
    let key2 = 'AIzaSyApCs9GP4Dk4nDB9qDWcUmXTE-HALdL7_g';
    let youtubeUser = 'UCQHLxxBFrbfdrk1jF0moTpw';
    let playlistId = 'PLV8g3qzGNuWh5plSw2UdjKcI2Dfiwy7KU';
    let URL = 'https://www.googleapis.com/youtube/v3/playlistItems';
    let subCount = document.getElementById('subCount');
    var options = {
        part: 'snippet',
        key: key2,
        maxResults: 500,
        playlistId: playlistId

    }

    loadVids();

    function loadVids() {
        $.getJSON(URL, options, function (data) {
            var id = data.items[0].snippet.resourceId.videoId;
            mainVid(id);
            resultsLoop(data);
        });
    }

    function mainVid(id) {
        $('#video').html(`
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" title="Codex Rahul Video Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    `);
    }


    function resultsLoop(data) {

        $.each(data.items, function (i, item) {

            var thumb = item.snippet.thumbnails.medium.url;
            var title = item.snippet.title;
            var desc = item.snippet.description.substring(0, 100,);
            var vid = item.snippet.resourceId.videoId;
            


            $('.video_list_section').append(`
                <li class="d-flex flex-wrap" data-key="${vid}">
                    <div class="image_back">
                        <img src="${thumb}" alt="">
                    </div>
                    <div class="details">
                        <h2>${title}</h2>
                        <p>${desc}...</p>
                    </div>
                </li>
            `);
        });
    }

    // CLICK EVENT
    $('.video_list_section').on('click', 'li', function () {
        var id = $(this).attr('data-key');
        mainVid(id);
    });
    function getSubscribers() {
        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${key2}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            subCount.innerHTML = data["items"][0].statistics.subscriberCount;
        })
    
    }
    getSubscribers();
});




    
    