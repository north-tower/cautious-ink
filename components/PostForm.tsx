'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { ImageIcon, XIcon } from "lucide-react";
import { useRef, useState } from "react";

function PostForm() {
    const ref = useRef<HTMLFormElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const { user } = useUser();

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    }
  return (
    <div className="mb-2">
        <form action="" ref={ref} className="p-3 bg-white rounded-lg
        border" >
            <div className="flex items-center space-x-2"> 
            <Avatar>
           
                <AvatarImage src={user?.imageUrl} />

                <AvatarFallback>{user?.firstName?.charAt(0)}
                    {user?.lastName?.charAt(0)}
                </AvatarFallback>
            </Avatar>

            <input className="flex-1 outline-none rounded-full py-3 px-4 border" ref={fileInputRef}
            type="text" name="postInput" placeholder="Start writing a post" />

            <input type="file" name="image" accept="image/*" hidden
            onChange={handleImageChange} ref={fileInputRef}
            
            />

            <button type="submit" hidden>
                Post
            </button>

            </div>

            {preview && (
                <div className="mt-3">
                    <img src={preview} className="w-full object-cover"  />
                </div>
            )}

            <div className="flex justify-end mt-2 space-x-2">
                <Button type="button" onClick={() => fileInputRef.current?.click()}>
                    <ImageIcon className="mr-2" size={16} color="currentColor" />
                    {preview ? "Change" : "Add"} image
                </Button>

                {preview && (
                    <Button variant="outline">
                        <XIcon className="mr-2" size={16} color="currentColor" />
                        Remove image
                    </Button>
                )}
            </div>
        </form>
    </div>
  )
}

export default PostForm