import { Box } from '@chakra-ui/layout';
import Flag from 'react-flags';

const Company = () => {
  return (
    <Box marginBottom="1rem" padding="1rem" border="2px solid black">
      <Flag name="US" basePath="/img/flags" format="png" pngSize={32} shiny={true} />
      Name
    </Box>
  );
};

export { Company };
