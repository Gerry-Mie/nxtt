import React, { ReactNode } from "react";

interface AboutWrapperProps {
  children?: ReactNode;
  type?: string;
}

interface FirstSetComponentProps {
  children?: ReactNode;
}

interface SecondSetComponentProps {
  children?: ReactNode;
}

export function AboutWrapper({ children }: AboutWrapperProps) {
  const firstSet: ReactNode[] = [];
  const secondSet: ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === FirstSetComponent) {
        firstSet.push(child);
      } else if (child.type === SecondSetComponent) {
        secondSet.push(child);
      }
    }
  });

  return (
    <div className={`flex lg:flex-row flex-col p-10 lg:px-20 gap-10`}>
      <>{firstSet}</>
      <>{secondSet}</>
    </div>
  );
}

export function FirstSetComponent({ children }: FirstSetComponentProps) {
  const childCount = React.Children.count(children);
  return (
    <div className="first-set-component w-full items-center lg:w-1/2">
      {children}
    </div>
  );
}

export function SecondSetComponent({ children }: SecondSetComponentProps) {
  const childCount = React.Children.count(children);
  return (
    <div className="second-set-component w-full items-center lg:w-1/2">
      {children}
    </div>
  );
}
