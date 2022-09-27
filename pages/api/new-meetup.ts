// POST /api/new-meetup

const handler = (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    const { title, image, address, description } = data;
    // store data in the database
  }
};

export default handler;
