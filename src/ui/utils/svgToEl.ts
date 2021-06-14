export async function dataUriToSvg(dataUri: string): Promise<string> {
    const g: typeof globalThis = window || global;
    const b64: string = dataUri.replace(/data:image\/svg\+xml;base64,/, '');

    if (g.atob) {
        return await g.atob(b64);
    } else {
        return await Buffer.from(b64, 'base64').toString('utf8');
    }
}
