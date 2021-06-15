import { useState } from 'react';
import { Stack } from '@chakra-ui/layout';
import { Input, Button, Select } from '@chakra-ui/react';

import { QueryParameters } from '../../App';
import { CompanyOrderByInput, SortOrder } from '../../generated/graphql';

type Props = {
  applyFilters: (filters: QueryParameters) => void;
};

const Filters = ({ applyFilters }: Props) => {
  const [countryCode, setCountryCode] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [foundationDate, setFoundationDate] = useState('');
  const [companyName, setCompanyName] = useState('');

  const handleApplyFiltersClick = () => {
    const orderBy: CompanyOrderByInput[] = [];
    if (foundationDate) orderBy.push({ foundationDate: foundationDate as SortOrder });
    if (companyName) orderBy.push({ name: companyName as SortOrder });

    applyFilters({
      orderBy,
      where: { AND: [{ country: { contains: countryCode } }, { identifier: { contains: identifier } }] },
    });
  };

  return (
    <Stack margin="2rem 0" display="flex" justifyContent="space-between" direction={['column', 'row']}>
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
      <Select
        data-testid="foundation-date-select"
        width="auto"
        onChange={e => setFoundationDate(e.target.value as SortOrder)}
      >
        <option value="">Pick...</option>
        <option value={SortOrder.Desc}>Newest to oldest</option>
        <option value={SortOrder.Asc}>Oldest to newest</option>
      </Select>
      <Select
        data-testid="company-name-select"
        width="auto"
        onChange={e => setCompanyName(e.target.value as SortOrder)}
      >
        <option value="">Pick...</option>
        <option value={SortOrder.Asc}>Names A-Z</option>
        <option value={SortOrder.Desc}>Names Z-A</option>
      </Select>
      <Button colorScheme="teal" size="md" width="auto" onClick={handleApplyFiltersClick}>
        Apply Filters
      </Button>
    </Stack>
  );
};

export { Filters };
