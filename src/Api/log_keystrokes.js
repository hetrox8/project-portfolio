// api/log_keystrokes.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Get log data from the request body
    const { log } = req.body;

    // Process the log data (you can store it, log it, etc.)
    console.log('Received log:', log);

    // Respond with a success message
    res.status(200).json({ message: 'Log received successfully' });
  } else {
    // Respond with an error for unsupported HTTP methods
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
