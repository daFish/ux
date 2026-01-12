import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['item', 'trigger', 'content', 'icon'];
    static values = {
        type: { type: String, default: 'single' },
        collapsible: { type: Boolean, default: false },
    };

    toggle(event) {
        const trigger = event.currentTarget;
        const item = trigger.closest('[data-accordion-target="item"]');
        const content = item.querySelector('[data-accordion-target="content"]');
        const icon = item.querySelector('[data-accordion-target="icon"]');
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';

        if (this.typeValue === 'single') {
            if (isOpen && this.collapsibleValue) {
                this.#close(item, trigger, content, icon);
            } else if (!isOpen) {
                this.#closeAll();
                this.#open(item, trigger, content, icon);
            }
        } else {
            if (isOpen) {
                this.#close(item, trigger, content, icon);
            } else {
                this.#open(item, trigger, content, icon);
            }
        }
    }

    #open(item, trigger, content, icon) {
        trigger.setAttribute('aria-expanded', 'true');
        item.setAttribute('data-state', 'open');
        content.setAttribute('data-state', 'open');
        content.removeAttribute('hidden');
        if (icon) {
            icon.style.transform = 'rotate(180deg)';
        }
    }

    #close(item, trigger, content, icon) {
        trigger.setAttribute('aria-expanded', 'false');
        item.setAttribute('data-state', 'closed');
        content.setAttribute('data-state', 'closed');
        content.setAttribute('hidden', '');
        if (icon) {
            icon.style.transform = '';
        }
    }

    #closeAll() {
        this.itemTargets.forEach((item) => {
            const trigger = item.querySelector('[data-accordion-target="trigger"]');
            const content = item.querySelector('[data-accordion-target="content"]');
            const icon = item.querySelector('[data-accordion-target="icon"]');
            if (trigger && content) {
                this.#close(item, trigger, content, icon);
            }
        });
    }
}
