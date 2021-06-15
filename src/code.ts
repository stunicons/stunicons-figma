// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { dispatch, handleEvent } from './codeMessageHandler';
import { dataUriToSvg } from './ui/utils/svgToEl';

const options: ShowUIOptions = {
    height: 400,
};

figma.showUI(__html__, options);

// The following shows how messages from the UI code can be handled in the main code.
handleEvent('insertIcon', (icon) => {
    import(`stunicons/icons/${icon.category}/${icon.name}.svg`)
        .then(async (s) => {
            const _name: string = icon.name.replace('si-', '');
            const svg: string = await dataUriToSvg(s);
            const node: FrameNode = figma.createNodeFromSvg(svg);
            node.name = _name;
            node.resize(25, 25);
            node.x = figma.viewport.center.x;
            node.y = figma.viewport.center.y;
        })
        .catch((er) => {
            console.log(er);
        });

    // This shows how the main code can send messages to the UI code.
    // dispatch('nodeCreated', node.id);
});
