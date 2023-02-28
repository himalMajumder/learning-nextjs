// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log('Check');
  res.status(200).json({ name: 'Himal Majumder' })
}
