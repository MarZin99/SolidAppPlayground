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
    <div class="h-full w-full bg-green-500">
      <Show when={!users.loading} fallback={<p>dupsko</p>}>
        <UsersList users={users.latest as User[]} />
        Users Page taht is rendered out thtere
        <br /> and this is user form
        <UserForm />
      </Show>
    </div>
  );
}
