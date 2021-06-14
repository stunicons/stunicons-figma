export default function dataUriToSvg(dataUri: string): string {
    return atob(dataUri.replace(/data:image\/svg\+xml;base64,/, ''));
}
