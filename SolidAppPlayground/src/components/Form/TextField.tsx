import { Input } from "postcss";
import { useField } from "solid-js-form";

interface TextFieldProps {
  label: string;
  name: string;
}

export default function TextField({ label, name }: TextFieldProps) {
  const { field, form } = useField(name);
  const formHandler = form.formHandler;

  return (
    <div class=" border-8 border-cyan-400 w-fit">
      <label>
        <span>{label}</span>
        {field.required() ? " *" : ""}
      </label>

      <input
        name={name}
        type="text"
        value={field.value() as any}
        //@ts-ignore
        use:formHandler
      />
      <span>{field.error()}</span>
    </div>
  );
}
