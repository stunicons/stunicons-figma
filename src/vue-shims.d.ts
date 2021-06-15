declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    import mitt from 'mitt';

    interface VueComponent extends DefineComponent {
        bus: typeof mitt;
    }

    const component: VueComponent;
    export default component;
}
