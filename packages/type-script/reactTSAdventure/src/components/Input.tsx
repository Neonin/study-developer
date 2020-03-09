import React, { useState, useRef } from "react";

export const Input: React.FC = () => {
  const [name, setName] = useState<string>("");
  // !null Read only
  const ref = useRef<HTMLInputElement>(null);

  console.log("ref", ref.current?.value);

  return (
    <input ref={ref} value={name} onChange={e => setName(e.target.value)} />
  );
};
