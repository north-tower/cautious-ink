import { SearchIcon } from "lucide-react"
import Image from "next/image"

function Header() {
  return (
    <div className="flex">
      <Image className="rounded-lg"
      src="https://links.papareact.com/b3z"
      width={40}
      height={40}
      alt="logo" />

      <div>
        <form>
          <SearchIcon className="h-4 text-gray-600" />
        </form>
      </div>
    </div>
  )
}

export default Header