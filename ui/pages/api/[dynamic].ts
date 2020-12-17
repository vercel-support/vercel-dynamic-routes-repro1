export default function(req, res) {
  return res.status(200).json(`Next.js dynamic route: ${req.query.dynamic}`)
}