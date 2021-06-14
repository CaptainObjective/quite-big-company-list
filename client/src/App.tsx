import { Container } from '@chakra-ui/react';
import { useState } from 'react';

import { Companies } from './components/Companies/Companies';
import { Filters } from './components/Filters/Filters';
import { FindCompaniesQueryVariables } from './generated/graphql';

const pageSize = 50;
export type QueryParameters = Pick<FindCompaniesQueryVariables, 'where' | 'orderBy'>;

const App = () => {
  const [queryParameters, setQueryParameters] = useState<FindCompaniesQueryVariables>({ take: pageSize });

  const applyFilters = (filters: QueryParameters) => {
    setQueryParameters(prev => ({ ...prev, ...filters }));
  };

  return (
    <Container display="flex" justifyContent="center" flexDirection="column" maxW="container.lg" mb="1rem">
      <Filters applyFilters={applyFilters} />
      <Companies queryParameters={queryParameters} />
    </Container>
  );
};

export { App };
