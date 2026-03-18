const books = [
    { id: 1, title: 'Cuidado ao usar as Redes Sociais', discipline: 'Tecnologia Educacional', category: 'Segurança Digital', url: 'https://gemini.google.com/share/155246e83778', views: 1540, icon: 'ph-desktop' },
    { id: 2, title: 'Sujeito', discipline: 'Língua Portuguesa', category: 'Gramática', url: 'https://gemini.google.com/share/54315ac4f8d1', views: 1200, icon: 'ph-book-open-text' },
    { id: 3, title: 'Substantivos', discipline: 'Língua Portuguesa', category: 'Gramática', url: 'https://gemini.google.com/share/7f9a35e931fd', views: 1850, icon: 'ph-book-open-text' },
    { id: 4, title: 'Cuidado ao usar as Redes Sociais (Parte 2)', discipline: 'Tecnologia Educacional', category: 'Segurança Digital', url: 'https://gemini.google.com/share/291610538eb3', views: 890, icon: 'ph-desktop' },
    { id: 5, title: 'Conjuntos Numéricos', discipline: 'Matemática', category: 'Álgebra', url: 'https://gemini.google.com/share/5e86d79092b5', views: 2100, icon: 'ph-calculator' },
    { id: 6, title: 'Áreas das Figuras Planas', discipline: 'Matemática', category: 'Geometria', url: 'https://gemini.google.com/share/10dd5aa2284d', views: 1650, icon: 'ph-ruler' },
    { id: 7, title: 'Tabuada do 6', discipline: 'Matemática', category: 'Álgebra', url: 'https://gemini.google.com/share/185877547028', views: 900, icon: 'ph-math-operations' },
    { id: 8, title: 'Tabuada do 7', discipline: 'Matemática', category: 'Álgebra', url: 'https://gemini.google.com/share/8c580a0cc6ce', views: 800, icon: 'ph-math-operations' },
    { id: 9, title: 'Tabuada do 8', discipline: 'Matemática', category: 'Álgebra', url: 'https://gemini.google.com/share/6d5c54baa042', views: 750, icon: 'ph-math-operations' },
    { id: 10, title: 'Tabuada do 9', discipline: 'Matemática', category: 'Álgebra', url: 'https://gemini.google.com/share/2dd77f2f0d54', views: 980, icon: 'ph-math-operations' },
    { id: 11, title: 'Medidas de Tempo', discipline: 'Matemática', category: 'Geometria', url: 'https://gemini.google.com/share/5bb448bef50e', views: 1100, icon: 'ph-clock' }
];

const disciplines = [...new Set(books.map(b => b.discipline))];
const navContainer = document.getElementById('top-nav');
const mainContent = document.getElementById('main-content');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    renderHomePage();
});

function setupNavigation() {
    // Logo Click (Home)
    document.querySelector('.logo').addEventListener('click', () => {
        updateActiveNav('home');
        renderHomePage();
    });

    // Home Btn
    const homeBtn = document.createElement('button');
    homeBtn.className = 'nav-link active';
    homeBtn.dataset.view = 'home';
    homeBtn.textContent = 'Início';
    homeBtn.addEventListener('click', () => {
        updateActiveNav('home');
        renderHomePage();
    });
    navContainer.appendChild(homeBtn);

    // Disciplines
    disciplines.forEach(discipline => {
        const btn = document.createElement('button');
        btn.className = 'nav-link';
        btn.dataset.view = discipline;
        btn.textContent = discipline;
        
        btn.addEventListener('click', () => {
            updateActiveNav(discipline);
            renderDisciplinePage(discipline);
        });

        navContainer.appendChild(btn);
    });
}

function updateActiveNav(activeView) {
    document.querySelectorAll('.nav-link').forEach(btn => {
        if (btn.dataset.view === activeView) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function createBookCard(book) {
    const card = document.createElement('a');
    card.href = book.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.className = 'card';
    card.style.textDecoration = 'none';
    card.style.color = 'inherit';

    card.innerHTML = `
        <div>
            <i class="ph ph-fill ${book.icon} card-icon"></i>
            <h3 class="card-title">
                ${book.title} <i class="ph ph-arrow-square-out" style="font-size: 0.8em; margin-left: 4px;"></i>
            </h3>
            <span class="card-category">${book.category || book.discipline}</span>
        </div>
        <div>
            <span class="views-badge"><i class="ph ph-eye"></i> ${book.views} acessos</span>
        </div>
    `;

    return card;
}

function renderHomePage() {
    // Sort books by views (Top 5)
    mainContent.innerHTML = `
        <h2 class="section-header">Livros Mais Acessados</h2>
        <div class="grid" id="top-books-grid"></div>
    `;

    const topBooks = [...books].sort((a, b) => b.views - a.views).slice(0, 5);
    const grid = document.getElementById('top-books-grid');

    topBooks.forEach(book => {
        grid.appendChild(createBookCard(book));
    });
}

function renderDisciplinePage(discipline) {
    mainContent.innerHTML = `<h2 class="section-header">${discipline}</h2>`;
    
    // Get books of this discipline
    const disciplineBooks = books.filter(b => b.discipline === discipline);
    
    // Group by category
    const categories = [...new Set(disciplineBooks.map(b => b.category))];

    categories.forEach(category => {
        const section = document.createElement('div');
        section.className = 'subject-group';
        
        section.innerHTML = `
            <h3>${category}</h3>
            <div class="grid"></div>
        `;

        const grid = section.querySelector('.grid');
        const categoryBooks = disciplineBooks.filter(b => b.category === category);
        
        categoryBooks.forEach(book => {
            grid.appendChild(createBookCard(book));
        });

        mainContent.appendChild(section);
    });
}


