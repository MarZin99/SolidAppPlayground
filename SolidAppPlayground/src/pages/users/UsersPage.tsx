import { Show, createResource, createSignal } from "solid-js";
import UsersList from "./UsersList";
import { User } from "../../models/user.model";
import UserForm from "./UserForm";

const fetchUser = async () => {
  const response = await fetch(`https://localhost:7199/api/user`);
  return response.json();
};

export default function UsersPage() {
  const [users] = createResource(fetchUser);

  return (
    <>
      <Show when={!users.loading} fallback={<p>Loading</p>}>
        <div class="grid grid-cols-2 gap-3 w-full h-full">
          <UsersList users={users.latest as User[]} />
          <UserForm />
        </div>
      </Show>
    </>
  );
}
