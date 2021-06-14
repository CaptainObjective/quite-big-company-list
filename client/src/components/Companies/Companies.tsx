import { Box } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { useFindCompaniesQuery } from '../../generated/graphql';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Company } from '../Company/Company';

const pageSize = 50;

const Companies = () => {
  const { data, loading, error, fetchMore } = useFindCompaniesQuery({ variables: { take: pageSize } });

  if (loading) return <Spinner />;
  if (!data || error) {
    console.log(error);
    return null;
  }

  const next = async () => {
    try {
      await fetchMore({
        variables: { take: pageSize, skip: 1, cursor: { id: data.companies[data.companies.length - 1].id } },
      });
    } catch (error) {}
  };

  return (
    <Box
      sx={{
        '&::-webkit-scrollbar': {
          width: '16px',
          borderRadius: '8px',
          backgroundColor: `gray.100`,
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: `teal.200`,
        },
      }}
      id="companies-list-container"
      padding="2rem"
      width="100%"
      maxHeight="80vh"
      overflowY="auto"
    >
      <InfiniteScroll
        scrollableTarget="companies-list-container"
        dataLength={data.companies.length}
        next={next}
        hasMore={true}
        loader="loading..."
      >
        {data.companies.map(company => (
          <Company key={company.id} {...company} />
        ))}
      </InfiniteScroll>
    </Box>
  );
};

export { Companies };
