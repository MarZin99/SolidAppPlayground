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
    <div class=" border-8 border-cyan-400 w-fit">
      <div>
        {props.label && (
          <label for={props.name}>
            {props.label} {props.required && <span>*</span>}
          </label>
        )}
        <input
          {...inputProps}
          id={props.name}
          value={props.value || ""}
          aria-invalid={!!props.error}
        />
        {props.error && <div id={`${props.name}-error`}>{props.error}</div>}
      </div>
    </div>
  );
}
