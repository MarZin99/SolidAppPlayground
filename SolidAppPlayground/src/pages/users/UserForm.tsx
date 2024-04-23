import TextField from "../../components/form/TextField";
import { UserFormType } from "../../form-types/user-form.type";
import { createForm, valiForm } from "@modular-forms/solid";
import { UserValidationSchema } from "../../validations/user/user.validation";

export default function UserForm() {
  const [userForm, { Form, Field }] = createForm<UserFormType>({
    validate: valiForm(UserValidationSchema),
    validateOn: "change",
  });

  var dupa = function () {
    console.log(userForm);
  };

  return (
    <>
      <Form onSubmit={dupa}>
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
