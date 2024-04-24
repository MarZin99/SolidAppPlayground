import { JSX, splitProps } from "solid-js";
import { TextFieldType } from "../../form-types/text-field.type";

interface TextFieldProps {
  name: string;
  type: TextFieldType;
  label?: string;
  placeholder?: string;
  value: string | undefined;
  error: string;
  required?: boolean;
  ref: (element: HTMLInputElement) => void;
  onInput: JSX.EventHandler<HTMLInputElement, InputEvent>;
  onChange: JSX.EventHandler<HTMLInputElement, Event>;
  onBlur: JSX.EventHandler<HTMLInputElement, FocusEvent>;
}

export default function TextField(props: TextFieldProps) {
  const [, inputProps] = splitProps(props, ["value", "label", "error"]);

  return (
    <div class="w-fit mb-2">
      <div class="flex flex-col">
        {props.label && (
          <label for={props.name} class="text-xs font-bold">
            {props.label} {props.required && <span>*</span>}
          </label>
        )}
        <input
          {...inputProps}
          id={props.name}
          value={props.value || ""}
          aria-invalid={!!props.error}
          class="bg-gray-200 px-2 rounded-md border-2 border-gray-300"
        />
        {props.error && <div id={`${props.name}-error`}>{props.error}</div>}
      </div>
    </div>
  );
}
