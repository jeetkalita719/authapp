import {
  IndicTransliterate,
  getTransliterateSuggestions,
} from "@ai4bharat/indic-transliterate";
import { Input } from "./ui/input";

export default async function EnglishtoHinTranslate({
  Username,
}: {
  Username: string;
}) {
  const data = await getTransliterateSuggestions(Username, "/", {
    numOptions: 5,
    showCurrentWordAsLastSuggestion: true,
    lang: "hi",
  });

  console.log(data);
  return <Input value={(data as string[])[0]} type="text" disabled />;
}
