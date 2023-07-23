import React, { LegacyRef } from 'react';
import './inputfield.scss'
/**
 * InputField Compoent Props
 */
type InputFieldProps = {
  id?: string;
  name?: string;
  type?: string;
  value?: string;
  className?: string;
  onChange?: any;
  onClick?: any;
  onBlur?: any;
  onFocus?: any;
  onKeyDown?: any;
  onKeyUp?: any;
  placeholder?: string;
  maxLength?:number;
  label?:string
};

export const InputField = React.memo(React.forwardRef(
  ({
    id = '',
    name = '',
    type = 'text',
    value = '',
    className = 'inputfield',
    onChange = () => {},
    onBlur = () => {},
    onFocus = () => {},
    onKeyDown = () => {},
    onKeyUp = () => {},
    placeholder = '',
    label='',
    maxLength= undefined
  }: InputFieldProps, ref:LegacyRef<HTMLInputElement>) => {

    return (
      <>
        <input
          id={id}
          name={name}
          type={type}
          value={ref ? undefined : value}
          className={className}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          placeholder={placeholder}
          ref={ref}
        />
        </>
    );
  },
));
