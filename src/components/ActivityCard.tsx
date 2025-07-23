"use client";
import { LanyardResponse, useLanyard } from "react-use-lanyard";
import { motion, Variants } from "framer-motion";
import { itemVariants } from "@/lib/utils";
import OptimizedImage from "./Image";

const getActivityImageUrl = (activity: any) => {
  if (!activity?.assets?.large_image) {
    return "https://i.pinimg.com/736x/c0/0f/07/c00f07cdae11db49e00f55b011ccc4f3.jpg";
  }

  const largeImage = activity.assets.large_image;

  if (largeImage.startsWith("spotify:")) {
    const spotifyId = largeImage.replace("spotify:", "");
    return `https://i.scdn.co/image/${spotifyId}`;
  }

  if (largeImage.startsWith("mp:external")) {
    if (largeImage.includes("%3Furl%3Dhttps")) {
      const match = largeImage.match(/%3Furl%3D(https%3A[^&]*)/);
      if (match) {
        return decodeURIComponent(match[1]);
      }
    }
    
    const httpsIndex = largeImage.indexOf("/https/");
    if (httpsIndex !== -1) {
      return `https://${largeImage.substring(httpsIndex + 7)}`;
    }
  }

  if (activity.application_id && largeImage) {
    return `https://cdn.discordapp.com/app-assets/${activity.application_id}/${largeImage}.png`;
  }

  return "https://i.pinimg.com/736x/c0/0f/07/c00f07cdae11db49e00f55b011ccc4f3.jpg";
};

export default function ActivityCard({
  userId,
  initialData,
}: {
  userId: string;
  initialData: LanyardResponse | undefined;
}) {
  const { data } = useLanyard({
    userId,
  });

  const activities = data?.data?.activities || initialData?.data.activities;
  if (!activities) {
    return (
      <p className="font-mono opacity-80 leading-tight tracking-tight">
        Loading activity <span className="dot dot-1">.</span>
        <span className="dot dot-2">.</span>
        <span className="dot dot-3">.</span>
      </p>
    );
  }

  return (
    <div className="flex flex-col "
      style={{
        gap: "clamp(0.5rem, 1vw, 240rem)",
      }}>
      {activities?.map((activity, index) => (
        <motion.div
          variants={itemVariants as Variants}
          key={`${activity.id}-${index}`}
          className="w-full max-w-2xl mx-auto"
          style={{
            fontSize: "clamp(0.8rem, 0.85vw, 240rem)",
          }}
        >
          <div className="rounded-lg flex py-2 pl-2 -mx-1 bg-neutral-800/40 items-center gap-2">
            <div
              style={{
                width: "clamp(4.5rem, 4vw, 240rem)",
                height: "clamp(4.5rem, 4vw, 240rem)",
              }}
              className="w-auto aspect-square rounded-[0.25rem] overflow-hidden">
              <OptimizedImage
                height={5000}
                width={5000}
                alt={activity.name}
                className="h-full w-full rounded-[0.25rem] object-cover"
                src={getActivityImageUrl(activity)}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://i.pinimg.com/736x/c0/0f/07/c00f07cdae11db49e00f55b011ccc4f3.jpg";
                }}
              />
            </div>
            <div className="flex flex-col justify-between">
              
              <h2 className="">{activity.name === "Spotify" && "Listening to "}
              {activity.name === "Code" && "Doing "}
                 {activity.name}</h2>
              <div className="flex flex-col"
                style={{
                  fontSize: "clamp(0.8rem, 0.5vw, 240rem)",
                }}
              >
                <p className="text-neutral-100/90 font-medium max-w-[250px] md:max-w-md truncate">
                  {activity.details}
                </p>
                <p className="text-neutral-100/70 font-medium">
                  {activity.state}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}