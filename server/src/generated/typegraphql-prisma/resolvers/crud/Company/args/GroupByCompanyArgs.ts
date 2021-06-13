import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CompanyOrderByInput } from "../../../inputs/CompanyOrderByInput";
import { CompanyScalarWhereWithAggregatesInput } from "../../../inputs/CompanyScalarWhereWithAggregatesInput";
import { CompanyWhereInput } from "../../../inputs/CompanyWhereInput";
import { CompanyScalarFieldEnum } from "../../../../enums/CompanyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCompanyArgs {
  @TypeGraphQL.Field(_type => CompanyWhereInput, {
    nullable: true
  })
  where?: CompanyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CompanyOrderByInput], {
    nullable: true
  })
  orderBy?: CompanyOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "identifier" | "country" | "foundationDate" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => CompanyScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CompanyScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
