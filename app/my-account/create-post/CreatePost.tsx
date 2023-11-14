import SubmitButton from "@/components/SubmitButton";
import { addDraftPost } from "./actions";

export default function CreatePost() {
  return (
    <form action={addDraftPost} className="w-1/2">
      <label>
        <span>Title:</span>
        <input required type="text" name="title" />
      </label>
      <label>
        <span>Content:</span>
        <textarea required name="content" />
      </label>
      <SubmitButton />
    </form>
  );
}
