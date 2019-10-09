import {Query, Resolver} from "type-graphql";

@Resolver()
export default class {
    @Query(type => String)
    info(): string {
        return "This is the API of a Hackernews Clone"
    }
}

