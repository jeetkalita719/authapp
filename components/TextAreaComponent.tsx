"use client";

import { useState, ChangeEvent } from "react";
import { Textarea } from "@/components/ui/textarea";
import { translate } from "@/app/actions/serverActions";

export default function TextAreaComponent({name,placeholder}:{name:string,placeholder:string}) {
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const [textAreaValueHin, setTextAreaValueHin] = useState<string>("");
  const translateText = async () => {
    const data = await translate(textAreaValue, "hi", "en");
    setTextAreaValueHin(data.translated);
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
    translateText();
  };

  return (
    <div className="w-full flex gap-4">
      <Textarea
        placeholder={placeholder}
        className="flex-1"
        name={name}
        value={textAreaValue}
        onChange={handleChange}
      />
      <Textarea
        className="flex-1"
        value={textAreaValueHin}
        disabled
      />
    </div>
  );
};

