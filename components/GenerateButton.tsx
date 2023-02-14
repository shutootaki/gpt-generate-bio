export const GenerateButton = ({
  generateBio,
}: {
  generateBio: (e: React.MouseEvent) => Promise<void>;
}) => {
  return (
    <div className="max-w-xl w-full">
      <button
        className="bg-purple-700 rounded-xl text-slate-100 font-medium px-4 py-2 sm:mt-12 mt-8 hover:bg-purple-800 w-full"
        onClick={(e) => generateBio(e)}
      >
        Generate your bio &rarr;
      </button>
    </div>
  );
};
