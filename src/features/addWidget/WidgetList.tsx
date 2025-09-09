import { WidgetType } from "../../types/type";
import CreatureDisplay from "../creatureGenerator/CreatureDisplay";
import { FateQuestionWidget } from "../fate/FateQuestionWidget";
import { ActorWidget } from "../list/ActorWidget";
import { ThreadWidget } from "../list/ThreadWidget";
import { NameWidget } from "../name/nameWidget";
import { NpcInteractionWidget } from "../npcConversation/NpcConversationWidget";
import { NpcGeneratorWidget } from "../npcGenerator/NpcGeneratorWidget";
import { OracleWidget } from "../oracle/OracleWidget";
import { SceneWidget } from "../scene/Scene";

type WidgetComponentProps = {
  widgetId: string;
};

type WidgetDefinition = {
  type: WidgetType;
  name: string;
  description: string;
  component: React.FC<WidgetComponentProps>;
};

export const widgetList: readonly WidgetDefinition[] = [
  {
    type: "oracle",
    name: "Oracle",
    description: "",
    component: OracleWidget,
  },
  {
    type: "fate",
    name: "Destin",
    description: "",
    component: FateQuestionWidget,
  },
  {
    type: "npcInteraction",
    name: "Conversation avec un PNJ",
    description: "",
    component: NpcInteractionWidget,
  },
  {
    type: "actor",
    name: "Liste d'Acteurs",
    description: "",
    component: ActorWidget,
  },
  {
    type: "thread",
    name: "Liste d'Intrigue",
    description: "",
    component: ThreadWidget,
  },
  {
    type: "scene",
    name: "Scene",
    description: "",
    component: SceneWidget,
  },
  {
    type: "name",
    name: "Noms",
    description: "",
    component: NameWidget,
  },
  {
    type: "npcGenerator",
    name: "Generateur de NPC",
    description: "",
    component: NpcGeneratorWidget,
  },
  {
    type: "creatureCard",
    name: "Creature",
    description: "",
    component: CreatureDisplay,
  },
];

export const widgetMap = new Map<WidgetType, WidgetDefinition>(
  widgetList.map((widget) => [widget.type, widget])
);
