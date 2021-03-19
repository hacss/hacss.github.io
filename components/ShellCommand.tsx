import { FC } from "react";
import copy from "clipboard-copy";

const ShellCommand: FC<{ children: string | string[] }> = ({ children }) => {
  return (
    <div className={`
      display:inline-flex;
      align-items:center;
      border-width:1px;
      border-style:solid;
      border-color:$gray10;
      border-radius:$sm;
      background:$gray05;
      color:$gray95;
      font:$code;
    `}>
      <div className="padding:$len8;">
        {children}
      </div>
      <button
        className={`
          appearance:none;
          border:0;
          margin:0;
          padding:$len8
          background:transparent;
          color:$gray40;
          :hover{color:$blue40}
          :active{color:$red30}!
          cursor:pointer;
        `}
        onClick={() => { copy(children instanceof Array ? children.join("") : children); }}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M14 12V2H4V0h12v12h-2zM0 4h12v12H0V4zm2 2v8h8V6H2z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default ShellCommand;
