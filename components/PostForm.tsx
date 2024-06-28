import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useUser } from "@clerk/nextjs";

function PostForm() {

    const { user } = useUser();
  return (
    <div>
        <form action="">
            <div>
            <Avatar>
           
                <AvatarImage src={user?.imageUrl} />

                <AvatarFallback>{user?.firstName?.charAt(0)}
                    {user?.lastName?.charAt(0)}
                </AvatarFallback>
            </Avatar>

            <input className="flex-1 outline-none rounded-full py-3 px-4 border"
            type="text" name="postInput" placeholder="Start writing a post" />

            </div>
        </form>
    </div>
  )
}

export default PostForm