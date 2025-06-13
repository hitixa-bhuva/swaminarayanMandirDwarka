class AttractionsSlider {
    constructor() {
        this.slider = document.getElementById('sliderContainer');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.cards = document.querySelectorAll('.attraction-card');
        // this.dotsContainer = document.getElementById('sliderDots'); // Removed this line
        this.currentIndex = 0;
        this.cardsPerView = this.getCardsPerView();
        this.maxIndex = Math.max(0, this.cards.length - this.cardsPerView);

        this.init();
        this.setupEventListeners();
        this.setupResizeListener();
    }

    init() {
        this.updateSlider();
        this.updateControls();
        // this.createDots(); // Removed this line
    }

    getCardsPerView() {
        const width = window.innerWidth;
        if (width >= 1200) return 4;
        if (width >= 992) return 3;
        if (width >= 768) return 2;
        return 1;
    }

    // createDots() { // Removed this entire method
    //     this.dotsContainer.innerHTML = '';
    //     const totalDots = this.maxIndex + 1;

    //     for (let i = 0; i < totalDots; i++) {
    //         const dot = document.createElement('div');
    //         dot.className = 'dot';
    //         if (i === 0) dot.classList.add('active');
    //         dot.addEventListener('click', () => this.goToSlide(i));
    //         this.dotsContainer.appendChild(dot);
    //     }
    // }

    updateSlider() {
        const cardWidth = this.cards[0].offsetWidth;
        const gap = 30; // Gap between cards
        const offset = this.currentIndex * (cardWidth + gap);

        this.slider.style.transform = `translateX(-${offset}px)`;

        // Update dots (this part is now commented out or removed)
        // const dots = this.dotsContainer.querySelectorAll('.dot');
        // dots.forEach((dot, index) => {
        //     dot.classList.toggle('active', index === this.currentIndex);
        // });
    }

    updateControls() {
        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex >= this.maxIndex;
    }

    next() {
        if (this.currentIndex < this.maxIndex) {
            this.currentIndex++;
            this.updateSlider();
            this.updateControls();
        }
    }

    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateSlider();
            this.updateControls();
        }
    }

    goToSlide(index) {
        this.currentIndex = Math.max(0, Math.min(index, this.maxIndex));
        this.updateSlider();
        this.updateControls();
    }

    setupEventListeners() {
        this.nextBtn.addEventListener('click', () => this.next());
        this.prevBtn.addEventListener('click', () => this.prev());

        // Card click handlers
        this.cards.forEach((card, index) => {
            card.addEventListener('click', () => {
                const attraction = card.dataset.attraction;
                this.handleCardClick(attraction);
            });
        });

        // Touch/swipe support
        let startX = 0;
        let currentX = 0;
        let isDragging = false;

        this.slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });

        this.slider.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
        });

        this.slider.addEventListener('touchend', () => {
            if (!isDragging) return;

            const deltaX = startX - currentX;
            const threshold = 50;

            if (Math.abs(deltaX) > threshold) {
                if (deltaX > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }

            isDragging = false;
        });

        // Auto-play (optional)
        this.startAutoPlay();
    }

    startAutoPlay() {
        setInterval(() => {
            if (this.currentIndex >= this.maxIndex) {
                this.goToSlide(0);
            } else {
                this.next();
            }
        }, 5000); // Change slide every 5 seconds
    }

    setupResizeListener() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const newCardsPerView = this.getCardsPerView();
                if (newCardsPerView !== this.cardsPerView) {
                    this.cardsPerView = newCardsPerView;
                    this.maxIndex = Math.max(0, this.cards.length - this.cardsPerView);
                    this.currentIndex = Math.min(this.currentIndex, this.maxIndex);
                    // this.createDots(); // Removed this line
                    this.updateSlider();
                    this.updateControls();
                }
            }, 250);
        });
    }

    handleCardClick(attraction) {
        // Handle attraction card clicks
        console.log(`Clicked on: ${attraction}`);
        // You can add navigation logic here
        // For demo, show an alert
        const attractionNames = {
            'dwarka-temple': 'Dwarka Temple',
            'dwarka-beach': 'Dwarka Beach',
            'sudarshan-setu': 'Sudarshan Setu',
            'rukmani-temple': 'Rukmani Devi Temple',
            'nageshwar-temple': 'Nageshwar Temple',
            'gopi-talav': 'Gopi Talav'
        };

        alert(`Learn more about ${attractionNames[attraction]}!`);
    }
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AttractionsSlider();
});

// Add some interactive animations
document.querySelectorAll('.attraction-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });

    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});