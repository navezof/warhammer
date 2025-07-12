import ItemListDisplay from "../../components/ItemListDisplay";
import ListRoll from "../../components/ListRolls";
import { useThreadState } from "./UseThreadState";

type ThreadWidgetProps = {
  widgetId: string;
};

export const ThreadWidget = ({ widgetId }: ThreadWidgetProps) => {
  const [itemList, setItemList] = useThreadState(widgetId);

  return (
    <div className="flex flex-col justify-center items-center p-2 space-y-2">
      <ItemListDisplay
        title={"Intrigue"}
        itemList={itemList}
        setItemList={setItemList}
      />
      <ListRoll itemList={itemList} />
    </div>
  );
};
