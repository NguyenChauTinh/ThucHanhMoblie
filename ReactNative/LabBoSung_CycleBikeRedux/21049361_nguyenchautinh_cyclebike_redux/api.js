export const fetchBikesAPI = async () => {
  const response = await fetch('https://6703a503ab8a8f89273101ce.mockapi.io/bike');
  if (!response.ok) {
    throw new Error('Failed to fetch bikes');
  }
  return response.json();
};

export const addBikeAPI = async (bikeData) => {
  const response = await fetch('https://6703a503ab8a8f89273101ce.mockapi.io/bike', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bikeData),
  });
  if (!response.ok) {
    throw new Error('Failed to add bike');
  }
  return response.json();
};