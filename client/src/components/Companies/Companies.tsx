import { useEffect } from 'react';
import { Box, Text } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

import { FindCompaniesQueryVariables, useFindCompaniesLazyQuery } from '../../generated/graphql';
import { Company } from '../Company/Company';
import { customScrollBarStyles } from './styles';

type Props = {
  queryParameters: FindCompaniesQueryVariables;
};

const Companies = ({ queryParameters }: Props) => {
  const [findCompanies, { data, loading, error, fetchMore }] = useFindCompaniesLazyQuery({
    variables: queryParameters,
  });

  useEffect(() => {
    findCompanies({ variables: queryParameters });
  }, [queryParameters, findCompanies]);

  if (loading || !fetchMore) return <Spinner data-testid="spinner" margin="0 auto" />;

  if (!data || error) {
    console.log(error);
    return <Text margin="0 auto"> Something went wrong... :( </Text>;
  }

  const next = async () => {
    const paginationParameters = {
      skip: 1,
      cursor: { id: data.companies[data.companies.length - 1].id },
    };

    try {
      await fetchMore({
        variables: { ...queryParameters, ...paginationParameters },
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (data.companies.length === 0) return <span>No items found :(</span>;

  return (
    <Box
      sx={customScrollBarStyles}
      id="companies-list-container"
      width="100%"
      maxHeight="80vh"
      overflowY="auto"
      textAlign="center"
    >
      <InfiniteScroll
        scrollableTarget="companies-list-container"
        dataLength={data.companies.length}
        next={next}
        hasMore={data.companies.length !== data.aggregateCompany.count?.total}
        endMessage={<Text>No more companies to show</Text>}
        loader={<Spinner />}
      >
        {data.companies.map(company => (
          <Company key={company.id} {...company} />
        ))}
      </InfiniteScroll>
    </Box>
  );
};

export { Companies };
