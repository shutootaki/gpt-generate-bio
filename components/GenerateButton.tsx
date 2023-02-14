import { Loading } from "./Loading";

type Props = {
  loading: boolean;
  generateBio: (e: React.MouseEvent) => Promise<void>;
};
export const GenerateButton = ({ generateBio, loading }: Props) => {
  return (
    <div className="max-w-xl w-full">
      {!loading && (
        <button
          className="bg-purple-700 rounded-xl text-slate-100 font-medium px-4 py-2 sm:mt-12 mt-8 hover:bg-purple-800 w-full"
          onClick={(e) => generateBio(e)}
        >
          Generate your bio &rarr;
        </button>
      )}
      {loading && (
        <button
          className="bg-purple-700 rounded-xl text-slate-100 font-medium px-4 py-2 sm:mt-12 mt-8 hover:bg-purple-800 w-full"
          onClick={(e) => generateBio(e)}
        >
          <Loading />
        </button>
      )}
    </div>
  );
};
