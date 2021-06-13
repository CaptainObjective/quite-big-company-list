import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyAvgAggregate } from "../outputs/CompanyAvgAggregate";
import { CompanyCountAggregate } from "../outputs/CompanyCountAggregate";
import { CompanyMaxAggregate } from "../outputs/CompanyMaxAggregate";
import { CompanyMinAggregate } from "../outputs/CompanyMinAggregate";
import { CompanySumAggregate } from "../outputs/CompanySumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class CompanyGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  country!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  foundationDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => CompanyCountAggregate, {
    nullable: true
  })
  _count!: CompanyCountAggregate | null;

  @TypeGraphQL.Field(_type => CompanyAvgAggregate, {
    nullable: true
  })
  _avg!: CompanyAvgAggregate | null;

  @TypeGraphQL.Field(_type => CompanySumAggregate, {
    nullable: true
  })
  _sum!: CompanySumAggregate | null;

  @TypeGraphQL.Field(_type => CompanyMinAggregate, {
    nullable: true
  })
  _min!: CompanyMinAggregate | null;

  @TypeGraphQL.Field(_type => CompanyMaxAggregate, {
    nullable: true
  })
  _max!: CompanyMaxAggregate | null;
}
