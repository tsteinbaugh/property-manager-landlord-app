const properties = [
  {
    id: 1,
    address: '123 Main St',
    city: 'Denver',
    state: 'CO',
    zip: '80202',
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1500,
    leaseVisibleToManager: true,
    tenants:
    [
      {
        name: 'John Doe',
        contact:
        {
          phone: '555-123-4567',
          email: 'john@example.com',
        },
        age: 35,
        occupation: 'welder',
      },
      {
        name: 'Jane Doe',
        contact:
        {
          phone: '555-123-4568',
          email: 'jane@example.com',
        },
        age: 34,
        occupation: 'teacher',
      },
    ],
    occupants:
    [
      {
        name: 'John Jr. Doe',
        age: 4,
      },
      {
        name: 'Grandma Doe',
        age: 82,
      },
    ],
    emergencyContacts:
    [
      {
        name: 'Mary Smith',
        contact:
        {
          phone: '555-666-7777',
          email: 'mary@smith.com',
        },
      },
    ],
    pets:
    [
      {
        name: 'Rex',
        type: 'Dog',
        license: 'CO-2023-3344',
        size: 'Medium',
      },
    ],
    leaseFile: 'lease_123.pdf',
    financials:
    [
      {
        rent: 2000,
        securityDeposit: 2000,
        petDeposit: 500
      },
    ],
  },

  {
    id: 2,
    address: '456 Oak Ave.',
    city: 'Longmont',
    state: 'CO',
    zip: '80530',
    bedrooms: 4,
    bathrooms: 5,
    squareFeet: 2500,
    leaseVisibleToManager: true,
    tenants:
    [
      {
        name: 'Harry Doe',
        contact:
        {
          phone: '555-456-4567',
          email: 'harry@example.com',
        },
        age: 45,
        occupation: 'engineer',
      }
    ],
    leaseFile: 'lease_456.pdf',
    financials:
    [
      {
        rent: 4000,
        securityDeposit: 4000,
        petDeposit: 800
      }
    ]
  }
];

export default properties;
