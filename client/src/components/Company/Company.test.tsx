import { render, screen } from '@testing-library/react';
import { Company } from './Company';

describe('Company component should', () => {
  it('display company info', () => {
    render(
      <Company
        country="PL"
        foundationDate="2004-12-07T17:49:16.397Z"
        identifier="test identifier"
        name="Test company name"
      />
    );

    expect(screen.getByAltText('PL')).toBeInTheDocument();
    expect(screen.getByText('Test company name')).toBeInTheDocument();
    expect(screen.getByText('(test identifier)')).toBeInTheDocument();
    expect(screen.getByText('07-Dec-2004')).toBeInTheDocument();
  });
});
