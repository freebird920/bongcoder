"use client";

import { useState } from "react";

export default function Introduce() {
  const [introduceMsg, setIntroduceMsg] = useState<string>("입력하세요!");
  return (
    <div>
      <h2>당신은 누구입니까?</h2>
      <form
        onChange={(event) => {
          const formData = new FormData(event.currentTarget);
          setIntroduceMsg(
            `안녕하세요. ${formData.get("name")}님. ${formData.get(
              "age"
            )}살이시군요.`
          );
        }}
      >
        <div>{introduceMsg}</div>
        <input placeholder="이름" name="name" />
        <input placeholder="나이" name="age" />
      </form>
    </div>
  );
}
