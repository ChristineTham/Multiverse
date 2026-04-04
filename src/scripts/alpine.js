export default (Alpine) => {
    Alpine.store('panel', {
        active: false,
        toggle() {
            this.active = !this.active;
        },
        hide() {
            this.active = false;
        }
    });
};
