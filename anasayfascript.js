var models = [
    {
        name: 'mercedes',
        image: 'img/car2.jfif',
        link: 'https://www.mercedes-benz.com.tr/?gagcmid=GA_18281645913_141598244872_636076164203&gclid=EAIaIQobChMI4Jj18aHQgAMVAb3VCh2AOwdJEAAYASAAEgIV3fD_BwE&gclsrc=aw.ds&group=all&subgroup=see-all&view=BODYTYPE'

    },

    {
        name: 'golf',
        image: 'img/car1.jfif',
        link: 'https://binekarac.vw.com.tr/tr/modeller-fiyatlar/arac-modelleri/golf-8.html'
    },

    {
        name: 'mondeo',
        image: 'img/modneo.jfif',
        link: 'https://tr.wikipedia.org/wiki/Toyota_Supra'
    },

];
var index = 0;
var slaytCount = models.length;
var interval;

var settings = {
    duration: '1000',
    random: true
};
init(settings);




document.querySelector('.fa-arrow-left').addEventListener('click', function () {

    index--;
    console.log(index);
    showSlide(index);
});
document.querySelector('.fa-arrow-right').addEventListener('click', function () {

    index++;
    console.log(index);
    showSlide(index);
});

document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        clearInterval(interval);
    })

})

document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseleave', function () {
      init(settings)
    })
  
  })
function init(settings) {

    var prev;
    interval = setInterval(function () {

        if (settings.random) {

            do {
                index = Math.floor(Math.random() * slaytCount);
            } while (index == prev)
            prev = index

        } else {


        }
        console.log(index);
        showSlide(index);

    }, settings.duration)
}

function showSlide(i) {
    index = i;

    if (i < 0) {

        index = slaytCount - 1;
    }

    if (i >= slaytCount) {


        index = 0;
    }

    document.querySelector('.card2-title').textContent = models[index].name;

    document.querySelector('.car-img-top').setAttribute('src', models[index].image);

    document.querySelector('.card2-link').setAttribute('href', models[index].link);


}



    window.addEventListener('load', fg_load)

    function fg_load() {
        document.getElementById('loading').style.display = 'none'
    }
