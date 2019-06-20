$(window).on('load', function() {
    setTimeout(function() {
        $('#load').fadeOut(300);
        $('main').fadeIn(100);
    }, 100);
});


var samples = ['hb', 'fb'];

var hb = [{
    'type': 'colored sketch',
    'info': {
        'desc': 'A sketch with spots of color',
        'price': '30'
    }
}, {
    'type': 'colored sketch + shading',
    'info': {
        'desc': 'More detailed coloring',
        'price': '35'
    }
}, {
    'type': 'full color',
    'info': {
        'desc': 'Full coloring + rendering',
        'price': '40'
    }

}];

var fb = [{
    'type': 'colored sketch',
    'info': {
        'desc': 'A sketch with spots of color',
        'price': '45'
    }
}, {
    'type': 'colored sketch + shading',
    'info': {
        'desc': 'More detailed coloring',
        'price': '50'
    }
}, {
    'type': 'full color',
    'info': {
        'desc': 'Full coloring + rendering',
        'price': '60'
    }

}];


$.each(samples, function(k, v) {
    for (var i = 0; i < 3; i++) {
        var link = $('#' + v).find('.gallery').find('.template').clone().removeClass('template');
        var img = './img/sample/' + v + '/' + i + '.png';
        link.find('a').attr('href', img);
        link.find('img').attr('src', img);

        if (v == 'hb') {
            link.find('.card-title').text(hb[i].type);
            link.find('.card-text').text(hb[i].info.desc);
            link.find('.price').text('$' + hb[i].info.price);
        }

        else if (v == 'fb') {
            link.find('.card-title').text(fb[i].type);
            link.find('.card-text').text(fb[i].info.desc);
            link.find('.price').text('$' + fb[i].info.price);
        }
        link.appendTo($('#' + v).find('.gallery'));
    }
    $('#' + v).find('.template').remove();
});


$('.gallery').each(function() {
    $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

$('#priceCalc').submit(function(e) {
    e.preventDefault();
    var no = $('#charaCount').val();
    var typeP = parseInt($('#commType').val());
    var colorP = parseInt($('#colorType').val());
    var base = typeP + colorP;
    
    if (no > 2) {
        if ($('#commType').val()!= 15) {
            if (no > 1 && $('#commType')) {
                var base = typeP + colorP;
                var total = base + ((no - 1) * (base * 0.9));
            }
            else {
                total = base;
            }
        }
        
        else if ($('#commType').val() == 15) {
            if($('#colorType').val() == 5) {
                var base = typeP;
            }
            if($('#colorType').val() == 15) {
                var base = typeP + 5;
            }
            var total = base + ((no - 1) * (base * 0.9));
        }   
    }
    else {
        if ($('#commType').val()!= 15) {
            if (no > 1 && $('#commType')) {
                var base = typeP + colorP;
                var total = base + ((no - 1) * (base * 0.75));
            }
            else {
                total = base;
            }
        }
        
        else if ($('#commType').val() == 15) {
            if($('#colorType').val() == 5) {
                var base = typeP;
            }
            if($('#colorType').val() == 15) {
                var base = typeP + 5;
            }
            var total = base + ((no - 1) * (base * 0.75));
        }   
    }

    $('#result').find('p').text('$' + total);
    if (no >= 1) {
        $('#result').slideDown();
    }
    else {
        $('#result').slideUp();
    }
});


for (var i = 1; i < 10; i++) {
    var link = $('#original').find('.template').clone().removeClass('template');
    var img = 'img/gallery/original/'+i+'.png';
    link.attr('href', img);
    link.find('img').attr('src', img);
    link.appendTo($('#original'));
}

for (var i = 1; i < 4; i++) {
    var link = $('#comic').find('.template').clone().removeClass('template');
    var img = 'img/gallery/comic/'+i+'.png';
    link.attr('href', img);
    link.find('img').attr('src', img);
    link.appendTo($('#comic'));
}

for (var i = 1; i < 11; i++) {
    var link = $('#mysmes').find('.template').clone().removeClass('template');
    var img = 'img/gallery/mysmes/'+i+'.png';
    link.attr('href', img);
    link.find('img').attr('src', img);
    link.appendTo($('#mysmes'));
}

for (var i = 1; i < 4; i++) {
    var link = $('#zine').find('.template').clone().removeClass('template');
    var img = 'img/gallery/zine/'+i+'.jpg';
    link.attr('href', img);
    link.find('img').attr('src', img);
    link.appendTo($('#zine'));
}

for (var i = 0; i < 3; i++) {
    var link = $('#splatoon').find('.template').clone().removeClass('template');
    var img = 'img/gallery/splatoon/'+i+'.png';
    link.attr('href', img);
    link.find('img').attr('src', img);
    link.appendTo($('#splatoon'));
}

$('#original').find('.template').remove();
$('#zine').find('.template').remove();
$('#splatoon').find('.template').remove();
$('#mysmes').find('.template').remove();
$('#comic').find('.template').remove();