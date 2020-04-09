jQuery(document).ready(function () {
    let e = $('.instagram-widget');
    loadInstagram(e.data('name'), e.data('limit'), e);
});

function loadInstagram(username, elemCount, elemToPaste) {
    var imagesJSON = 'https://www.instagram.com/'+username+'/?__a=1';
    $.getJSON(imagesJSON, {
        format: "json"
    }).done(function (data) {
        var items = data.graphql.user.edge_owner_to_timeline_media.edges.slice(0, elemCount);

        console.log(items);
        $.each(items, function (i, item) {
            var imageTemplate =
                `<div class="item"><a href="/x?https://www.instagram.com/p/${item.node.shortcode}/" target="_blank">
                        <img src="${item.node.thumbnail_resources[2].src}" alt="${item.node.edge_media_to_caption.edges[0].node.text.slice(0, 200)}..}" title="${item.node.edge_media_to_caption.edges[0].node.text.slice(0, 200)}...">
                        </a></div>`;
            elemToPaste.append(imageTemplate)
        });

        $('.instagram-widget').slick({
            infinite: true,
            dots: false,
            arrows: false,
            slidesToShow: 7,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 7,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
}