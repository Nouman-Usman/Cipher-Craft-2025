import { NextApiRequest, NextApiResponse } from "'next'"

const fileChanges = [
  "File index.js has been modified",
  "New file styles.css has been added",
  "File utils.js has been deleted",
  "File components/Header.js has been modified",
  "New file api/users.js has been added"
]

let currentIndex = 0

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const change = fileChanges[currentIndex]
  currentIndex = (currentIndex + 1) % fileChanges.length

  res.status(200).json({ change })
}

