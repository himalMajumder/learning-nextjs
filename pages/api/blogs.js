// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'node:fs';

export default async function handler(req, res) {
  // fetch('https://api.agify.io?name=meelad')
  // .then((data) => data.json())
  // .then((data) => console.log(data));

  
  let data = await fs.promises.readdir('./blogData');
  let allCount = data.length;

  data = data.slice(0, parseInt(req.query.count));
 

  let allBlogs = [];
  let myFile ;
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myFile = await fs.promises.readFile((`./blogData/${item}`),'utf-8');
    allBlogs.push(JSON.parse(myFile));
  }
  // res.status(200).json(allBlogs); 
  res.status(200).json({
    allBlogs,
    allCount
  }); 

}
