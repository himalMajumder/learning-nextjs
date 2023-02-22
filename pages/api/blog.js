// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'node:fs';

export default function handler(req, res) {
  fs.readFile('./blogData/how-to-learn-flask.json', (err, data) => {
    if (err) throw err;
    console.log(data);
  });

  res.status(200).json({ name: 'This is home page' })
}
