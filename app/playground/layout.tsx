import React from "react";

type Props = {
  children: React.ReactNode;
};

const PlaygroundLayout = ({ children }: Props) => {
  return (
    <>
      {children}
    </>
  );
};

export default PlaygroundLayout;
