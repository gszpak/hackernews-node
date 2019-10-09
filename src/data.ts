import {Link} from "./schemas/Link";

export const links: Link[] = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
}];
let linkId = links.length;

export function getNextLinkId(): number {
    return linkId++;
}

