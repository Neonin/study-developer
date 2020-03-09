import React from "react";

// type User = {
//   name: string;
// };

type Props = {
  title: string;
  isActive?: boolean;
  // thing?: number;
  // thing2?: string[];
  status: "loading" | "loaded";
  // thing3: {};
  // thing4: {
  //   name: string;
  // };
  // func: () => void;
  // user: User;
};

export const Head = ({ title, isActive = true }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {isActive && <h3>Active</h3>}
    </div>
  );
};
