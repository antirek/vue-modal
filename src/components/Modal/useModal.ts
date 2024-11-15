import {createApp, defineComponent, h, App} from 'vue'

export function useModal<T>({component, slots, props, emits}): Promise<void> {
    return new Promise(() => {
        const modalDiv = document.createElement('div')
        document.body.appendChild(modalDiv)

        const closeHandler = () => {
            app.unmount()
            document.body.removeChild(modalDiv);
            emits.onClose(props)
            // console.log('close')
        }

        const ModalWrapper = defineComponent({
            render() {
                return h(
                    component as any,
                    {
                        // ...emits,
                        // ...props,
                        onClose: closeHandler,
                    },
                    h(slots.default, {
                        ...emits,
                        ...props,
                        onClose: closeHandler,
                    })
                )
            },
        })
        const app: App = createApp(ModalWrapper)
        app.mount(modalDiv)
    })
}
