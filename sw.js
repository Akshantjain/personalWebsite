const cacheName = "Cache";
const assets = [
    "./", 
    "./index.html", 
    "./site.webmanifest",
    "./sw.js", 
    "./LICENSE", 
    "./README.md",
    "./404.html",
    "./js/script.js", 
    "./css/about_style.css", 
    "./css/contact_style.css", 
    "./css/experience_style.css", 
    "./css/footer_style.css", 
    "./css/masthead_style.css", 
    "./css/navbar_style.css", 
    "./css/projects_style.css", 
    "./css/resume_style.css", 
    "./css/signup_style.css", 
    "./css/skills_style.css", 
    "./images/favicon.png", 
    "./images/favicon2.png",
//     "./imgs/404.webp",
    "./imgs/code.webp",
    "./imgs/coding.webp",
    "./imgs/course.webp",
    "./imgs/dashboard.webp",
    "./imgs/download.webp",
    "./imgs/experience.webp",
    "./imgs/external.webp",
    "./imgs/favicon2.webp",
    "./imgs/folder.webp",
    "./imgs/formula.webp",
    "./imgs/game.webp",
    "./imgs/header3.webp",
    "./imgs/my_image.webp",
    "./imgs/myimage.webp",
    "./imgs/networking.webp",
    "./imgs/paper.webp",
    "./imgs/project_section.webp",
    "./imgs/shield.webp",
    "./imgs/skills_icon.webp",
    "./imgs/thought.webp",
    "./imgs/university.webp",
    "./imgs/web.webp",
    "./imgs/webapp.webp", 
    "https://code.jquery.com/jquery-3.5.1.min.js", 
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js", 
    "https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js", 
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css", 
//     "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css", 
    "https://fonts.googleapis.com/css?family=Varela+Round", 
    "https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i", 
    "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
//     "./favicon_io/android-chrome-192x192.png", 
//     "./favicon_io/android-chrome-192x192.png", 
//     "./favicon_io/apple-touch-icon.png", 
//     "./favicon_io/favicon-16x16.png", 
//     "./favicon_io/favicon-16x16.png", 
//     "./favicon_io/favicon.ico"
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return (res || fetch(fetchEvent.request));
        })
    )
});