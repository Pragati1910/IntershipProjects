document.addEventListener('DOMContentLoaded', function () {
    const currencySelector = document.getElementById('currency-selector');
    const unitSelector = document.getElementById('unit-selector');
    const basicPrice = document.getElementById('basic-plan').querySelector('h3');
    const standardPrice = document.getElementById('standard-plan').querySelector('h3');
    const premiumPrice = document.getElementById('premium-plan').querySelector('h3');

    currencySelector.addEventListener('change', updatePrices);
    unitSelector.addEventListener('change', updatePrices);

    function updatePrices() {
        const currency = currencySelector.value.toUpperCase();
        const unit = unitSelector.value === 'year' ? '/year' : '/month';

        const basicPriceValue = getFormattedPrice(99, currency);
        const standardPriceValue = getFormattedPrice(201, currency);
        const premiumPriceValue = getFormattedPrice(399, currency);

        basicPrice.innerText = basicPriceValue + unit;
        standardPrice.innerText = standardPriceValue + unit;
        premiumPrice.innerText = premiumPriceValue + unit;
    }

    function getFormattedPrice(price, currency) {
        switch (currency) {
            case 'USD':
                return '$' + price/3;
            case 'EUR':
                return '€' + price/2;
            case 'IND':
                return '₹' + price;
            default:
                return currency + price;
        }
    }
    updatePrices();
});

document.addEventListener('DOMContentLoaded', function () {
    const pricingCards = document.querySelectorAll('.pricing-card');
    const chooseButtons = document.querySelectorAll('.btn');

    function handleButtonClick(event) {
        const selectedPlan = event.currentTarget.closest('.pricing-card').querySelector('h2').innerText;
        alert(`You have chosen the ${selectedPlan}`);
    }

    chooseButtons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    pricingCards.forEach(card => {
        card.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease-in-out';
        });

        card.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
        });
    });
});
