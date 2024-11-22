import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CipherCraft</h3>
            <p className="text-zinc-400">
              Empowering innovation through code and creativity.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-zinc-400 hover:text-white">About</Link></li>
              <li><Link href="#sponsors" className="text-zinc-400 hover:text-white">Sponsors</Link></li>
              <li><Link href="#partners" className="text-zinc-400 hover:text-white">Partners</Link></li>
              <li><Link href="#faq" className="text-zinc-400 hover:text-white">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-zinc-400 hover:text-white">Twitter</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white">Facebook</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white">Instagram</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-zinc-400">
          <p>&copy; 2023 CipherCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

