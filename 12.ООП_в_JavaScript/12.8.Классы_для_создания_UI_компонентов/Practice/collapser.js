// опишите класс Collapser
class Collapser {
    constructor(selector) {
        this.selector = selector;
        this.init();
        console.log(this);
    }

    init() {
        console.log(this);
        this.collapsBtns = document.querySelectorAll(`.${this.selector}`);
        this.attachEvents();
    }

    attachEvents() {
        console.log(this);
        this.collapsBtns.forEach((btn) => {
            btn.addEventListener('click', this.toggleCollapser)
        })
        // this.selector.addEventListener('click', this.toggleContent2)
    }

    toggleCollapser(event) {
        console.log(this);
        console.log(event);
        this.collapser = event.target.nextElementSibling;
        console.log(this.collapser);
        this.collapser.style.display = this.collapser.style.display !== 'block' ? 'block' : 'none';
        detachEvents();
        // if (this.collapser.style.display !== 'block') {
        //     this.collapser.style.display === 'block';
        //     console.log('!!!!!');
            
        // } else {
        //     this.collapser.style.display === 'none';
        //     console.log('++++++++++');
        // }
    }

    detachEvents() {
        this.collapsBtns.forEach((btn) => {
            btn.removeEventListener('click', this.toggleCollapser)
        })
    }
}

new Collapser('collapsible');
new Collapser('collapsible2');