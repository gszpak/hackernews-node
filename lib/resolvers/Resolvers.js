"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var type_graphql_1 = require("type-graphql");
var Link_1 = require("../schemas/Link");
var links = [{
        id: 'link-0',
        url: 'www.howtographql.com',
        description: 'Fullstack tutorial for GraphQL'
    }];
var linkId = links.length;
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    default_1.prototype.info = function () {
        return "This is the API of a Hackernews Clone";
    };
    default_1.prototype.feed = function () {
        return links;
    };
    __decorate([
        type_graphql_1.Query(function (type) { return String; })
    ], default_1.prototype, "info", null);
    __decorate([
        type_graphql_1.Query(function (returns) { return [Link_1.Link]; })
    ], default_1.prototype, "feed", null);
    default_1 = __decorate([
        type_graphql_1.Resolver()
    ], default_1);
    return default_1;
}());
exports.default = default_1;
var LinkResolver = /** @class */ (function () {
    function LinkResolver() {
    }
    LinkResolver.prototype.post = function (url, description) {
        var link = {
            id: "link-" + linkId++,
            description: description,
            url: url
        };
        links.push(link);
        return link;
    };
    __decorate([
        type_graphql_1.Mutation(function (returns) { return Link_1.Link; }),
        __param(0, type_graphql_1.Arg("url")),
        __param(1, type_graphql_1.Arg("description"))
    ], LinkResolver.prototype, "post", null);
    LinkResolver = __decorate([
        type_graphql_1.Resolver(function (of) { return Link_1.Link; })
    ], LinkResolver);
    return LinkResolver;
}());
exports.LinkResolver = LinkResolver;
