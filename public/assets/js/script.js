var body = document.querySelector('body');

document.addEventListener('alpine:init', () => {
    Alpine.store('page', {
        mobileMode: false,
        showHamburgerMenu: false,
        pagedScrolled: false,

        init() {
            this.mobileMode = window.innerWidth < 1024;
        },
        resized(){
            this.mobileMode = window.innerWidth < 1024;

            if (!this.mobileMode && body.style.overflow === 'hidden')
                bodyOverflowVisible();
        },
        scrolled(){
            this.pagedScrolled = window.scrollY >= 50;
        },
        toggleHamburgerMenu() {
            this.showHamburgerMenu = !this.showHamburgerMenu;

            if (this.showHamburgerMenu)
                bodyOverflowHidden();
            else
                bodyOverflowVisible();
        }
    });
});

function bodyOverflowHidden() {
    body.style.overflow = 'hidden';
}

function bodyOverflowVisible() {
    body.style.overflow = 'unset';
}