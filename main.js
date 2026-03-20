const books = [
    { id: 1, title: 'Cuidado ao usar as Redes Sociais', discipline: 'Tecnologia Educacional', category: 'Segurança Digital', year: '7º Ano', url: 'https://gemini.google.com/share/155246e83778', views: 1540, icon: 'ph-desktop' },
    { id: 2, title: 'Sujeito', discipline: 'Língua Portuguesa', category: 'Gramática', year: '8º Ano', url: 'https://gemini.google.com/share/54315ac4f8d1', views: 1200, icon: 'ph-book-open-text' },
    { id: 3, title: 'Substantivos', discipline: 'Língua Portuguesa', category: 'Gramática', year: '7º Ano', url: 'https://gemini.google.com/share/7f9a35e931fd', views: 1850, icon: 'ph-book-open-text' },
    { id: 4, title: 'Cuidado ao usar as Redes Sociais (Parte 2)', discipline: 'Tecnologia Educacional', category: 'Segurança Digital', year: '8º Ano', url: 'https://gemini.google.com/share/291610538eb3', views: 890, icon: 'ph-desktop' },
    { id: 5, title: 'Conjuntos Numéricos', discipline: 'Matemática', category: 'Álgebra', year: '8º Ano', url: 'https://gemini.google.com/share/5e86d79092b5', views: 2100, icon: 'ph-calculator' },
    { id: 6, title: 'Áreas das Figuras Planas', discipline: 'Matemática', category: 'Geometria', year: '8º Ano', url: 'https://gemini.google.com/share/10dd5aa2284d', views: 1650, icon: 'ph-ruler' },
    { id: 7, title: 'Tabuada do 6', discipline: 'Matemática', category: 'Álgebra', year: '7º Ano', url: 'https://gemini.google.com/share/185877547028', views: 900, icon: 'ph-math-operations' },
    { id: 8, title: 'Tabuada do 7', discipline: 'Matemática', category: 'Álgebra', year: '7º Ano', url: 'https://gemini.google.com/share/8c580a0cc6ce', views: 800, icon: 'ph-math-operations' },
    { id: 9, title: 'Tabuada do 8', discipline: 'Matemática', category: 'Álgebra', year: '7º Ano', url: 'https://gemini.google.com/share/6d5c54baa042', views: 750, icon: 'ph-math-operations' },
    { id: 10, title: 'Tabuada do 9', discipline: 'Matemática', category: 'Álgebra', year: '7º Ano', url: 'https://gemini.google.com/share/2dd77f2f0d54', views: 980, icon: 'ph-math-operations' },
    { id: 11, title: 'Medidas de Tempo', discipline: 'Matemática', category: 'Geometria', year: '7º Ano', url: 'https://gemini.google.com/share/5bb448bef50e', views: 1100, icon: 'ph-clock' },
    { id: 12, title: 'A atmosfera e os elementos do tempo', discipline: 'Geografia', category: 'Geografia', year: '7º Ano', url: 'https://gemini.google.com/share/12c32fabfb03', views: 810, icon: 'ph-globe' },
    { id: 13, title: 'Baixa Idade Média: mudanças no campo, arquitetura gótica, comércio e Cruzadas', discipline: 'História', category: 'História', year: '7º Ano', url: 'https://gemini.google.com/share/e62ed7c1e1ab', views: 680, icon: 'ph-bank' },
    { id: 14, title: 'Geopolítica', discipline: 'Geografia', category: 'Geografia', year: '8º Ano', url: 'https://gemini.google.com/share/9c27d063daf5', views: 940, icon: 'ph-map-pin' },
    { id: 15, title: 'Revoluções Inglesas', discipline: 'História', category: 'História', year: '8º Ano', url: 'https://gemini.google.com/share/9ca7419d55f8', views: 870, icon: 'ph-sword' },
    { id: 16, title: 'Leitura e interpretação de imagens', discipline: 'Redação', category: 'Interpretação', year: '7º Ano', url: 'https://gemini.google.com/share/f2e4eabf0eaf', views: 450, icon: 'ph-image' },
    { id: 17, title: 'Interpretação de textos curtos com apoio de imagens', discipline: 'Redação', category: 'Interpretação', year: '8º Ano', url: 'https://gemini.google.com/share/cf1899e30c1d', views: 320, icon: 'ph-article' },
    { id: 18, title: 'Sistemas Ecológicos, Componentes do Ambiente e Hábitat', discipline: 'Ciências', category: 'Biologia', year: '7º Ano', url: 'https://gemini.google.com/share/44cdf99227cc', views: 410, icon: 'ph-plant' },
    { id: 19, title: 'Reprodução Assexuada e Sexuada', discipline: 'Ciências', category: 'Biologia', year: '8º Ano', url: 'https://gemini.google.com/share/3298cf2111de', views: 380, icon: 'ph-dna' },
    { id: 20, title: 'Davi e os Sprunkis das Boas Escolhas', discipline: 'Convívio Social', category: 'Comportamento', year: 'Convívio Social', url: 'https://gemini.google.com/share/295f5eae25fc', views: 150, icon: 'ph-users' },
    { id: 21, title: 'Davi, Vivi e os Sprunkis das Boas Escolhas no Santa Marcelina', discipline: 'Convívio Social', category: 'Comportamento', year: 'Convívio Social', url: '#', views: 120, icon: 'ph-users' }
];

const disciplines = [...new Set(books.map(b => b.discipline))];
const years = [...new Set(books.map(b => b.year))].sort();
if (!years.includes('Convívio Social')) {
    years.push('Convívio Social');
}

const yearNavContainer = document.getElementById('year-nav');
const topNavContainer = document.getElementById('top-nav');
const mainContent = document.getElementById('main-content');

let currentView = 'home'; 

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

    // Home Btn on top-nav
    const homeBtn = document.createElement('button');
    homeBtn.className = 'nav-link active';
    homeBtn.dataset.view = 'home';
    homeBtn.textContent = 'Início';
    homeBtn.addEventListener('click', () => {
        updateActiveNav('home');
        renderHomePage();
    });
    yearNavContainer.appendChild(homeBtn);

    // Years
    years.forEach(year => {
        const btn = document.createElement('button');
        btn.className = 'nav-link';
        btn.dataset.view = year;
        btn.textContent = year.toUpperCase(); // 7ºANO, 8ºANO
        
        btn.addEventListener('click', () => {
            updateActiveNav(year);
            renderYearPage(year);
        });

        yearNavContainer.appendChild(btn);
    });

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

        topNavContainer.appendChild(btn);
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
    currentView = activeView;
}

function createBookCard(book) {
    const card = document.createElement('a');
    card.href = book.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.className = 'card';
    card.style.textDecoration = 'none';
    card.style.color = 'inherit';

    const cardId = `view-badge-${book.id}`;
    let badgeHtml = '';
    
    if (book.realViewsSynced) {
        badgeHtml = `<span class="views-badge" id="${cardId}"><i class="ph ph-eye"></i> ${book.views} acessos</span>`;
    } else {
        badgeHtml = `<span class="views-badge" id="${cardId}"><i class="ph ph-spinner ph-spin"></i> Atualizando...</span>`;
    }

    card.innerHTML = `
        <div>
            <i class="ph ph-fill ${book.icon} card-icon"></i>
            <h3 class="card-title">
                ${book.title} <i class="ph ph-arrow-square-out" style="font-size: 0.8em; margin-left: 4px;"></i>
            </h3>
            <span class="card-category" style="display:block; margin-bottom: 5px;">${book.category || book.discipline}</span>
            <span class="card-category" style="color: #6C5CE7; font-size: 0.8rem; border: 1px solid #6C5CE7; padding: 2px 6px; border-radius: 10px;">${book.year}</span>
        </div>
        <div>
            ${badgeHtml}
        </div>
    `;

    // Fetch live views if not yet synced for this session
    if (!book.realViewsSynced) {
        book.realViewsSynced = true; // prevent multiple ongoing fetch attempts
        fetch(`https://api.counterapi.dev/v1/livro-virtual-books/book-${book.id}`)
            .then(res => {
                if (!res.ok) return { count: 0 };
                return res.json();
            })
            .then(data => {
                const extraViews = data.count || 0;
                book.views += extraViews;
                const badge = card.querySelector(`#${cardId}`);
                if (badge) {
                    badge.innerHTML = `<i class="ph ph-eye"></i> ${book.views} acessos`;
                }
            })
            .catch(() => {
                const badge = card.querySelector(`#${cardId}`);
                if (badge) {
                    badge.innerHTML = `<i class="ph ph-eye"></i> ${book.views} acessos`;
                }
            });
    }

    // Intercept click to increment API view count
    card.addEventListener('click', () => {
        book.views += 1; // Optimistic local UI update
        const badge = card.querySelector(`#${cardId}`);
        if (badge) {
            badge.innerHTML = `<i class="ph ph-eye"></i> ${book.views} acessos`;
        }
        
        // Fire and forget view increment to external service
        fetch(`https://api.counterapi.dev/v1/livro-virtual-books/book-${book.id}/up`, { method: 'GET' })
            .catch(err => console.error("Falha ao registrar leitura:", err));
    });

    return card;
}

function renderHomePage() {
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

function renderYearPage(year) {
    mainContent.innerHTML = `<h2 class="section-header">Conteúdos - ${year}</h2>`;
    
    const yearBooks = books.filter(b => b.year === year);
    if (yearBooks.length === 0) {
        mainContent.innerHTML += `<p style="text-align: center; color: var(--text-color); margin-top: 2rem;">Nenhum conteúdo disponível no momento.</p>`;
        return;
    }
    const yearDisciplines = [...new Set(yearBooks.map(b => b.discipline))];

    yearDisciplines.forEach(discipline => {
        const section = document.createElement('div');
        section.className = 'subject-group';
        
        section.innerHTML = `
            <h3>${discipline}</h3>
            <div class="grid"></div>
        `;

        const grid = section.querySelector('.grid');
        const dBooks = yearBooks.filter(b => b.discipline === discipline);
        
        dBooks.forEach(book => {
            grid.appendChild(createBookCard(book));
        });

        mainContent.appendChild(section);
    });
}

function renderDisciplinePage(discipline) {
    mainContent.innerHTML = `<h2 class="section-header">${discipline}</h2>`;
    
    const disciplineBooks = books.filter(b => b.discipline === discipline);
    const dYears = [...new Set(disciplineBooks.map(b => b.year))].sort();

    dYears.forEach(year => {
        const section = document.createElement('div');
        section.className = 'subject-group';
        
        section.innerHTML = `
            <h3>${year}</h3>
            <div class="grid"></div>
        `;

        const grid = section.querySelector('.grid');
        const categoryBooks = disciplineBooks.filter(b => b.year === year);
        
        categoryBooks.forEach(book => {
            grid.appendChild(createBookCard(book));
        });

        mainContent.appendChild(section);
    });
}
