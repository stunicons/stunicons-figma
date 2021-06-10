const eventListeners: { type: string; callback: Function }[] = [];
export const dispatch = (action: string, data?: any) => {
    figma.ui.postMessage({ action, data });
};
export const handleEvent = (type: string, callback: Function) => {
    eventListeners.push({ type, callback });
};
figma.ui.onmessage = (message) => {
    for (const eventListener of eventListeners) {
        if (message.action === eventListener.type) eventListener.callback(message.data);
    }
};
