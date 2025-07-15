type ChaosDisplayProps = {
  chaos: number;
};

const ChaosDisplay = ({ chaos }: ChaosDisplayProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-1 space-y-1">
      {chaos && (
        <>
          <p className="text-3xl font-bold mb-1">{chaos}</p>
          <p className="text-xs font-semibold tracking-wide uppercase text-gray-500">
            chaos
          </p>
        </>
      )}
    </div>
  );
};

export default ChaosDisplay;
