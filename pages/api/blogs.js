// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'node:fs';

export default function handler(req, res) {
  fs.readdir('./blogData', 'utf-8', (err, data) => {
    if (err){
      res.status(500).json({ error : "Internal Server error" });
    }
    else{
      console.log(data);
      res.status(200).json(data);
    }
  });

  // res.status(200).json({ name: 'This is home page' })
}
