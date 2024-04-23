import { A } from "@solidjs/router";
import { AiFillFire } from "solid-icons/ai";

export default function SideBar() {
  return (
    <div
      class="h-full w-32 rounded-xl"
      style={{ "background-color": "var(--primary-light-color)" }}
    >
      <div class="flex items-center">
        <AiFillFire size="30px" color="red" />
        <div class="text-2xl">FireApp</div>
      </div>
      <nav class="flex flex-col pt-3">
        <A href="/" class="hover:bg-gray-200 px-2">
          Home
        </A>
        <A href="/users" class="hover:bg-gray-200 px-2">
          Users
        </A>
      </nav>
    </div>
  );
}
