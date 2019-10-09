import {Arg, Mutation, Query, Resolver} from "type-graphql";
import {Link} from "../schemas/Link";
import {getNextLinkId, links} from "../data";

@Resolver(of => Link)
export class LinkResolver {
    @Query(returns => [Link])
    feed() {
        return links;
    }

    @Query(returns => Link)
    link(@Arg("id") id: string) {
        return this.fetchLink(id);
    }

    @Mutation(returns => Link)
    post(
        @Arg("url") url: string,
        @Arg("description") description: string): Link {
        let link = {
            id: `link-${getNextLinkId()}`,
            description: description,
            url: url
        };
        links.push(link);
        return link;
    }

    @Mutation(returns => Link)
    updateLink(
        @Arg("id") id: string,
        @Arg("url", {nullable: true}) url: string,
        @Arg("description", {nullable: true}) description: string): Link {
        let link = this.fetchLink(id);
        if (url != null) {
            link.url = url;
        }
        if (description != null) {
            link.description = description;
        }
        return link;
    }

    @Mutation(returns => Link)
    deleteLink(
        @Arg("id") id: string): Link {
        const link = this.fetchLink(id);
        const index = links.indexOf(link);
        if (index > -1) {
            links.splice(index, 1);
        }
        return link;
    }

    private fetchLink(id: string): Link {
        return links.filter(link => link.id === id)[0];
    }
}
