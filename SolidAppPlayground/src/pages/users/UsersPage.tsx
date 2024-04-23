import { Show, createEffect, createResource, createSignal } from "solid-js";
import UsersList from "./UsersList";
import { User } from "../../models/user.model";
import UserForm from "./UserForm";
import { UserFormType } from "../../form-types/user-form.type";
import { UsersProvider, useUsers } from "../../hooks/userRESTApiHook";

// const fetchUser = async () => {
//   const response = await fetch(`https://localhost:7199/api/user`);
//   return response.json();
// };

// const createUser = async (user: User) => {
//   try {
//     const response = await fetch(`https://localhost:7199/api/user`, {
//       method: "PUT",
//       body: JSON.stringify(user),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const addedUser = await response.json();
//   } catch (error) {
//     console.error(error);
//     return false;
//   }
// };

export default function UsersPage() {
  const { items, add, remove, edit, refetch } = useUsers();

  const [users] = createResource(items);

  const [selectedUser, setSelectedUser] = createSignal<User | undefined>();

  var onUserCreate = function (values: UserFormType) {};

  // createEffect(() => {
  //   console.log(selectedUser());
  // });

  return (
    <Show when={!users.loading} fallback={<p>Loading</p>}>
      <div class="grid grid-cols-2 gap-3 w-full h-full">
        <UsersList users={users.latest as User[]} onSelect={setSelectedUser} />
        <Show when={selectedUser()}>
          <UserForm user={selectedUser()} />
        </Show>
      </div>
    </Show>
  );
}
