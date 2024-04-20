import { Form, FormType } from "solid-js-form";
import TextField from "../../components/Form/TextField";
import * as yup from "yup";

export default function UserForm() {
  const initialValues = { name: "asdasd", nickname: "asdasd" };
  const validation = yup.object({
    name: yup.string().min(3).max(15).required(),
    nickname: yup.string().min(3).max(15).required(),
  });

  return (
    <div class="bg-green-200 flex flex-col">
      Tutaj jest form
      <Form
        initialValues={initialValues}
        // validation={{
        //   name: yup.string().required(),
        //   nickname: yup.string().required(),
        // }} Doesnt work ik why
        onSubmit={async (form: any) => {
          return console.log(form.values);
        }}
      >
        <TextField label="Name" name="name" />
        <TextField label="Nickname" name="nickname" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
