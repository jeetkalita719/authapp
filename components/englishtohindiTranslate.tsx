import { Input } from "./ui/input";
// import Sanscript from "@indic-transliteration/sanscript";

export default async function EnglishtoHinTranslate({
  Username,
}: {
  Username: string;
}) {
  // const data2 = Sanscript.t(Username,'itrans', 'devanagari');
  async function translate(text:string, target:string, source:string,) {
    var opts = {
      text: text || "",
      source: source || 'auto',
      target: target || "en",
    }
    var result = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${opts.source}&tl=${opts.target}&dt=t&q=${encodeURI(opts.text)}`
    ).then(res => res.json());
    return {
      source: opts.source,
      target: opts.target,
      original: text,
      translated: result[0]?.[0]?.[0],
      result,
    };
  }
  const data = await translate(Username,"hi","en")
  return <Input value={data.translated} type="text" disabled />;
}
