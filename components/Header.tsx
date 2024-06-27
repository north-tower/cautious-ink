import Image from "next/image"

function Header() {
  return (
    <div className="flex">
      <Image className="rounded-lg"
      src="https://links.papareact.com/b3z"
      width={40}
      height={40}
      alt="logo" />
    </div>
  )
}

export default Header