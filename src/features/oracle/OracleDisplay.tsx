import React, { useEffect } from "react";
import { rollOnTable } from "../../utils/rolls";
import { Table } from "../../types/type";
import Button from "../../components/CustomButton";
import Div from "../../components/CustomDiv";
import {
  loadFromLocalStorage,
  storeItemsInLocalStorage,
} from "../../utils/localStorageState";

type OracleProps = {
  oracle: Table;
  index?: number;
  modifier?: number;
};

const ORACLE_SHOW_DETAILS_STORAGE_KEY = "oracleShowDetails";

const displayOracleContent = (oracle: Table) => {
  if (
    !oracle ||
    !Array.isArray(oracle.content) ||
    oracle.content.length === 0
  ) {
    return (
      <div className="text-center text-gray-500 font-italic">
        Aucun contenu à afficher pour cette table.
      </div>
    );
  }
  return (
    <div className="overflow-y-auto max-h-[200px]">
      <table className="w-full">
        <tbody>
          {oracle.content.map((content, index) => (
            <tr key={index}>
              <td className="px-2 py-1 border-b border-r text-sm">
                {content.split(";")[0]}
              </td>
              <td className="px-2 py-1 border-b text-sm">
                {content.split(";")[1]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const OracleDisplay = ({ oracle, index = 1, modifier = 0 }: OracleProps) => {
  const [oracleAnswer, setOracleAnswer] = React.useState<string | null>("-");
  const [showDetails, setShowDetails] = React.useState<boolean | null>(
    loadFromLocalStorage(ORACLE_SHOW_DETAILS_STORAGE_KEY) || false
  );

  const handleClick = () => {
    setOracleAnswer(rollOnTable(oracle, index, modifier));
  };

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  useEffect(() => {
    setOracleAnswer("-");
  }, [oracle]);

  useEffect(
    () =>
      storeItemsInLocalStorage(showDetails, ORACLE_SHOW_DETAILS_STORAGE_KEY),
    [showDetails]
  );

  return (
    <div className="flex flex-col items-center p-1 space-y-2">
      <Button size="sm" onClick={handleShowDetails}>
        {showDetails ? "Hide" : "Show"}
      </Button>
      {showDetails && oracle.description && <p>{oracle.description}</p>}
      {showDetails && displayOracleContent(oracle)}
      <Button onClick={handleClick}>Roll</Button>
      {oracleAnswer && (
        <div className="text-m font-bold text-center border rounded p-2 w-full bg-gray-50">
          {oracleAnswer}
        </div>
      )}
    </div>
  );
};

export default OracleDisplay;
