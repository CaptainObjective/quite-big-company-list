import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { Companies } from './Companies';
import { FindCompaniesDocument } from '../../generated/graphql';

describe('Companies component should', () => {
  it('show spinner when loading component', async () => {
    const mock = {
      request: {
        query: FindCompaniesDocument,
      },
      result: {
        data: {
          companies: [
            {
              id: 101886,
              name: 'Crooks - Stanton',
              identifier: 'OGYOAGS1',
              foundationDate: '2010-06-09T04:07:57.061Z',
              country: 'PL',
            },
          ],
          aggregateCompany: {
            count: {
              total: 1,
            },
          },
        },
      },
    };

    render(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <Companies queryParameters={{ take: 10 }} />
      </MockedProvider>
    );

    // eslint-disable-next-line testing-library/no-wait-for-empty-callback
    await waitFor(() => {});

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
