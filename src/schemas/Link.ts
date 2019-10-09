import {Field, ID, ObjectType} from "type-graphql";

@ObjectType()
export class Link {
    @Field(type => ID)
    id: string;

    @Field(type => String)
    description: string;

    @Field(type => String)
    url: string;
}