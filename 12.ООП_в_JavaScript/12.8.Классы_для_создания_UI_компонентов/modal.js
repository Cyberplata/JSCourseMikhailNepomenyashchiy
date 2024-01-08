class Modal {
    constructor(text = 'error') {
        this.text = text;

        this.init();
    }

    init() {    // Создаём метод init, чтобы он выполнил набор операций
        this.createMarkup();
        this.modal = document.getElementById('myModal');
        this.closeBtn = this.modal.querySelector('.close');
        this.attachEvents();
    }

    createMarkup() {
        document.body.insertAdjacentHTML('beforeend', `
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p>${this.text}</p>
                </div>
            </div>
        `)
    }

    attachEvents() {
        this.closeBtn.addEventListener('click', this.closeFn);
    }

    closeFn() {
        // detach events
        this.modal.remove();
        this.modal = null;
    }
}