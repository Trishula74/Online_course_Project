document.addEventListener('DOMContentLoaded', function() {
    const courses = [
        { title: "Course 1", image: "course1.jpg", description: "Description of Course 1" },
        { title: "Course 2", image: "course2.jpg", description: "Description of Course 2" },
        { title: "Course 3", image: "course3.jpg", description: "Description of Course 3" },
        { title: "Course 4", image: "course4.jpg", description: "Description of Course 4" },
        { title: "Course 5", image: "course5.jpg", description: "Description of Course 5" },
        { title: "Course 6", image: "course6.jpg", description: "Description of Course 6" }
    ];

    const gallery = document.getElementById('gallery');

    courses.forEach(course => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${course.image}" alt="${course.title}">
            <div class="overlay">
                <div class="text">${course.description}</div>
            </div>
        `;
        gallery.appendChild(galleryItem);
    });
});
