import * as TypeGraphQL from "type-graphql";

export enum CompanyScalarFieldEnum {
  id = "id",
  name = "name",
  identifier = "identifier",
  country = "country",
  foundationDate = "foundationDate",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(CompanyScalarFieldEnum, {
  name: "CompanyScalarFieldEnum",
  description: undefined,
});
