export default [
  {
    id: 'c1',
    parent_id: null,
    type: 'customer',
    first_name: null,
    last_name: null,
    name: 'Suncor Energy',
    external_id: 'se1',
    role: null
  },
  {
    id: 'c2',
    parent_id: 'c1',
    type: 'branch',
    first_name: null,
    last_name: null,
    name: 'Longview Drilling Site',
    external_id: 'se1-lds1',
    role: null
  },
  {
    id: 'c3',
    parent_id: 'c2',
    type: 'contact',
    first_name: 'James',
    last_name: 'Brown',
    name: 'James Brown',
    external_id: 'se1-lds1-jb1',
    role: null
  },
  {
    id: 'c4',
    parent_id: null,
    type: 'manufacturer',
    first_name: null,
    last_name: null,
    name: 'Fluke Corporation',
    external_id: 'fc1',
    role: null
  },
  {
    id: 'c5',
    parent_id: null,
    type: 'vendor',
    first_name: null,
    last_name: null,
    name: 'Amazon Supply LLC',
    external_id: 'asllc1',
    role: null
  }
]
