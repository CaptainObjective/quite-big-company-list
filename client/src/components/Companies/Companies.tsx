import { Box } from '@chakra-ui/layout';
import { Company } from '../Company/Company';

const Companies = () => {
  return (
    <Box padding="2rem">
      <Company />
      <Company />
      <Company />
    </Box>
  );
};

export { Companies };
