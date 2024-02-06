import type { ChangeEvent, CSSProperties } from 'react';

export type InputProps = {
  label: string;
  id?: string;
  type?: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  styles?: CSSProperties;
};

export function Input({
                        label, id, ...rest
                      }: InputProps) {
    return (
        <label htmlFor={id}>
            <div>{label}</div>
            <input {...rest}
                   id={id}
            />
        </label>
    );
}
