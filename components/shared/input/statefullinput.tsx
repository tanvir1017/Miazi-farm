import { FiEye, FiEyeOff } from "react-icons/fi";

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
  top?: number;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type PasswordInputLabelPropsType = {
  inputValue: string;
  labelTex?: string | number;
  requiredType?: boolean;
  iconComponent?: React.ReactNode;
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
  iconComponent,
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
        labelTex === "Wrong credential" &&
        "text-[var(--red-primary-brand-color)] italic"
      }`}
    >
      <span
        className={`
        ${
          labelTex === "Wrong credential" &&
          "text-[var(--red-primary-brand-color)] italic"
        }
      ${labelTex === "User login successfully" && "text-green-400 "}
        ${
          requiredType &&
          "after:content-['*'] after:ml-0.5 after:text-[var(--red-primary-brand-color)]"
        }  block text-sm font-HSLight `}
      >
        {labelTex}
      </span>

      <span className="absolute inset-y-0 top-5 left-0 flex items-center pl-2">
        {iconComponent}
      </span>
      <input
        value={inputValue}
        onChange={handleOnChange}
        required
        className="placeholder:italic placeholder:text-slate-400 block dark:bg-[#232229] bg-slate-50  w-full border border-gray-500  rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[var(--red-primary-brand-color)]  focus:ring-[var(--red-primary-brand-color)] focus:ring-1 sm:text-sm"
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
            <FiEyeOff className="text-gray-500" />
          ) : (
            <FiEye className="text-gray-500" />
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
  top = 5,
}: TextInputLabelPropsType) => {
  return (
    <label className={`relative block space-y-2 ${type === "email" && "pb-3"}`}>
      <span
        className={`${
          labelTex === "Wrong credential" &&
          "text-[var(--red-primary-brand-color)] italic"
        }
      ${labelTex === "User login successfully" && "text-green-400 "} ${
          requiredType && " after:content-['*'] after:ml-0.5 after:text-red-500"
        }  block text-sm font-HSLight`}
      >
        {labelTex}
      </span>

      <span
        className={`absolute ${
          type === "email" ? "top-2" : `top-${top}`
        }  left-0 flex items-center pl-2`}
      >
        {iconComponent}
      </span>
      <input
        disabled={disabled}
        value={inputValue}
        onChange={handleOnChange}
        className={`${
          nameText === "Add tags" && "hidden"
        } placeholder:italic placeholder:text-slate-400 block dark:bg-[#232229] bg-slate-50  w-full border border-gray-500  rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none ${
          type !== "email" &&
          "focus:border-[var(--red-primary-brand-color)]  focus:ring-[var(--red-primary-brand-color)]"
        } focus:ring-1 sm:text-sm ${disabled && "cursor-no-drop"}  ${
          type === "email" &&
          " peer focus:border-green-500 focus:ring-green-600 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        }`}
        placeholder={placeholderText}
        type={type}
        title={title}
        name={nameText}
        required={requiredType}
      />
      {type === "email" && (
        <p className="absolute -bottom-[10px] invisible peer-invalid:visible peer-invalid:translate-y-1 duration-300  text-[var(--red-primary-brand-color)] text-sm ">
          একটি বৈধ ইমেইল ঠিকানা প্রদান কর ।
        </p>
      )}
    </label>
  );
};
