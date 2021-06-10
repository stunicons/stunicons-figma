const eventListeners: { type: string; callback: Function }[] = [];
export const dispatch = (action: string, data?: any) => {
    parent.postMessage({ pluginMessage: { action, data } }, '*');
};
export const handleEvent = (type: string, callback: Function) => {
    eventListeners.push({ type, callback });
};
window.onmessage = (event) => {
    const message = event.data.pluginMessage;
    if (message) {
        for (const eventListener of eventListeners) {
            if (message.action === eventListener.type) eventListener.callback(message.data);
        }
    }
};
