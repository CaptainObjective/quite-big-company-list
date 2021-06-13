import { Box } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { useCompaniesQuery } from '../../generated/graphql';
import { Company } from '../Company/Company';
import InfiniteScroll from 'react-infinite-scroll-component';

const Companies = () => {
  const { data, loading, error } = useCompaniesQuery({ variables: { take: 10 } });

  if (loading) return <Spinner />;
  if (!data || error) {
    console.log(error);
    return null;
  }
  return (
    <Box padding="2rem" width="100%">
      <InfiniteScroll dataLength={10} next={() => {}} hasMore={true} loader="loading...">
        {data.companies.map(company => (
          <Company key={company.id} {...company} />
        ))}
      </InfiniteScroll>
    </Box>
  );
};

export { Companies };
