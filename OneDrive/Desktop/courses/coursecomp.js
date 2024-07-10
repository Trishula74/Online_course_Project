document.addEventListener('DOMContentLoaded', function() {
    // Example data
    const studentName = "Yamini";
    const courseName = "Web Development Course";
    const completionDate = new Date().toLocaleDateString();
    const instructorName = "Jane Smith";

    // Populate the certificate
    document.getElementById('student-name').innerText = studentName;
    document.getElementById('course-name').innerText = courseName;
    document.getElementById('completion-date').innerText = completionDate;
    document.getElementById('instructor-name').innerText = instructorName;
});
