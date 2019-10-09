"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const Link_1 = require("../schemas/Link");
const data_1 = require("../data");
let LinkResolver = class LinkResolver {
    feed() {
        return data_1.links;
    }
    link(id) {
        return this.fetchLink(id);
    }
    post(url, description) {
        let link = {
            id: `link-${data_1.getNextLinkId()}`,
            description: description,
            url: url
        };
        data_1.links.push(link);
        return link;
    }
    updateLink(id, url, description) {
        let link = this.fetchLink(id);
        if (url != null) {
            link.url = url;
        }
        if (description != null) {
            link.description = description;
        }
        return link;
    }
    deleteLink(id) {
        const link = this.fetchLink(id);
        const index = data_1.links.indexOf(link);
        if (index > -1) {
            data_1.links.splice(index, 1);
        }
        return link;
    }
    fetchLink(id) {
        return data_1.links.filter(link => link.id === id)[0];
    }
};
__decorate([
    type_graphql_1.Query(returns => [Link_1.Link]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LinkResolver.prototype, "feed", null);
__decorate([
    type_graphql_1.Query(returns => Link_1.Link),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LinkResolver.prototype, "link", null);
__decorate([
    type_graphql_1.Mutation(returns => Link_1.Link),
    __param(0, type_graphql_1.Arg("url")),
    __param(1, type_graphql_1.Arg("description")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Link_1.Link)
], LinkResolver.prototype, "post", null);
__decorate([
    type_graphql_1.Mutation(returns => Link_1.Link),
    __param(0, type_graphql_1.Arg("id")),
    __param(1, type_graphql_1.Arg("url", { nullable: true })),
    __param(2, type_graphql_1.Arg("description", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Link_1.Link)
], LinkResolver.prototype, "updateLink", null);
__decorate([
    type_graphql_1.Mutation(returns => Link_1.Link),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Link_1.Link)
], LinkResolver.prototype, "deleteLink", null);
LinkResolver = __decorate([
    type_graphql_1.Resolver(of => Link_1.Link)
], LinkResolver);
exports.LinkResolver = LinkResolver;
