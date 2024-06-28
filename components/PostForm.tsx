'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { ImageIcon } from "lucide-react";
import { useRef } from "react";

function PostForm() {
    const ref = useRef<HTMLFormElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);


    const { user } = useUser();
  return (
    <div>
        <form action="" ref={ref} >
            <div className="flex items-center space-x-2"> 
            <Avatar>
           
                <AvatarImage src={user?.imageUrl} />

                <AvatarFallback>{user?.firstName?.charAt(0)}
                    {user?.lastName?.charAt(0)}
                </AvatarFallback>
            </Avatar>

            <input className="flex-1 outline-none rounded-full py-3 px-4 border" ref={fileInputRef}
            type="text" name="postInput" placeholder="Start writing a post" />

            <input type="file" name="image" accept="image/*" hidden />

            <button type="submit" hidden>
                Post
            </button>

            </div>

            <div>
                <Button>
                    <ImageIcon className="mr-2" size={16} color="currentColor" />
                    Add
                </Button>
            </div>
        </form>
    </div>
  )
}

export default PostForm