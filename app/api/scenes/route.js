export const GET = async (request) => {
  // Handle GET request for /api/scenes
  // Retrieve users from the database or any data source.

  const scenes = [
    { id: 1, scene: 'Mixxx Marley and Sean Micheals' },
    { id: 2, scene: 'Brooke Johnson and Will Tile' },
    { id: 3, scene: 'Rocky Emerson Chris Cock' },
  ];

  // Send the scenes as a response
  return new Response(JSON.stringify(scenes));
};

// export const GET = async () => {
//   return new Response('Products API...!!!');
// };
