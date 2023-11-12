import { fetchCreateNote } from "../api/service/editor";

export default async function UpdateNote(editorId: string, title: any, content: string) {
  if (Array.isArray(title) && title[0] && title[0].text) {
    const data = await fetchCreateNote(editorId, title[0].text, content);
  }
  return content;
}
