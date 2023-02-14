import { Dispatch, SetStateAction } from "react";
import { BsPencil } from "react-icons/bs";

type Props = {
  setBio: Dispatch<SetStateAction<string>>;
};

export const InputPanel = ({ setBio }: Props) => {
  return (
    <>
      <div className="max-w-xl w-full">
        <div className="flex mt-20 items-center space-x-3 flex-col sm:flex-row sm:justify-center">
          <BsPencil size={32} className="mb-5 hidden sm:block sm:mb-0" />
          <p className="mx-2 font-medium">Copy your Bio</p>
          <span className="text-slate-300">
            (or write a few sentences about yourself)
          </span>
        </div>
        <textarea
          name="input-area"
          id="input-area"
          className="w-full rounded-md bg-stone-800 border-gray-300 shadow-sm focus:border-black focus:ring-black my-3 p-2"
          rows={4}
          placeholder={
            "e.g. Senior Developer Advocate @vercel. Tweeting about web development, AI, and React / Next.js. Writing nutlope.substack.com."
          }
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
      </div>
    </>
  );
};
