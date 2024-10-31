// Mock user data
const USERS = [
    { id: "001", name: "Student 1", password: "pass123" },
    { id: "002", name: "Student 2", password: "pass456" },
];

// Mock exam data
const EXAMS = [
    {
        id: 1,
        name: "Mathematics Final",
        topic: "Calculus",
        startTime: "2024-03-20T09:00",
        endTime: "2024-03-20T12:00",
        examLink: "https://exam-platform.com/math-final",
        studyMaterials: "https://drive.google.com/drive/folders/math-materials",
        solution: "https://drive.google.com/drive/folders/math-solutions",
        solutionAvailable: true,
    },
    {
        id: 2,
        name: "Physics Midterm",
        topic: "Mechanics",
        startTime: "2024-03-25T14:00",
        endTime: "2024-03-25T16:00",
        examLink: "https://exam-platform.com/physics-midterm",
        studyMaterials: "https://drive.google.com/drive/folders/physics-materials",
        solution: "",
        solutionAvailable: false,
    },
];

// DOM Elements
const loginPage = document.getElementById('loginPage');
const schedulePage = document.getElementById('schedulePage');
const loginForm = document.getElementById('loginForm');
const logoutBtn = document.getElementById('logoutBtn');
const examsList = document.getElementById('examsList');
const toast = document.getElementById('toast');

// Show toast message
function showToast(message, duration = 3000) {
    toast.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, duration);
}

// Format date
function formatDate(dateString) {
    return new Date(dateString).toLocaleString();
}

// Render exams list
function renderExams() {
    examsList.innerHTML = EXAMS.map(exam => `
        <div class="exam-card">
            <div class="exam-card-content">
                <div class="exam-info">
                    <h2>${exam.name}</h2>
                    <p>Topic: ${exam.topic}</p>
                    <p>Start: ${formatDate(exam.startTime)}</p>
                    <p>End: ${formatDate(exam.endTime)}</p>
                </div>
                <div class="exam-actions">
                    <a href="${exam.examLink}" target="_blank" rel="noopener noreferrer" class="btn">
                        Go to Exam
                    </a>
                    <a href="${exam.studyMaterials}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                        Study Materials
                    </a>
                    ${exam.solutionAvailable ? `
                        <a href="${exam.solution}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                            View Solution
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Handle login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('studentId').value;
    const password = document.getElementById('password').value;
    
    const user = USERS.find(u => u.id === id && u.password === password);
    
    if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        loginPage.classList.add('hidden');
        schedulePage.classList.remove('hidden');
        renderExams();
    } else {
        showToast('Invalid ID or password');
    }
});

// Handle logout
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('user');
    schedulePage.classList.add('hidden');
    loginPage.classList.remove('hidden');
    loginForm.reset();
});

// Check authentication on page load
document.addEventListener('DOMContentLoaded', () => {
    const user = localStorage.getItem('user');
    if (user) {
        loginPage.classList.add('hidden');
        schedulePage.classList.remove('hidden');
        renderExams();
    }
});
