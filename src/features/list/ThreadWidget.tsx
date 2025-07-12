import ItemListDisplay from "../../components/ItemListDisplay";
import ListRoll from "../../components/ListRolls";
import { useListState } from "./UseListState";

type ThreadWidgetProps = {
  widgetId: string;
};

export const ThreadWidget = ({ widgetId }: ThreadWidgetProps) => {
  const [itemList, setItemList] = useListState(widgetId, "thread_list", [
    { id: 1, value: "Intrige 1" },
    { id: 2, value: "Intrige 2" },
  ]);

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
