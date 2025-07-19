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
    tenant: {
      names: ['John Doe', 'Jane Doe'],
      occupants: ['John Jr.', 'Grandma Doe'],
      ages: [35, 34, 5, 82],
      contact: {
        phone: '555-123-4567',
        email: 'john@example.com',
      },
      emergencyContact: 'Mary Smith - 555-321-7654',
      pets: [
        { name: 'Rex', type: 'Dog', license: 'CO-2023-3344', size: 'Medium' },
      ],
      leaseFile: 'lease_123.pdf',
      rent: 2000,
      securityDeposit: 2000,
      petDeposit: 500,
    }
  },
  {
    id: 2,
    address: '456 Oak Ave',
    city: 'Boulder',
    state: 'CO',
    bedrooms: 2,
    bathrooms: 1.5,
    squareFeet: 1200,
    leaseVisibleToManager: true,
  },
];
export default properties;
