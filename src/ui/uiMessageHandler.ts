const eventListeners: { type: string; callback: (data?: string) => void }[] = [];

export const dispatch = (action: string, data?: unknown): void => {
    parent.postMessage({ pluginMessage: { action, data } }, '*');
};
export const handleEvent = (type: string, callback: (data?: string) => void): void => {
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
