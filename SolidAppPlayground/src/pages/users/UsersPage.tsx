import { Show, createResource, createSignal } from "solid-js";
import UsersList from "./UsersList";
import { User } from "../../models/user.model";
import UserForm from "./UserForm";
import { useUsers } from "../../hooks/userRESTApiHook";

export default function UsersPage() {
  const { items, add, remove, edit, refetch } = useUsers();

  const [users] = createResource(items);

  const [selectedUser, setSelectedUser] = createSignal<User | undefined>();
  const [addNew, setAddNew] = createSignal<boolean>(false);

  return (
    <Show when={!users.loading} fallback={<p>Loading</p>}>
      <div class="grid grid-cols-2 gap-3 w-full h-full">
        <UsersList
          users={users.latest as User[]}
          onSelect={setSelectedUser}
          onAddNew={setAddNew}
        />
        <Show when={selectedUser() || addNew()}>
          <UserForm
            user={selectedUser()}
            setUser={setSelectedUser}
            onAddNew={setAddNew}
            onAdd={add}
          />
        </Show>
      </div>
    </Show>
  );
}
