import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import FullEditor from "ckeditor5-build-full";
const RichTextEditor = ({ richtextPlaceholder }) => {
  return (
    <>
      <CKEditor
        style={{
          border: "1px solid rgb(255, 80, 80)",
        }}
        editor={FullEditor}
        config={{
          toolbar: [
            "bold",
            "italic",
            "underline",
            "|",
            "link",
            "undo",
            "redo",
            "|",
            "numberedList",
            "bulletedList",
            "alignment",
          ],
        }}
        data={richtextPlaceholder}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </>
  );
};

export default RichTextEditor;
