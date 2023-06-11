import { EyeOff, Lock, View } from "lucide-react";

type TextInputLabelPropsType = {
  disabled: boolean;
  inputValue: string | number;
  labelTex?: string | number;
  requiredType: boolean;
  iconComponent: React.ReactNode;
  placeholderText: string;
  type: string;
  title: string;
  nameText: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type PasswordInputLabelPropsType = {
  inputValue: string;
  labelTex?: string | number;
  requiredType?: boolean;
  placeholderText?: string;
  title?: string;
  nameText?: string;
  seePassword?: boolean;
  onClickFunc?: () => void;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const StateFullPasswordInputLabel = ({
  inputValue,
  labelTex,
  requiredType,
  placeholderText,
  title,
  nameText,
  seePassword,
  onClickFunc,
  handleOnChange,
}: PasswordInputLabelPropsType) => {
  return (
    <label
      className={`relative block space-y-2 ${
        labelTex === "Wrong credential" && "text-text-brand italic"
      }`}
    >
      <span
        className={`s
        ${
          requiredType &&
          "after:content-['*'] after:ml-0.5 after:text-text-brand"
        }  block text-sm font-HSLight `}
      >
        {labelTex}
      </span>

      <span className="absolute inset-y-0 top-4 left-0 flex items-center pl-2">
        <Lock strokeWidth={0.5} className="w-5 h-5" />
      </span>
      <input
        value={inputValue}
        onChange={handleOnChange}
        required
        className="placeholder:italic placeholder:text-slate-400 block  bg-slate-50 w-full border-b-2 border-b-brand py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-text-brand sm:text-sm"
        placeholder={placeholderText}
        type={seePassword ? "text" : "password"}
        name={nameText}
        title={title}
      />
      {title !== "re-type your password" && (
        <button
          type="button"
          title="hide & show password"
          className="absolute inset-y-0 top-5 right-2 flex items-center pl-2 cursor-pointer"
          onClick={onClickFunc}
        >
          {seePassword ? (
            <EyeOff strokeWidth={0.5} className="text-gray-500" />
          ) : (
            <View strokeWidth={0.5} className="text-gray-500" />
          )}
        </button>
      )}
    </label>
  );
};

export const StateFullTextInputLabel = ({
  disabled,
  labelTex,
  inputValue,
  requiredType,
  iconComponent,
  handleOnChange,
  placeholderText,
  type,
  title,
  nameText,
}: TextInputLabelPropsType) => {
  return (
    <label className={`relative block space-y-2 ${type === "email" && "pb-2"}`}>
      <span
        className={`${
          labelTex === "Wrong credential" && "text-text-brand italic"
        }
      ${labelTex === "User login successfully" && "text-green-400 "} ${
          requiredType && " after:content-['*'] after:ml-0.5 after:text-red-500"
        }  block text-sm font-HSLight`}
      >
        {labelTex}
      </span>

      <span
        className={`absolute inset-y-0 pt-[0.6rem] left-0 flex items-center pl-2`}
      >
        {iconComponent}
      </span>
      <input
        disabled={disabled}
        value={inputValue}
        onChange={handleOnChange}
        className={`placeholder:italic placeholder:text-slate-400 block bg-slate-50 w-full border-b-2  py-3 pl-9 pr-3 shadow-sm focus:outline-none  ${
          type !== "email" && "focus:border-b-text-brand"
        } sm:text-sm ${disabled && "cursor-no-drop"}  ${
          type === "email" &&
          "peer focus:border-b-green-500  disabled:bg-secondary disabled:text-slate-500 disabled:border-b-slate-200 disabled:shadow-none invalid:border-b-brand invalid:text-brand focus:invalid:border-b-brand"
        }`}
        placeholder={placeholderText}
        type={type}
        title={title}
        name={nameText}
        required={requiredType}
      />
      {type === "email" && (
        <p className="absolute -bottom-[10px] invisible peer-invalid:visible peer-invalid:translate-y-1 duration-300 text-brand text-sm ">
          Enter your valid email to login
        </p>
      )}
    </label>
  );
};
