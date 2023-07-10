import React from "react";

interface ButtonProps {
  href: string;
  title: string;
  classNames?: string;
  px?: string;
  py?: string;
  selector?: boolean;
  isActive?: boolean;
  type?: "link" | "button";
  onClick?:
    | React.MouseEventHandler<HTMLAnchorElement>
    | React.MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonPrimary(props: ButtonProps) {
  const isActive = props.isActive ?? false;
  const selector = props.selector ?? false;
  const type = props.type ?? "link";

  return (
    <>
      {type === "link" ? (
        <a
          href={props.href}
          className={`${props.classNames} ${
            selector
              ? isActive
                ? "gradient-button text-secondary"
                : "bg-transparent border-2 border-[#262626] text-primary"
              : "gradient-button text-secondary"
          } capitalize duration-300 ${props.px ? "px-" + props.px : "px-11"} ${
            props.py ? "py-" + props.py : "py-4"
          } rounded-[50px]`}
          onClick={props.onClick as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {props.title}
        </a>
      ) : (
        <button
          onClick={props.onClick as React.MouseEventHandler<HTMLButtonElement>}
          className={`${props.classNames} ${
            selector
              ? isActive
                ? "gradient-button text-secondary"
                : "bg-transparent border-2 border-[#262626] text-primary"
              : "gradient-button text-secondary"
          } capitalize duration-300 ${props.px ? "px-" + props.px : "px-11"} ${
            props.py ? "py-" + props.py : "py-4"
          } rounded-[50px]`}
        >
          {props.title}
        </button>
      )}
    </>
  );
}
