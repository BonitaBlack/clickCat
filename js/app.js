window.onload=function(){
/let cattery = {
    currentCat: null,
    cats: [
        {
            count : 0,
            name : "Freya",
            imgSrc : "images/cat1.jpg",

        },
        {
            count : 0,
            name : "Starlight",
            imgSrc : "images/cat2.jpg",

        },
        {
            count : 0,
            name : "Pumpkin",
            imgSrc : "images/cat3.jpg",

        },
        {
            count : 0,
            name : "Midnight",
            imgSrc : "images/cat4.jpg",

        },
        {
            count : 0,
            name : "Sunshine",
            imgSrc : "images/cat5.jpg",

        },
        {
            count : 0,
            name : "Moonlight",
            imgSrc : "images/cat6.jpg",

        }
    ]
};


/* ======= catCall ======= */

var catCall = {

    init: function() {
        // set our current cat to the first one in the list
        cattery.currentCat = cattery.cats[0];

        // tell our views to initialize
        catListView.init();
        catView.init();
    },

    getCatNow: function() {
        return cattery.currentCat;
    },

    getCats: function() {
        return cattery.cats;
    },

    // set the currently-selected cat to the object passed in
    setCatNow: function(cat) {
        cattery.currentCat = cat;
    },

    // increments the counter for the currently-selected cat
    counterUp: function() {
        cattery.currentCat.count++;
        catView.render();
    }
};


var catView = {

    init: function() {
        // store pointers to our DOM elements for easy access later
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('catName');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('catCount');

        // on click, increment the current cat's counter
        this.catImageElem.addEventListener('click', function(){
            catCall.counterUp();
        });

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        // update the DOM elements with values from the current cat
        var currentCat = catCall.getCatNow();
        this.countElem.textContent = currentCat.count;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
    }
};

var catListView = {

    init: function() {
        // store the DOM element for easy access later
        this.catListElem = document.getElementById('catList');

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        var cat, elem, i;
        // get the cats we'll be rendering from the catCall
        var cats = catCall.getCats();

        // empty the cat list
        this.catListElem.innerHTML = '';

        // loop over the cats
        for (i = 0; i < cats.length; i++) {
            // this is the cat we're currently looping over
            cat = cats[i];

            // make a new cat list item and set its text
            elem = document.createElement('li');
            elem.textContent = cat.name;

            // on click, setCatNow and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)
            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    catCall.setCatNow(catCopy);
                    catView.render();
                };
            })(cat));

            // finally, add the element to the list
            this.catListElem.appendChild(elem);
        }
    }
};

// make it go!
catCall.init();
};
