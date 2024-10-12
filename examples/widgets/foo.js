
export default class FooWidget extends HTMLElement {
    constructor() {
        super()        
    }

    connectedCallback() {
        console.log('foo')
    }

    render() {

    }
}