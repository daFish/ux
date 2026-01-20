import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['item'];
    static values = {
        type: { type: String, default: 'single' },
        collapsible: { type: Boolean, default: false },
    };

    connect() {
        this.itemTargets.forEach((item) => {
            item.addEventListener('toggle', this.#handleToggle);
        });
    }

    disconnect() {
        this.itemTargets.forEach((item) => {
            item.removeEventListener('toggle', this.#handleToggle);
        });
    }

    itemTargetConnected(item) {
        item.addEventListener('toggle', this.#handleToggle);
    }

    itemTargetDisconnected(item) {
        item.removeEventListener('toggle', this.#handleToggle);
    }

    #handleToggle = (event) => {
        const item = event.target;

        if (this.typeValue !== 'single') {
            return;
        }

        if (item.open) {
            this.itemTargets.forEach((otherItem) => {
                if (otherItem !== item && otherItem.open) {
                    otherItem.open = false;
                }
            });
        } else if (!this.collapsibleValue) {
            event.preventDefault();
            item.open = true;
        }
    };
}
