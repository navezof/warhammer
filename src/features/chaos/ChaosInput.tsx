import Button from "../../components/CustomButton";

type ChaosInputProps = {
  chaos: number;
  setChaos: (value: number) => void;
};

const ChaosInput = ({ chaos, setChaos }: ChaosInputProps) => {
  const handleClick = (change: string) => {
    if (change.includes("+")) {
      const number = parseInt(change.replace("+", ""));
      if (!isNaN(number)) {
        if (chaos === 9) return;
        setChaos(chaos + 1);
        console.log(`Chaos increased by 1.`);
        return;
      }
      console.error(`Invalid chaos change: ${change}`);
      return;
    }
    if (change.includes("-")) {
      const number = parseInt(change.replace("-", ""));
      if (!isNaN(number)) {
        if (chaos === 1) return;
        setChaos(chaos - 1);
        console.log(`Chaos increased by 1.`);
        return;
      }
      console.error(`Invalid chaos change: ${change}`);
      return;
    }
    const number = parseInt(change);
    if (!isNaN(number)) {
      setChaos(number);
      console.log(`Chaos changed value.`);
      return;
    }
    console.error(`Invalid chaos change: ${change}`);
    return;
  };

  return (
    <div className="flex gap-4 justify-center items-center">
      <Button
        onClick={() => handleClick("-1")}
        variant="secondary"
        className="font-bold"
      >
        <span>-</span>
      </Button>
      <Button
        onClick={() => handleClick("5")}
        variant="secondary"
        className="font-bold"
      >
        Reset
      </Button>
      <Button
        onClick={() => handleClick("+1")}
        variant="secondary"
        className="font-bold"
      >
        <span>+</span>
      </Button>
    </div>
  );
};

export default ChaosInput;
