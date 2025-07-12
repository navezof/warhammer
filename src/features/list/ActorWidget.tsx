import ItemListDisplay from "../../components/ItemListDisplay";
import ListRoll from "../../components/ListRolls";
import { useListState } from "./UseListState";

type ActorWidgetProps = {
  widgetId: string;
};

export const ActorWidget = ({ widgetId }: ActorWidgetProps) => {
  const [itemList, setItemList] = useListState(widgetId, "actor_list");

  return (
    <div className="flex flex-col justify-center items-center p-2 space-y-2">
      <ItemListDisplay
        title={"Acteur"}
        itemList={itemList}
        setItemList={setItemList}
      />
      <ListRoll itemList={itemList} />
    </div>
  );
};
