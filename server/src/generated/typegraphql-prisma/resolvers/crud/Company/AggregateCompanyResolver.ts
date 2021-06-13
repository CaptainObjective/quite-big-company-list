import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCompanyArgs } from "./args/AggregateCompanyArgs";
import { Company } from "../../../models/Company";
import { AggregateCompany } from "../../outputs/AggregateCompany";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Company)
export class AggregateCompanyResolver {
  @TypeGraphQL.Query(_returns => AggregateCompany, {
    nullable: false
  })
  async aggregateCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCompanyArgs): Promise<AggregateCompany> {
    return getPrismaFromContext(ctx).company.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
