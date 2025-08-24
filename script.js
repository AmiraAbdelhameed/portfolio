
// Array of images with corresponding content
const slides = [
    {
        img: "./images/night_trip.PNG",
        text: "Night Trips",
        info: 'website for night trips to  discover thrilling night trips, unique destinations, and exciting activities tailored for night owls and adventurers',
        tools: `Created with HTML, CSS, and JavaScript`,
        href:'https://night-trip-git-main-amiras-projects-eba87ddf.vercel.app/'
    },
  {
        img: "./images/myCake.png",
        text: "My Cake Store",
        info: 'E-commerce website for selling cakes with admin dashboard to add and edit products, receive customers orders and reviews, and manage sales   ',
        tools: `Created with MUI, Firebase and Reactjs`,
        href:'https://my-cake-store.vercel.app/'
    },
    {
        img: "./images/Ayady.png",
        text: "Ayady",
        info: 'Ayady is a platform that connects charities with donors in one place, making donations easy, safe, and clear. We aim to use technology to support charity work and encourage everyone to help make a positive change.',
        tools: `Created with Reactjs, Redux toolkit , MUI, and supabase `,
        href:'https://ayady.vercel.app/'
    },
       {
        img: "/images/great_outdoors.PNG",
        text: "Great outdoors",
        info: 'website for great outdoors to  discover thrilling great and different places, unique destinations, and exciting activities tailored for great outdoors',
        tools: `Created with tailwindcss and Reactjs`,
        href:'https://great-outdoors-psi.vercel.app/'
    }

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