export const COLUMNS = [
  {
    Header: 'Collection',
    accessor: 'collection',
    Cell: ({ value }) => <span style={{ }}>{value}</span>,
  },
  {
    Header: 'Volume',
    accessor: 'volume',
    Cell: ({ value }) => <span style={{  }}>{value}</span>,
  },
  {
    Header: '24h %',
    accessor: 'percentage',
    Cell: ({ value }) => <span style={{ color: '#10C352' }}>{value}</span>,
  },
  {
    Header: 'Floor Price',
    accessor: 'floor-price',
    Cell: ({ value }) => <span style={{}}>{value}</span>,
  },
  {
    Header: 'Owners',
    accessor: 'owner',
    Cell: ({ value }) => <span style={{ }}>{value}</span>,
  },
  {
    Header: 'Items',
    accessor: 'item',
    Cell: ({ value }) => <span style={{ }}>{value}</span>,
  },
]
