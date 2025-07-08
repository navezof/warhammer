import React, { useEffect } from "react";
import { rollOnTable } from "../../utils/rolls";
import { Table } from "../../types/type";
import {
  loadFromLocalStorage,
  storeItemsInLocalStorage,
} from "../../utils/localStorageState";
import { RollOnAnswer } from "../../components/RollOnAnswer";

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
    <table>
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
  );
};

const OracleDisplay = ({ oracle, index = 1, modifier = 0 }: OracleProps) => {
  const [oracleAnswer, setOracleAnswer] = React.useState<string | null>(null);
  const [showDetails] = React.useState<boolean | null>(
    loadFromLocalStorage(ORACLE_SHOW_DETAILS_STORAGE_KEY) || false
  );

  const handleClick = () => {
    setOracleAnswer(rollOnTable(oracle, index, modifier));
  };

  useEffect(() => {
    setOracleAnswer(null);
  }, [oracle]);

  useEffect(
    () =>
      storeItemsInLocalStorage(showDetails, ORACLE_SHOW_DETAILS_STORAGE_KEY),
    [showDetails]
  );

  return (
    <div>
      {" "}
      {showDetails && oracle.description && <p>{oracle.description}</p>}
      <div className="overflow-y-auto max-h-[100px]">
        {showDetails && displayOracleContent(oracle)}
      </div>
      <RollOnAnswer answer={oracleAnswer} handleClick={handleClick} />
    </div>
  );
};

export default OracleDisplay;
