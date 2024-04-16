import Image from "next/image";
import RoomList from "@/components/RoomLists/RoomList";
import { getData } from "./api";

export default async function Home() {
  const data = await getData();


  if (!data) {
    return <div>Error fetching data</div>;
  }


  return (
    <div>
      <RoomList data={data} />
    </div>
  );
}
