import { useState } from 'react';
import { Box } from '@chakra-ui/layout';
import { Input, Button, Select } from '@chakra-ui/react';

import { QueryParameters } from '../../App';
import { SortOrder } from '../../generated/graphql';

type Props = {
  applyFilters: (filters: QueryParameters) => void;
};

const Filters = ({ applyFilters }: Props) => {
  const [countryCode, setCountryCode] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [foundationDate, setFoundationDate] = useState(SortOrder.Asc);
  const [companyName, setCompanyName] = useState(SortOrder.Asc);

  const handleApplyFiltersClick = () => {
    applyFilters({
      orderBy: [{ foundationDate: foundationDate }, { name: companyName }],
      where: { AND: [{ country: { contains: countryCode } }, { identifier: { contains: identifier } }] },
    });
  };

  return (
    <Box margin="2rem 0" display="flex" justifyContent="space-between">
      <Input
        placeholder="Country code"
        width="auto"
        value={countryCode}
        onChange={e => setCountryCode(e.target.value)}
      ></Input>
      <Input
        placeholder="Identifier"
        width="auto"
        value={identifier}
        onChange={e => setIdentifier(e.target.value)}
      ></Input>
      <Select width="auto" value={foundationDate} onChange={e => setFoundationDate(e.target.value as SortOrder)}>
        <option value={SortOrder.Desc}>Newest to oldest</option>
        <option value={SortOrder.Asc}>Oldest to newest</option>
      </Select>
      <Select width="auto" value={companyName} onChange={e => setCompanyName(e.target.value as SortOrder)}>
        <option value={SortOrder.Asc}>Ascending</option>
        <option value={SortOrder.Desc}>Descending</option>
      </Select>
      <Button colorScheme="teal" size="md" width="auto" onClick={handleApplyFiltersClick}>
        Apply Filters
      </Button>
    </Box>
  );
};

export { Filters };
