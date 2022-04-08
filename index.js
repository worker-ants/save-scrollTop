class Storage {
    static itemName = 'scrollTop';

    static set(pos) {
        localStorage.setItem(Storage.itemName, pos);
    }

    static get() {
        const value = localStorage.getItem(Storage.itemName);
        return parseFloat(value ?? 0);
    }
}

class Container {
    static $node = document.getElementById('container');

    static setScrollTop(value) {
        Container.$node.scrollTop = value;
    }

    static getScrollTop() {
        return Container.$node.scrollTop;
    }

    static addEventListener(event, handler) {
        return Container.$node.addEventListener(event, handler);
    };
}

class StoredLabel {
    static $node = document.getElementById('stored_scrollTop');

    static set(value) {
        StoredLabel.$node.innerText = value;
    }
}

class CurrentLabel {
    static $node = document.getElementById('current_scrollTop');

    static set(value) {
        CurrentLabel.$node.innerText = value;
    }
}

window.onload = () => {
    const stored = Storage.get();

    Container.setScrollTop(stored);
    Container.addEventListener('scroll', (ev) => {
        CurrentLabel.set(ev.target.scrollTop);
    });

    StoredLabel.set(stored);
    CurrentLabel.set(Container.getScrollTop());
};

window.onbeforeunload = () => {
    Storage.set(Container.getScrollTop());
};