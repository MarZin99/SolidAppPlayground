import TextField from "../../components/form/TextField";
import { UserFormType } from "../../form-types/user-form.type";
import { createForm, reset, valiForm } from "@modular-forms/solid";
import { UserValidationSchema } from "../../validations/user/user.validation";
import { User } from "../../models/user.model";

export interface UserFormProps {
  user?: User;
  onAdd: (user: User) => void;
  setUser: (user: User | undefined) => void;
  onAddNew: (bool: boolean) => void;
}

export default function UserForm(props: UserFormProps) {
  var emptyValues = {
    name: "",
    nickName: "",
  };

  const [userForm, { Form, Field }] = createForm<UserFormType>({
    validate: valiForm(UserValidationSchema),
    validateOn: "change",
  });

  return (
    <>
      <Form onSubmit={(values) => props.onAdd(values as User)}>
        <Field name="name" type="string">
          {(field, properties) => (
            <TextField
              type="text"
              label="Name"
              value={props.user ? props.user!.name : field.value}
              error={field.error}
              required
              {...properties}
            />
          )}
        </Field>
        <Field name="nickName" type="string">
          {(field, properties) => (
            <TextField
              type="text"
              label="Nickname"
              value={props.user ? props.user!.nickName : field.value}
              error={field.error}
              required
              {...properties}
            />
          )}
        </Field>
        <div class="flex gap-2">
          <button
            type="submit"
            class="bg-green-400 rounded-lg px-2 hover:bg-green-500 w-24"
          >
            Create
          </button>
          <button
            onClick={() => {
              //to refactor 2
              props.setUser(undefined);
              props.onAddNew(true);
              reset(userForm, { initialValues: emptyValues });
            }}
            type="button"
            class="bg-green-400 rounded-lg px-2 hover:bg-green-500 w-24"
          >
            Reset
          </button>
        </div>
      </Form>
    </>
  );
}
