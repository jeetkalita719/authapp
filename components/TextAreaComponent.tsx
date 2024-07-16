import { useState, ChangeEvent } from "react";
import EnglishtoHinTranslate from "@/components/englishtohindiTranslate";
import { Textarea } from "@/components/ui/textarea";

const TextAreaComponent: React.FC = () => {
  const [textAreaValue, setTextAreaValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
  };

  return (
    <div>
      <Textarea
        placeholder="Enter remarks here"
        className="flex-1"
        name="namePlateRemarks"
        value={textAreaValue}
        onChange={handleChange}
      />
      <EnglishtoHinTranslate Username={textAreaValue as string} />
    </div>
  );
};

export default TextAreaComponent;
