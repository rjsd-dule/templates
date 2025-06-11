
        document.addEventListener('DOMContentLoaded', function() {
            
            const cards = document.querySelectorAll('.plan-card');
            cards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.2}s`;
            });

            
            const ctaButtons = document.querySelectorAll('.cta-button');
            ctaButtons.forEach(button => {
                button.addEventListener('click', function() {
                   
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 150);
                    
                   
                    const planName = this.closest('.plan-card').querySelector('.plan-name').textContent;
                    alert(`¡Excelente elección! Has seleccionado el plan: ${planName}\n\nTe contactaremos pronto para comenzar.`);
                });
            });

            
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const parallax = document.querySelector('.header');
                const speed = scrolled * 0.5;
                parallax.style.transform = `translateY(${speed}px)`;
            });

           
            const priceValues = document.querySelectorAll('.price-value');
            priceValues.forEach(price => {
                const text = price.textContent;
                if (text.includes('$')) {
                    price.addEventListener('mouseenter', function() {
                        this.style.transform = 'scale(1.1)';
                        this.style.color = '#FF9800';
                    });
                    
                    price.addEventListener('mouseleave', function() {
                        this.style.transform = 'scale(1)';
                        this.style.color = '#333';
                    });
                }
            });
        });