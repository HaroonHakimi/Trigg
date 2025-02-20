import { useAutomationPosts } from "@/hooks/use-automation";
import { useQueryAutomationPosts } from "@/hooks/use-queries";
import React from "react";
import TriggerButton from "../trigger-button";
import { InstagramPostProps } from "@/types/posts.type";
import { CheckCircleIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Loader from "../../loader";

type Props = {
  id: string;
};

const PostButton = ({ id }: Props) => {
  const { data } = useQueryAutomationPosts();
  const { posts, onSelectPost, mutate, isPending } = useAutomationPosts(id);
  console.log('Instagram posts response', data)
  return (
    <TriggerButton label="Attach a post">
      {data?.status === 200  && data.data ? (
        <div className="flex flex-col gap-y-3 w-full">
          <div className="flex flex-wrap w-full gap-3">
            {data.data.data.map((post: InstagramPostProps) => (
              <div
                className="relative w-4/12 aspect-square rounded-lg
                                cursor-pointer overflow-hidden"
                key={post.id}
                onClick={() =>
                  onSelectPost({
                    postid: post.id,
                    media: post.media_url,
                    mediaType: post.media_type,
                    caption: post.caption,
                  })
                }
              >
                {posts.find((p) => p.postid === post.id) && (
                  <CheckCircleIcon
                    fill="white"
                    stroke="black"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2
                   -translate-y-1/2 z-50"
                  />
                )}
                <Image
                  fill
                  sizes="(max-width: 768px) 33vw,
                         25vw"
                  src={post.media_url}
                  alt="post image"
                  className={cn(
                    "object-cover hover:opacity-75 transition duration-100",
                    posts.find((p) => p.postid === post.id) && "opacity-75"
                  )}
                />
              </div>
            ))}
          </div>
          <Button
            onClick={mutate}
            disabled={posts.length === 0}
            className="bg-gradient-to-br w-full from-[#ff8c00] 
            font-medium to-[#653801] text-white"
          >
            <Loader state={isPending}>Attatch Post</Loader>
          </Button>
        </div>
      ) : (
        <p className="text-text-secondary text-center">No posts found!</p>
      )}
    </TriggerButton>
  );
};

export default PostButton;
