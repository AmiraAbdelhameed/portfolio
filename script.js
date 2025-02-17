// let slider=document.querySelector('.image_slider');
// let images = slider.querySelectorAll('img');
// let currentIndex = 0;
// let websiteTitle=document.querySelector('.website_title');
// let websiteInfo=document.querySelector('.website_info');
// let websiteTools=document.querySelector('.website_dev_tools');

// updateSlider()

// document.querySelector('.left_arrow').addEventListener('click', () => {
//   currentIndex = (currentIndex - 1 + images.length) % images.length;
//   updateSlider();
// });

// document.querySelector('.right_arrow').addEventListener('click', () => {
//   currentIndex = (currentIndex + 1) % images.length;
//   updateSlider();
// });

// function updateSlider() {
//     // Hide all images
//     images.forEach((img) => {
//       img.classList.add('hidden');   
//       img.classList.remove('selected');   
//     });

//     // Show the current image
//     images[currentIndex].classList.remove('hidden');
//     images[currentIndex].classList.add('selected');



//     websiteName()
// }
// // updateSlider()  



// function websiteName(){
//     images.forEach((img)=>{
//         // let s=img.src;
//         // console.log(img.src)
//         // console.log(img)

//         // if(img.classList.contains('selected')){
//         // switch (img.src){
//         //         case 'http://127.0.0.1:5500/portofolio/images/g.png':
//         //             websiteTitle.textContent='gg';
//         //             websiteInfo.textContent=`website for night trips to  discover thrilling night trips, unique destinations, and exciting activities tailored for night owls and adventurers`;
//         //             websiteTools.textContent=`Created with HTML, CSS, and JavaScript`;
//         //             break;
//         //         case 'http://127.0.0.1:5500/portofolio/images/great_outdoors.PNG':
//         //             websiteTitle.textContent='Greate outdoor ';
//         //             websiteInfo.textContent=`website for night trips to  discover thrilling night trips, unique destinations, and exciting activities tailored for night owls and adventurers`;
//         //             websiteTools.textContent=`Created with tailwindcss and Reactjs`;
//         //             break;
//         //         default :
//         //         websiteTitle.textContent='Night trips';
//         //         websiteInfo.textContent=`website for night trips to  discover thrilling night trips, unique destinations, and exciting activities tailored for night owls and adventurers`;
//         //         websiteTools.textContent=`Created with HTML, CSS, and JavaScript`;
//         //     }
//         // }
//         // if (img.src == 'http://127.0.0.1:5500/images/great_outdoors.PNG' && img.classList.contains('img.rounded-xl.selected')){
//         //     websiteTitle.textContent = 'Greate outdoor ';
//         //     websiteInfo.textContent = `website for night trips to  discover thrilling night trips, unique destinations, and exciting activities tailored for night owls and adventurers`;
//         //     websiteTools.textContent = `Created with tailwindcss and Reactjs`;
//         // }
//         // else if (img.src == 'http://127.0.0.1:5500/images/g3.png' && img.class == 'img.rounded-xl.selected'){
//         //     websiteTitle.textContent = 'gg';
//         //     websiteInfo.textContent = `website for night trips to  discover thrilling night trips, unique destinations, and exciting activities tailored for night owls and adventurers`;
//         //     websiteTools.textContent = `Created with HTML, CSS, and JavaScript`;
//         // }
//         // else if (img.src == 'http://127.0.0.1:5500/images/night_trip.PNG' && img.clas == 'img.rounded-xl.selected'){
//         //     websiteTitle.textContent = 'Night trips';
//         //     websiteInfo.textContent = `website for night trips to  discover thrilling night trips, unique destinations, and exciting activities tailored for night owls and adventurers`;
//         //     websiteTools.textContent = `Created with HTML, CSS, and JavaScript`;

//         // }
//         console.log(img.src)
//         console.log(typeof img.src)
//         if (img.classList.contains('selected')) {
//             websiteTitle.textContent = 'Greate outdoor ';
//             websiteInfo.textContent = `website for night trips to  discover thrilling night trips, unique destinations, and exciting activities tailored for night owls and adventurers`;
//             websiteTools.textContent = `Created with tailwindcss and Reactjs`;
//         }
//         else if (img.src === 'http://127.0.0.1:5500/images/g3.png') {
//             websiteTitle.textContent = 'gg';
//             websiteInfo.textContent = `website for night trips to  discover thrilling night trips, unique destinations, and exciting activities tailored for night owls and adventurers`;
//             websiteTools.textContent = `Created with HTML, CSS, and JavaScript`;
//         }
//         else {
//             websiteTitle.textContent = 'Night trips';
//             websiteInfo.textContent = `website for night trips to  discover thrilling night trips, unique destinations, and exciting activities tailored for night owls and adventurers`;
//             websiteTools.textContent = `Created with HTML, CSS, and JavaScript`;

//         }
//     })
// }

// // websiteName()

// //how to change content based on image displayed?





// Array of images with corresponding content
const slides = [
    {
        img: "http://127.0.0.1:5500/images/night_trip.PNG",
        text: "Night Trips",
        info: 'website for night trips to  discover thrilling night trips, unique destinations, and exciting activities tailored for night owls and adventurers',
        tools: `Created with HTML, CSS, and JavaScript`,
        href:'https://night-trip-git-main-amiras-projects-eba87ddf.vercel.app/'
    },
    {
        img: "http://127.0.0.1:5500/images/great_outdoors.PNG",
        text: "Great outdoors",
        info: 'website for great outdoors to  discover thrilling great and different places, unique destinations, and exciting activities tailored for great outdoors',
        tools: `Created with tailwindcss and Reactjs`,
        href:'https://great-outdoors-psi.vercel.app/'
    },

    // {
    //     img: "http://127.0.0.1:5500/images/g3.png",
    //     text: "This is the first image",
    //     info: '',
    //     tools: ``
    // },
];

let currentIndex = 0;

function updateSlide() {
    document.querySelector("#slider-img").src = slides[currentIndex].img;
    document.querySelector("#slider-content").innerText = slides[currentIndex].text;
    document.querySelector('.website_info').innerHTML = slides[currentIndex].info;
    document.querySelector('.website_dev_tools').innerHTML = slides[currentIndex].tools;
    document.querySelector('.view_website').href = slides[currentIndex].href;
}


document.querySelector('.left_arrow').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();

});

document.querySelector('.right_arrow').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
});

updateSlide();