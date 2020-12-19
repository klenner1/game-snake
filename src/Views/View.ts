export class View {

    parent: HTMLElement;

    constructor(parent: HTMLElement) {
        this.parent = parent;
    }

    render(htmlString: string) {
        this.parent.innerHTML = htmlString;
    }
}