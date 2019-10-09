"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.links = [{
        id: 'link-0',
        url: 'www.howtographql.com',
        description: 'Fullstack tutorial for GraphQL'
    }];
let linkId = exports.links.length;
function getNextLinkId() {
    return linkId++;
}
exports.getNextLinkId = getNextLinkId;
