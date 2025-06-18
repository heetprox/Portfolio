import { LanyardResponse } from "react-use-lanyard";
import Home from "@/components/Home";
import api from "../../../lib/api";

export default async function Page() {
  // Attempt to fetch activity data but continue even if it fails
  let activityData = undefined;
  try {
    const activity = await api.get<LanyardResponse | undefined>(
      `https://api.lanyard.rest/v1/users/1118212847613247558`,
      {
        cache: false,
      }
    );
    activityData = activity.data;
  } catch (error) {
    console.error("Error fetching activity data:", error);
  }

  return <Home activity={activityData} />;
}