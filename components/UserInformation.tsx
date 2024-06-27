import { currentUser } from '@clerk/nextjs/server'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


async function UserInformation() {
    const user = await currentUser()
  return (
    <div>
        <Avatar>
            <AvatarImage src={user?.imageUrl || "https://github.com/shadcn.png"} />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    </div>
  )
}

export default UserInformation