import { translate } from "@/app/actions/serverActions";
import { Input } from "./ui/input";
// import Sanscript from "@indic-transliteration/sanscript";

export default async function EnglishtoHinTranslate({
  Username,
}: {
  Username: string;
}) {
  // const data2 = Sanscript.t(Username,'itrans', 'devanagari');

  const data = await translate(Username,"hi","en")
  return <Input value={data.translated} type="text" disabled />;
}
