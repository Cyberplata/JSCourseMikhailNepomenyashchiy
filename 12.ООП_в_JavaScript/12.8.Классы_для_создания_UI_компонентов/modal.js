class Modal {
    constructor(text = 'error') {
        this.text = text;

        this.init();
    }

    init() {  // Создаём метод init, чтобы он выполнил набор операций
        this.createMarkup();
        this.modal = document.getElementById('myModal');  // В отдельную переменную получаем информацию о корневом эл-те
        this.closeBtn = this.modal.querySelector('.close');  // В отдельную переменную получаем кнопку закрытия
        this.attachEvents();  // Обработчики событий привязываем
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
        this.closeFn = this.closeFn.bind(this);  // Modal, а до этого ссылался на span
        this.handleClick = this.handleClick.bind(this);

        this.closeBtn.addEventListener('click', this.closeFn);
        window.addEventListener('click', this.handleClick);
    }

    handleClick(e) {
        if (e.target === this.modal) {
            this.closeFn();
        }
    }

    closeFn() {
        console.log(this);
        // detach events
        this.detachEvents();
        this.modal.remove();
        this.modal = null;
    }

    detachEvents() {
        this.closeBtn.removeEventListener('click', this.closeFn);
        window.removeEventListener('click', this.handleClick);
    }
}