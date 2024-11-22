import { NextApiRequest, NextApiResponse } from "next"
// import chokidar from "chokidar"
import { EventEmitter } from "events"

const fileChangeEmitter = new EventEmitter()

// Initialize the watcher outside of the request handler
// const watcher = chokidar.watch("'.'", {
//   ignored: /(^|[\/\\])\../, // ignore dotfiles
//   persistent: true
// })

// watcher
//   .on("'add'", path => fileChangeEmitter.emit("'change'", `File ${path} has been added`))
//   .on("'change'", path => fileChangeEmitter.emit("'change'", `File ${path} has been changed`))
//   .on("'unlink'", path => fileChangeEmitter.emit("'change'", `File ${path} has been removed`))

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.writeHead(200, {
    "'Content-Type'": "'text/event-stream'",
    "'Cache-Control'": "'no-cache'",
    "'Connection'": "'keep-alive'"
  })

  const listener = (data: string) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`)
  }

  fileChangeEmitter.on("'change'", listener)

  req.on("'close'", () => {
    fileChangeEmitter.off("'change'", listener)
  })
}

