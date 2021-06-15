import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AggregateCompany = {
  __typename?: 'AggregateCompany';
  _count?: Maybe<CompanyCountAggregate>;
  _avg?: Maybe<CompanyAvgAggregate>;
  _sum?: Maybe<CompanySumAggregate>;
  _min?: Maybe<CompanyMinAggregate>;
  _max?: Maybe<CompanyMaxAggregate>;
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['Int'];
  name: Scalars['String'];
  identifier: Scalars['String'];
  country: Scalars['String'];
  foundationDate: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type CompanyAvgAggregate = {
  __typename?: 'CompanyAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type CompanyCountAggregate = {
  __typename?: 'CompanyCountAggregate';
  id: Scalars['Int'];
  name: Scalars['Int'];
  identifier: Scalars['Int'];
  country: Scalars['Int'];
  foundationDate: Scalars['Int'];
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
  _all: Scalars['Int'];
};

export type CompanyMaxAggregate = {
  __typename?: 'CompanyMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  identifier?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  foundationDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyMinAggregate = {
  __typename?: 'CompanyMinAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  identifier?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  foundationDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  identifier?: Maybe<SortOrder>;
  country?: Maybe<SortOrder>;
  foundationDate?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum CompanyScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Identifier = 'identifier',
  Country = 'country',
  FoundationDate = 'foundationDate',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type CompanySumAggregate = {
  __typename?: 'CompanySumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type CompanyWhereInput = {
  AND?: Maybe<Array<CompanyWhereInput>>;
  OR?: Maybe<Array<CompanyWhereInput>>;
  NOT?: Maybe<Array<CompanyWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  identifier?: Maybe<StringFilter>;
  country?: Maybe<StringFilter>;
  foundationDate?: Maybe<DateTimeFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CompanyWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};


export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type Query = {
  __typename?: 'Query';
  companies: Array<Company>;
  aggregateCompany: AggregateCompany;
};


export type QueryCompaniesArgs = {
  where?: Maybe<CompanyWhereInput>;
  orderBy?: Maybe<Array<CompanyOrderByInput>>;
  cursor?: Maybe<CompanyWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CompanyScalarFieldEnum>>;
};


export type QueryAggregateCompanyArgs = {
  where?: Maybe<CompanyWhereInput>;
  orderBy?: Maybe<Array<CompanyOrderByInput>>;
  cursor?: Maybe<CompanyWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type FindCompaniesQueryVariables = Exact<{
  take: Scalars['Int'];
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CompanyWhereUniqueInput>;
  where?: Maybe<CompanyWhereInput>;
  orderBy?: Maybe<Array<CompanyOrderByInput> | CompanyOrderByInput>;
}>;


export type FindCompaniesQuery = (
  { __typename?: 'Query' }
  & { companies: Array<(
    { __typename?: 'Company' }
    & Pick<Company, 'id' | 'name' | 'identifier' | 'foundationDate' | 'country'>
  )>, aggregateCompany: (
    { __typename?: 'AggregateCompany' }
    & { count?: Maybe<(
      { __typename?: 'CompanyCountAggregate' }
      & { total: CompanyCountAggregate['_all'] }
    )> }
  ) }
);


export const FindCompaniesDocument = gql`
    query FindCompanies($take: Int!, $skip: Int, $cursor: CompanyWhereUniqueInput, $where: CompanyWhereInput, $orderBy: [CompanyOrderByInput!]) {
  companies(
    take: $take
    cursor: $cursor
    skip: $skip
    where: $where
    orderBy: $orderBy
  ) {
    id
    name
    identifier
    foundationDate
    country
  }
  aggregateCompany(where: $where) {
    count: _count {
      total: _all
    }
  }
}
    `;

/**
 * __useFindCompaniesQuery__
 *
 * To run a query within a React component, call `useFindCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCompaniesQuery({
 *   variables: {
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      cursor: // value for 'cursor'
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useFindCompaniesQuery(baseOptions: Apollo.QueryHookOptions<FindCompaniesQuery, FindCompaniesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCompaniesQuery, FindCompaniesQueryVariables>(FindCompaniesDocument, options);
      }
export function useFindCompaniesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCompaniesQuery, FindCompaniesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCompaniesQuery, FindCompaniesQueryVariables>(FindCompaniesDocument, options);
        }
export type FindCompaniesQueryHookResult = ReturnType<typeof useFindCompaniesQuery>;
export type FindCompaniesLazyQueryHookResult = ReturnType<typeof useFindCompaniesLazyQuery>;
export type FindCompaniesQueryResult = Apollo.QueryResult<FindCompaniesQuery, FindCompaniesQueryVariables>;