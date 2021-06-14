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
            const svg: string = await dataUriToSvg(s);
            const node: FrameNode = figma.createNodeFromSvg(svg);
            node.name = icon.name;
            node.rescale(0.5);
        })
        .catch((er) => {
            console.log(er);
        });

    // This shows how the main code can send messages to the UI code.
    // dispatch('nodeCreated', node.id);
});
