import { fireEvent, render, screen } from '@testing-library/react';
import { QueryParameters } from '../../App';
import { SortOrder } from '../../generated/graphql';
import { Filters } from './Filters';

describe('Filters component should', () => {
  let applyFilters: (filters: QueryParameters) => void;
  beforeEach((applyFilters = jest.fn()));

  it('display all inputs', () => {
    render(<Filters applyFilters={applyFilters} />);

    expect(screen.getByPlaceholderText('Country code')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Identifier')).toBeInTheDocument();
    expect(screen.getByTestId('foundation-date-select')).toBeInTheDocument();
    expect(screen.getByTestId('company-name-select')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /apply filters/i })).toBeInTheDocument();
  });

  it('sets filters upon button submit button click', () => {
    render(<Filters applyFilters={applyFilters} />);

    fireEvent.change(screen.getByPlaceholderText('Country code'), { target: { value: 'PL' } });
    fireEvent.change(screen.getByPlaceholderText('Identifier'), { target: { value: 'Test identifier' } });
    fireEvent.change(screen.getByTestId('foundation-date-select'), { target: { value: SortOrder.Asc } });
    fireEvent.change(screen.getByTestId('company-name-select'), { target: { value: SortOrder.Desc } });
    fireEvent.click(screen.getByRole('button', { name: /apply filters/i }));

    expect(applyFilters).toBeCalledWith({
      orderBy: [{ foundationDate: SortOrder.Asc }, { name: SortOrder.Desc }],
      where: { AND: [{ country: { contains: 'PL' } }, { identifier: { contains: 'Test identifier' } }] },
    });
  });
});
