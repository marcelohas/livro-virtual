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
    { id: 21, title: 'Davi, Vivi e os Sprunkis das Boas Escolhas no Santa Marcelina', discipline: 'Convívio Social', category: 'Comportamento', year: 'Convívio Social', url: 'https://gemini.google.com/share/e7ceaa786fef', views: 120, icon: 'ph-users' },
    { id: 22, title: 'A Sala que Virou Mundo: As Aventuras Geopolíticas de Bernardo', discipline: 'Geografia', category: 'Geografia', year: '8º Ano', url: 'https://gemini.google.com/share/c59ddd90202d', views: 100, icon: 'ph-globe' },
    { id: 23, title: 'Dignidade em Campo: A Jornada do Gabriel', discipline: 'Ensino Religioso', category: 'Ensino Religioso', year: '8º Ano', url: 'https://gemini.google.com/share/a946ef337cfb', views: 130, icon: 'ph-hands-praying' },
    { id: 24, title: 'O Pequeno Grande Cidadão: Davi e o Ritmo da Responsabilidade', discipline: 'Ensino Religioso', category: 'Ensino Religioso', year: '7º Ano', url: 'https://gemini.google.com/share/86c3ffddfa1a', views: 140, icon: 'ph-hands-praying' },
    { id: 25, title: 'Felipe Augusto e o Expresso dos Números Mágicos', discipline: 'Matemática', category: 'Matemática', year: '3º Ano', url: 'https://gemini.google.com/share/3684f98e8bcb', views: 90, icon: 'ph-math-operations' },
    { id: 26, title: 'O Ritmo de Ludo e Siso', discipline: 'Convívio Social', category: 'Comportamento', year: 'Convívio Social', url: 'https://gemini.google.com/share/f7ded8e40951?hl=pt', views: 110, icon: 'ph-users' },
    { id: 27, title: 'Desvendando Pitágoras', discipline: 'Matemática', category: 'Álgebra', year: '8º Ano', url: 'assets/Desvendando_Pitágoras-Álgebra-8ºano-Anos_Finais.mp4', views: 50, icon: 'ph-video-camera' },
    { id: 28, title: 'O Poder dos Expoentes', discipline: 'Matemática', category: 'Álgebra', year: '8º Ano', url: 'assets/Matemática__O_Poder_dos_Expoentes-Álgebra-Matemática-8ºano-Anos_Finais.mp4', views: 40, icon: 'ph-video-camera' },
    { id: 29, title: 'O guia mágico da potenciação', discipline: 'Matemática', category: 'Álgebra', year: '8º Ano', url: 'assets/O_guia_mágico_da_potenciação_-_Álgebra-Matemática-8ºano-Anos_Finais.png', views: 35, icon: 'ph-image' },
    { id: 30, title: 'TEA - Educação Infantil', discipline: 'Matemática', category: 'Educação Especial', year: 'Educação Infantil', url: 'assets/TEA-Matemática-EdInfantil.png', views: 25, icon: 'ph-image' },
    { id: 31, title: 'O guia mágico da educação inclusiva', discipline: 'Matemática', category: 'Educação Especial', year: '8º Ano', url: 'assets/O_guia_mágico_da_educação_inclusiva-_Álgebra-8ºano-Anos_Finais.png', views: 30, icon: 'ph-image' },
    { id: 32, title: 'Matemática Inclusiva', discipline: 'Matemática', category: 'Educação Especial', year: 'Educação Infantil', url: 'assets/Matemática_Inclusiva-Educação_Infantil.png', views: 45, icon: 'ph-image' },
    { id: 33, title: 'NotebookLM- Geometria e Álgebra', discipline: 'Matemática', category: 'Matemática', year: 'NotebookLM', url: 'https://notebooklm.google.com/notebook/7940015d-cd33-4f8f-9882-a19a62741148', views: 10, icon: 'ph-calculator' },
    { id: 34, title: 'NotebookLM- Redação e Gramática', discipline: 'Língua Portuguesa', category: 'Gramática', year: 'NotebookLM', url: 'https://notebooklm.google.com/notebook/31be6dc3-001e-4547-bb3e-f3f016299089', views: 10, icon: 'ph-book-open-text' },
    { id: 35, title: 'Sintaxe e Gramática', discipline: 'Língua Portuguesa', category: 'Gramática', year: '8º Ano', url: 'assets/Sintaxe-Gramática- Língua Portuguesa-8ºano.png', views: 10, icon: 'ph-image' },
    { id: 36, title: 'Gabriel e o Código Secreto da Gramática', discipline: 'Língua Portuguesa', category: 'Gramática', year: '8º Ano', url: 'https://gemini.google.com/share/dc270021a045', views: 0, icon: 'ph-book-open-text' },
    { id: 37, title: 'O Mistério das Entrelinhas', discipline: 'Língua Portuguesa', category: 'Gramática', year: '8º Ano', url: 'https://gemini.google.com/share/1f5898e8df96', views: 0, icon: 'ph-book-open-text' },
    { id: 38, title: 'Victoria e o Ritmo das Letras', discipline: 'Alfabetização', category: 'Alfabetização', year: 'Educação Infantil', url: 'https://gemini.google.com/share/b40829bd7375', views: 0, icon: 'ph-text-aa' },
    { id: 39, title: 'Victoria e o Reino das Letras Mágicas', discipline: 'Alfabetização', category: 'Alfabetização', year: 'Educação Infantil', url: 'https://gemini.google.com/share/cbb7b7874c9b', views: 0, icon: 'ph-text-aa' },
    { id: 40, title: 'Arquitetura do Predicado', discipline: 'Língua Portuguesa', category: 'Gramática', year: '8º Ano', url: 'assets/Arquitetura_do_Predicado.pptx', views: 0, icon: 'ph-presentation-chart' },
    { id: 41, title: 'Como se Constroem Histórias', discipline: 'Língua Portuguesa', category: 'Redação', year: 'Geral', url: 'assets/Como_se_Constroem_Histórias-LínguaPortuguesa.mp4', views: 0, icon: 'ph-video-camera' },
    { id: 42, title: 'Potenciação (Álgebra)', discipline: 'Matemática', category: 'Álgebra', year: '8º Ano', url: 'assets/Potenciação-Álgebra-8ºano-Anos_Finais.png', views: 0, icon: 'ph-image' },
    { id: 43, title: 'A Fábrica dos Sentidos', discipline: 'Educação Infantil', category: 'Alfabetização', year: 'Educação Infantil', url: 'https://gemini.google.com/share/8771a2fc874c', views: 0, icon: 'ph-text-aa' },
    { id: 44, title: 'O Segredo dos Padrões da Cidade', discipline: 'Educação Infantil', category: 'Alfabetização', year: 'Educação Infantil', url: 'https://gemini.google.com/share/ede31e30f877', views: 0, icon: 'ph-text-aa' },
    { id: 45, title: 'A Máquina dos Sonhos', discipline: 'Educação Infantil', category: 'Alfabetização', year: 'Educação Infantil', url: 'https://gemini.google.com/share/2adfa917639a', views: 0, icon: 'ph-text-aa' },
    { id: 46, title: 'O Jardim dos Sussurros e Segredos', discipline: 'Educação Infantil', category: 'Alfabetização', year: 'Educação Infantil', url: 'https://gemini.google.com/share/64e6ee65cf35', views: 0, icon: 'ph-text-aa' },
    { id: 47, title: 'Atividade de Educação Infantil', discipline: 'Educação Infantil', category: 'Alfabetização', year: 'Educação Infantil', url: 'https://gemini.google.com/share/fa526d0af68b', views: 0, icon: 'ph-text-aa' },
    { id: 48, title: 'O Quintal Colorido da Escola', discipline: 'Educação Infantil', category: 'Alfabetização', year: 'Educação Infantil', url: 'https://gemini.google.com/share/8f223fa29379', views: 0, icon: 'ph-text-aa' }
];

const disciplines = [...new Set(books.map(b => b.discipline))];
const years = [...new Set(books.map(b => b.year))].sort();
if (!years.includes('Convívio Social')) {
    years.push('Convívio Social');
}
if (!years.includes('NotebookLM')) {
    years.push('NotebookLM');
}

const yearNavContainer = document.getElementById('year-nav');
const mainContent = document.getElementById('main-content');

let currentView = 'home'; 

document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    setupModal();
    renderHomePage();
});

function setupModal() {
    const modal = document.getElementById('content-modal');
    const closeBtn = document.getElementById('close-modal');
    const iframe = document.getElementById('modal-iframe');

    if (!modal) return;

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        iframe.src = '';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            iframe.src = '';
        }
    });
}


function setupNavigation() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenus = document.getElementById('nav-menus');

    // Toggle Mobile Menu
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenus.classList.toggle('active');
        });
    }

    // Helper to close menu on mobile
    function closeMobileMenu() {
        if (navMenus.classList.contains('active')) {
            navMenus.classList.remove('active');
        }
    }

    // Search Logic
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase().trim();
            if (term.length > 0) {
                renderSearchResults(term);
                updateActiveNav('search');
            } else {
                updateActiveNav('home');
                renderHomePage();
            }
        });
    }



    // Logo Click (Home)
    document.querySelector('.logo').addEventListener('click', () => {
        updateActiveNav('home');
        renderHomePage();
        closeMobileMenu();
    });

    // Home Btn on top-nav
    const homeBtn = document.createElement('button');
    homeBtn.className = 'nav-link active';
    homeBtn.dataset.view = 'home';
    homeBtn.textContent = 'Início';
    homeBtn.addEventListener('click', () => {
        updateActiveNav('home');
        renderHomePage();
        closeMobileMenu();
    });
    yearNavContainer.appendChild(homeBtn);

    // Grouped Years
    const yearGroups = {
        'Educação Infantil': ['Educação Infantil'],
        'Anos Iniciais': ['1º Ano', '2º Ano', '3º Ano', '4º Ano', '5º Ano'],
        'Anos Finais': ['6º Ano', '7º Ano', '8º Ano', '9º Ano'],
        'Outros': []
    };

    const groupedYears = {
        'Educação Infantil': [],
        'Anos Iniciais': [],
        'Anos Finais': [],
        'Outros': []
    };

    years.forEach(year => {
        let found = false;
        for (const [group, yArr] of Object.entries(yearGroups)) {
            if (group !== 'Outros' && yArr.includes(year)) {
                groupedYears[group].push(year);
                found = true;
                break;
            }
        }
        if (!found) groupedYears['Outros'].push(year);
    });

    Object.keys(groupedYears).forEach(groupName => {
        const groupYears = groupedYears[groupName];
        if (groupYears.length === 0) return;

        // Render as single button if it's the exact match
        if (groupYears.length === 1 && groupName !== 'Outros' && groupName === groupYears[0]) {
            const year = groupYears[0];
            const btn = document.createElement('button');
            btn.className = 'nav-link';
            btn.dataset.view = year;
            btn.textContent = year.toUpperCase();
            
            btn.addEventListener('click', () => {
                document.querySelectorAll('.dropdown .dropbtn').forEach(d => {
                    d.classList.remove('active');
                });
                
                updateActiveNav(year);
                renderYearPage(year);
                closeMobileMenu();
            });
            yearNavContainer.appendChild(btn);
            return;
        }

        groupYears.sort((a, b) => {
            if (groupName !== 'Outros') {
                return yearGroups[groupName].indexOf(a) - yearGroups[groupName].indexOf(b);
            }
            return a.localeCompare(b);
        });

        const dropdownDiv = document.createElement('div');
        dropdownDiv.className = 'dropdown';

        const dropBtn = document.createElement('button');
        dropBtn.className = 'nav-link dropbtn';
        dropBtn.innerHTML = `${groupName} <i class="ph ph-caret-down"></i>`;
        
        dropBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownDiv.classList.toggle('active');
            
            document.querySelectorAll('.dropdown').forEach(dd => {
                if(dd !== dropdownDiv) dd.classList.remove('active');
            });
        });

        const dropdownContent = document.createElement('div');
        dropdownContent.className = 'dropdown-content';

        groupYears.forEach(year => {
            const btn = document.createElement('button');
            btn.dataset.view = year;
            btn.textContent = year.toUpperCase();
            
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // Clear active states on dropbtns
                document.querySelectorAll('.dropdown .dropbtn').forEach(d => {
                    d.classList.remove('active');
                });
                
                // The dropdown container that owns this button
                dropBtn.classList.add('active');

                updateActiveNav(year);
                renderYearPage(year);
                dropdownDiv.classList.remove('active');
                closeMobileMenu();
            });
            dropdownContent.appendChild(btn);
        });

        if (groupName === 'Outros') {
            const fcBtn = document.createElement('button');
            fcBtn.dataset.view = 'flashcards';
            fcBtn.textContent = 'FLASH CARDS';
            fcBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                
                document.querySelectorAll('.dropdown .dropbtn').forEach(d => {
                    d.classList.remove('active');
                });
                
                dropBtn.classList.add('active');

                updateActiveNav('flashcards');
                renderFlashcardsPage();
                dropdownDiv.classList.remove('active');
                closeMobileMenu();
            });
            dropdownContent.appendChild(fcBtn);
        }

        dropdownDiv.appendChild(dropBtn);
        dropdownDiv.appendChild(dropdownContent);
        yearNavContainer.appendChild(dropdownDiv);
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        document.querySelectorAll('.dropdown').forEach(dd => {
            dd.classList.remove('active');
        });
    });

    // Disciplines
    if (disciplines.length > 0) {
        // Sort disciplines alphabetically
        const sortedDisciplines = disciplines.sort((a, b) => a.localeCompare(b));

        const dropdownDiv = document.createElement('div');
        dropdownDiv.className = 'dropdown';

        const dropBtn = document.createElement('button');
        dropBtn.className = 'nav-link dropbtn';
        dropBtn.innerHTML = `Disciplinas <i class="ph ph-caret-down"></i>`;
        
        dropBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownDiv.classList.toggle('active');
            
            // Close other dropdowns
            document.querySelectorAll('.dropdown').forEach(dd => {
                if(dd !== dropdownDiv) dd.classList.remove('active');
            });
        });

        const dropdownContent = document.createElement('div');
        dropdownContent.className = 'dropdown-content';

        sortedDisciplines.forEach(discipline => {
            const btn = document.createElement('button');
            btn.dataset.view = discipline;
            btn.textContent = discipline;
            
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // Clear active states on dropbtns
                document.querySelectorAll('.dropdown .dropbtn').forEach(d => {
                    d.classList.remove('active');
                });
                
                // Set this dropBtn active
                dropBtn.classList.add('active');

                updateActiveNav(discipline);
                renderDisciplinePage(discipline);
                dropdownDiv.classList.remove('active');
                closeMobileMenu();
            });

            dropdownContent.appendChild(btn);
        });

        dropdownDiv.appendChild(dropBtn);
        dropdownDiv.appendChild(dropdownContent);
        yearNavContainer.appendChild(dropdownDiv);
    }
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
    
    // Default config
    card.href = book.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.className = 'card';
    card.style.textDecoration = 'none';
    card.style.color = 'inherit';

    // We will intercept the click for specific types
    const isPPTX = book.url.toLowerCase().endsWith('.pptx');
    const isMP4 = book.url.toLowerCase().endsWith('.mp4');
    const isPNG = book.url.toLowerCase().endsWith('.png');
    const isEmbeddable = isPPTX || isMP4 || isPNG;

    if (isEmbeddable) {
        card.href = '#';
        card.removeAttribute('target');
        card.removeAttribute('rel');
    }

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

    // Intercept click to increment API view count and potentially open modal
    card.addEventListener('click', (e) => {
        if (isEmbeddable) {
            e.preventDefault();
            const modal = document.getElementById('content-modal');
            const iframe = document.getElementById('modal-iframe');
            const modalTitle = document.getElementById('modal-title');
            
            if (modal && iframe) {
                modalTitle.textContent = book.title;
                
                if (isPPTX) {
                    // Embed PPTX using Office Web Viewer
                    // Must use the absolute github pages URL to allow microsoft to access it
                    const publicUrl = `https://marcelohas.github.io/livro-virtual/${book.url}`;
                    iframe.src = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(publicUrl)}`;
                } else {
                    iframe.src = book.url;
                }
                
                modal.classList.remove('hidden');
            }
        }

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

function renderSearchResults(term) {
    mainContent.innerHTML = `<h2 class="section-header">Resultados para: "${term}"</h2>`;
    
    // Normalize string to ignore accents
    const normalize = str => str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : '';
    const normTerm = normalize(term);

    const results = books.filter(b => 
        normalize(b.title).includes(normTerm) ||
        normalize(b.discipline).includes(normTerm) ||
        normalize(b.category).includes(normTerm) ||
        normalize(b.year).includes(normTerm)
    );

    if (results.length === 0) {
        mainContent.innerHTML += `<p style="text-align: center; color: var(--text-color); margin-top: 2rem;">Nenhum conteúdo encontrado para esta busca.</p>`;
        return;
    }

    const grid = document.createElement('div');
    grid.className = 'grid';

    results.forEach(book => {
        grid.appendChild(createBookCard(book));
    });

    mainContent.appendChild(grid);
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

function renderFlashcardsPage() {
    mainContent.innerHTML = `
        <h2 class="section-header">Flash Cards</h2>
        <p style="text-align: center; margin-bottom: 2rem;">Pratique seus conhecimentos! Clique no cartão para ver a resposta.</p>
        <div id="flashcards-container" class="flashcards-stacks-container"></div>
    `;

    const container = document.getElementById('flashcards-container');

    if (typeof flashcardsData === 'undefined' || Object.keys(flashcardsData).length === 0) {
        container.innerHTML = '<p style="text-align: center;">Nenhum flashcard encontrado.</p>';
        return;
    }

    for (const [topic, cards] of Object.entries(flashcardsData)) {
        if (cards.length === 0) continue;
        
        const cleanTopicTitle = topic.replace(/-/g, ' ').replace('flashcards', ' - ');
        
        const stackDiv = document.createElement('div');
        stackDiv.className = 'flashcard-stack-wrapper';
        
        let currentIndex = 0;
        
        stackDiv.innerHTML = `
            <h3 class="stack-title">${cleanTopicTitle}</h3>
            <div class="stack-counter">
                <span class="current-idx">1</span> / ${cards.length}
            </div>
            
            <div class="flashcard-container-single">
                <div class="flashcard">
                    <div class="flashcard-inner">
                        <div class="flashcard-front">
                            <p class="question-text"></p>
                        </div>
                        <div class="flashcard-back">
                            <p class="answer-text"></p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="stack-controls">
                <button class="nav-link btn-prev" disabled><i class="ph ph-caret-left"></i> Anterior</button>
                <button class="nav-link btn-next">Próximo <i class="ph ph-caret-right"></i></button>
            </div>
        `;
        
        const cardElem = stackDiv.querySelector('.flashcard');
        const qText = stackDiv.querySelector('.question-text');
        const aText = stackDiv.querySelector('.answer-text');
        const counterSpan = stackDiv.querySelector('.current-idx');
        const btnPrev = stackDiv.querySelector('.btn-prev');
        const btnNext = stackDiv.querySelector('.btn-next');
        
        function updateCardUI() {
            cardElem.classList.remove('flipped');
            setTimeout(() => {
                qText.textContent = cards[currentIndex].q;
                aText.textContent = cards[currentIndex].a;
                counterSpan.textContent = currentIndex + 1;
                
                btnPrev.disabled = currentIndex === 0;
                btnNext.disabled = currentIndex === cards.length - 1;
            }, 100); // pequeno delay visual caso esteja flipado
        }
        
        cardElem.addEventListener('click', () => {
            cardElem.classList.toggle('flipped');
        });
        
        btnPrev.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCardUI();
            }
        });
        
        btnNext.addEventListener('click', () => {
            if (currentIndex < cards.length - 1) {
                currentIndex++;
                updateCardUI();
            }
        });

        // Initialize stack state
        updateCardUI();
        container.appendChild(stackDiv);
    }
}
