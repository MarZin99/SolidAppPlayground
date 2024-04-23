import TextField from "../../components/form/TextField";
import { UserFormType } from "../../form-types/user-form.type";
import { createForm, valiForm } from "@modular-forms/solid";
import { UserValidationSchema } from "../../validations/user/user.validation";
import { User } from "../../models/user.model";
import { createEffect } from "solid-js";

export interface UserFormProps {
  user?: User;
  onAdd: (user: User) => void;
}

export default function UserForm(props: UserFormProps) {
  const [userForm, { Form, Field }] = createForm<UserFormType>({
    validate: valiForm(UserValidationSchema),
    validateOn: "change",
    initialValues: {
      name: props.user?.name,
      nickName: props.user?.nickName,
    },
  });

  var onCreate = function (values: UserFormType) {
    var newUser: User = {
      name: values.name,
      nickName: values.nickName,
      id: 0,
      email: "dupa@wp.pl",
      createDate: new Date(),
    };

    props.onAdd(newUser);
  };

  createEffect(() => {
    console.log(props.user);
  });
  return (
    <>
      <Form onSubmit={(values) => onCreate(values)}>
        <Field name="name" type="string">
          {(field, props) => (
            <TextField
              type="text"
              label="Name"
              value={field.value}
              error={field.error}
              required
              {...props}
            />
          )}
        </Field>
        <Field name="nickName" type="string">
          {(field, props) => (
            <TextField
              {...props}
              type="text"
              label="Nickname"
              value={field.value}
              error={field.error}
              required
            />
          )}
        </Field>
        <button type="submit">Create</button>
      </Form>
    </>
  );
}
