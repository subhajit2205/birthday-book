/* =========================================================
   SANDIPAN — THE MEMORY BOOK
   ========================================================= */


/* ================= MEMORY DATA ================= */

const memories = [

    {
        chapter: "CHAPTER I",
        title: "Before The Pages",

        text: `Some people enter our lives as friends,
and somewhere along the way,
they quietly become family.`,

        date: "THE BEGINNING",

        image: "../images/f.jpg",

        caption: "Where it all began."
    },


    {
        chapter: "CHAPTER II",
        title: "Battala's Bazar",

        text: `Not every great memory
needs an extraordinary destination.

Sometimes it is just Battala's Bazar,
a plate of special aloo paratha,
and your brother sitting beside you.`,

        date: "THE ALOO PARATHA CHAPTER",

        image: "../images/5.jpg",

        caption: "Somehow, the aloo paratha became legendary."
    },


    {
        chapter: "CHAPTER III",
        title: "The Winter Arc",

        text: `We had plans.

Training.
Discipline.
The legendary winter arc.

Then college happened.

The schedule got destroyed,
but somehow the plan never really disappeared.`,

        date: "THE TRAINING DAYS",

        image: "../images/winterarc.jpg",

        caption: "Two idiots. One training arc."
    },


    {
        chapter: "CHAPTER IV",
        title: "The PYQ Chronicles",

        text: `We opened that PYQ book around the time of the exam, hoping something would stick.

But somehow, those last-minute efforts weren't completely useless.

Not exactly the most productive study session… 
but definitely a memory worth keeping.`,

        date: "CLASS XII",

        image: "../images/bookpyq.png",

        caption: "The book was innocent."
    },


    {
        chapter: "CHAPTER V",
        title: "The LI-FI Grind",

        text: `There are projects you simply complete.

And then there are projects
you fight your way through.

LI-FI was one of those.

We had to grind.
We had to figure things out.
There were frustrating moments.

But in the end,
we made it happen.`,

        date: "THE PROJECT WE DIDN'T GIVE UP ON",

        image: "../images/lifi.png",

        caption: "The grind was worth it."
    },


    {
        chapter: "CHAPTER VI",
        title: "Roads Without A Destination",

        text: `There were places we wanted to see,
roads we simply wanted to take,
and countless moments where
the destination barely mattered.`,

        date: "THE SCOOTY DAYS",

        image: "../images/scooty.jpg",

        caption: "Just ride. We'll figure out the rest."
    },


    {
        chapter: "CHAPTER VII",
        title: "Miles Between Stations",

        text: `Train windows have a strange way
of making ordinary conversations
feel like scenes from a story.

Different stations.
Different views.

Same people.`,

        date: "THE TRAIN JOURNEYS",

        image: "../images/train.jpg",

        caption: "Somewhere between here and there."
    },


    {
        chapter: "CHAPTER VIII",
        title: "Four Wheels, Endless Stories",

        text: `Some journeys were planned.

Some simply happened.

But every long drive
left behind another story
to remember later.`,

        date: "THE ROAD TRIPS",

        image: "../images/wheels.jpg",

        caption: "Miles became memories."
    },


    {
        chapter: "CHAPTER IX",
        title: "Places We Found",

        text: `Looking back,
it is difficult to remember
every place.

But somehow,
the feeling of being there together
stayed.`,

        date: "THE EXPLORATIONS",

        image: "../images/explore.jpg",

        caption: "We never really needed a plan."
    },


    {
        chapter: "CHAPTER X",
        title: "The Things I Hope For You",

        text: `Among all the things life may give you,

I hope it gives you
the person you've been wishing for.

Someone you genuinely love.

Someone who understands your silence,
laughs at your madness,
stays through the difficult chapters,
and chooses you for the next ones.`,

        date: "A WISH",

        image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",

        caption: "May the right person find you."
    }

];



/* ================= DOM ================= */

const intro =
    document.getElementById("intro");

const story =
    document.getElementById("story");

const ending =
    document.getElementById("ending");

const book =
    document.getElementById("book");

const openBook =
    document.getElementById("openBook");

const closeBook =
    document.getElementById("closeBook");

const restartBtn =
    document.getElementById("restartBtn");

const leftChapter =
    document.getElementById("leftChapter");

const leftTitle =
    document.getElementById("leftTitle");

const leftText =
    document.getElementById("leftText");

const leftDate =
    document.getElementById("leftDate");

const pageImage =
    document.getElementById("pageImage");

const photoCaption =
    document.getElementById("photoCaption");

const pageNumber =
    document.getElementById("pageNumber");

const progressText =
    document.getElementById("progressText");

const progressFill =
    document.getElementById("progressFill");

const prevBtn =
    document.getElementById("prevBtn");

const nextBtn =
    document.getElementById("nextBtn");

const pageLeft =
    document.getElementById("pageLeft");

const pageRight =
    document.getElementById("pageRight");



/* ================= STATE ================= */

let currentPage = 0;

let isAnimating = false;



/* =========================================================
   PRELOAD ALL MEMORY IMAGES
   ========================================================= */

function preloadImages() {

    memories.forEach(memory => {

        const image =
            new Image();

        image.src =
            memory.image;

    });

}

preloadImages();



/* =========================================================
   LOAD IMAGE SAFELY
   ========================================================= */

function loadImage(src, alt) {

    pageImage.classList.remove(
        "loaded"
    );

    pageImage.classList.add(
        "loading"
    );


    const image =
        new Image();


    image.onload = function () {

        pageImage.src =
            src;

        pageImage.alt =
            alt;

        pageImage.classList.remove(
            "loading"
        );

        pageImage.classList.add(
            "loaded"
        );

    };


    image.onerror = function () {

        console.error(
            "Image failed to load:",
            src
        );

        pageImage.classList.remove(
            "loading"
        );

    };


    image.src =
        src;

}



/* =========================================================
   UPDATE PAGE
   ========================================================= */

function updatePage() {

    const memory =
        memories[currentPage];


    leftChapter.textContent =
        memory.chapter;


    leftTitle.textContent =
        memory.title;


    leftText.textContent =
        memory.text;


    leftDate.textContent =
        memory.date;


    loadImage(
        memory.image,
        memory.title
    );


    photoCaption.textContent =
        memory.caption;


    const current =
        String(currentPage + 1)
            .padStart(2, "0");


    const total =
        String(memories.length)
            .padStart(2, "0");


    pageNumber.textContent =
        `${current} / ${total}`;


    progressText.textContent =
        `${currentPage + 1} / ${memories.length}`;


    const progress =
        ((currentPage + 1) /
            memories.length) * 100;


    progressFill.style.width =
        `${progress}%`;


    /*
     * Arrow buttons are no longer used.
     * Navigation is done through swipe.
     */

    if (prevBtn) {
        prevBtn.style.display = "none";
    }

    if (nextBtn) {
        nextBtn.style.display = "none";
    }

}



/* =========================================================
   PAGE ANIMATION
   ========================================================= */

function animatePage(callback) {

    if (isAnimating)
        return;


    isAnimating = true;


    pageLeft.classList.remove(
        "page-turn-left"
    );

    pageRight.classList.remove(
        "page-turn-right"
    );


    void pageLeft.offsetWidth;


    pageLeft.classList.add(
        "page-turn-left"
    );

    pageRight.classList.add(
        "page-turn-right"
    );


    setTimeout(() => {

        callback();


        setTimeout(() => {

            pageLeft.classList.remove(
                "page-turn-left"
            );

            pageRight.classList.remove(
                "page-turn-right"
            );

            isAnimating = false;

        }, 350);

    }, 350);

}



/* =========================================================
   NEXT PAGE
   ========================================================= */

function nextPage() {

    if (isAnimating)
        return;


    if (
        currentPage <
        memories.length - 1
    ) {

        animatePage(() => {

            currentPage++;

            updatePage();

        });

    } else {

        showEnding();

    }

}



/* =========================================================
   PREVIOUS PAGE
   ========================================================= */

function previousPage() {

    if (isAnimating)
        return;


    if (currentPage > 0) {

        animatePage(() => {

            currentPage--;

            updatePage();

        });

    }

}



/* =========================================================
   OPEN BOOK
   ========================================================= */

openBook.addEventListener(
    "click",
    () => {

        book.classList.add(
            "open"
        );


        openBook.style.opacity =
            "0";

        openBook.style.pointerEvents =
            "none";


        setTimeout(() => {

            intro.style.display =
                "none";

            story.classList.add(
                "active"
            );


            currentPage = 0;

            updatePage();


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });


        }, 1500);

    }
);



/* =========================================================
   CLOSE BOOK
   ========================================================= */

closeBook.addEventListener(
    "click",
    () => {

        story.classList.remove(
            "active"
        );

        ending.classList.remove(
            "active"
        );


        intro.style.display =
            "flex";


        setTimeout(() => {

            book.classList.remove(
                "open"
            );


            openBook.style.opacity =
                "1";


            openBook.style.pointerEvents =
                "auto";


        }, 100);

    }
);



/* =========================================================
   ENDING
   ========================================================= */

function showEnding() {

    story.classList.remove(
        "active"
    );


    ending.classList.add(
        "active"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



/* =========================================================
   RESTART
   ========================================================= */

restartBtn.addEventListener(
    "click",
    () => {

        ending.classList.remove(
            "active"
        );


        intro.style.display =
            "flex";


        currentPage = 0;


        setTimeout(() => {

            book.classList.remove(
                "open"
            );


            openBook.style.opacity =
                "1";


            openBook.style.pointerEvents =
                "auto";


        }, 100);

    }
);



/* =========================================================
   KEYBOARD NAVIGATION
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            !story.classList.contains(
                "active"
            )
        ) return;


        if (
            event.key === "ArrowRight"
        ) {

            nextPage();

        }


        if (
            event.key === "ArrowLeft"
        ) {

            previousPage();

        }

    }
);



/* =========================================================
   MOBILE SWIPE NAVIGATION
   ========================================================= */

let touchStartX = 0;

let touchEndX = 0;


story.addEventListener(
    "touchstart",
    event => {

        touchStartX =
            event.changedTouches[0]
                .screenX;

    },
    {
        passive: true
    }
);


story.addEventListener(
    "touchend",
    event => {

        touchEndX =
            event.changedTouches[0]
                .screenX;


        const distance =
            touchEndX - touchStartX;


        /*
         * Ignore tiny accidental movements.
         */

        if (
            Math.abs(distance) < 50
        ) return;


        /*
         * Swipe LEFT
         * = NEXT PAGE
         */

        if (distance < 0) {

            nextPage();

        }


        /*
         * Swipe RIGHT
         * = PREVIOUS PAGE
         */

        else {

            previousPage();

        }

    },
    {
        passive: true
    }
);



/* =========================================================
   INITIAL STATE
   ========================================================= */

updatePage();