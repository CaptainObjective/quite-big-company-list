import { Heading, Text, Stack } from '@chakra-ui/layout';
import format from 'date-fns/format';
import Flag from 'react-flags';

type Props = {
  name: string;
  identifier: string;
  foundationDate: string;
  country: string;
};

const Company = ({ name, identifier, foundationDate, country }: Props) => {
  const date = format(new Date(foundationDate), 'dd-MMM-yyyy');
  return (
    <Stack
      direction={['column', 'row']}
      rounded="md"
      shadow="md"
      display="flex"
      alignItems="center"
      marginBottom="1rem"
      padding="1rem"
      width="100%"
    >
      <Flag name={country} basePath="/img/flags" format="png" pngSize={32} shiny={true} />
      <Heading ml="0.5em" size="md">
        {name}
      </Heading>
      <Text ml="0.5em" as="i">
        ({identifier})
      </Text>
      <Text ml="auto">{date}</Text>
    </Stack>
  );
};

export { Company };
