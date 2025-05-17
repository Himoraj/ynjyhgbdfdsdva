document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabHighlight = document.querySelector('.tab-highlight');
    const tabBar = document.querySelector('.tab-bar');
    const tabContents = document.querySelectorAll('.tab-content');
    
    function updateHighlightPosition(activeButton) {
        const buttonRect = activeButton.getBoundingClientRect();
        const barRect = tabBar.getBoundingClientRect();
        
        const left = buttonRect.left - barRect.left;
        const width = buttonRect.width;
        
        tabHighlight.style.left = `${left}px`;
        tabHighlight.style.width = `${width}px`;
    }
    
    function switchTab(tabName) {
        // Update active tab button
        tabButtons.forEach(button => {
            button.classList.toggle('active', button.dataset.tab === tabName);
        });
        
        // Update active tab content
        tabContents.forEach(content => {
            content.classList.toggle('active', content.dataset.tabContent === tabName);
        });
        
        // Update highlight position
        const activeButton = document.querySelector(`.tab-button[data-tab="${tabName}"]`);
        if (activeButton) {
            updateHighlightPosition(activeButton);
        }
    }
    
    // Initialize
    const activeTab = document.querySelector('.tab-button.active');
    if (activeTab) {
        updateHighlightPosition(activeTab);
        switchTab(activeTab.dataset.tab);
    }
    
    // Tab button click handlers
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            switchTab(tabName);
        });
    });
    
    // Update on window resize
    window.addEventListener('resize', function() {
        const activeButton = document.querySelector('.tab-button.active');
        if (activeButton) {
            updateHighlightPosition(activeButton);
        }
    });
});

// Заменяем существующий обработчик на этот
const refreshIcon = document.querySelector('.Balance .refresh-icon');
if (refreshIcon) {
    refreshIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        alert('Пополнить баланс');
        console.log('Пополнить баланс clicked');
    });
}
