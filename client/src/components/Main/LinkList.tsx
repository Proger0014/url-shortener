import { Reducer } from "react";
import LinkItem from "./LinkItem";
import { Row } from "react-bootstrap";
import { NotificationToastActionItem } from "./NotificationToast";

export type Url = {
  targetUri: string;
  shortLink: string;
}

export interface State {
  urls: Url[];
}

export interface Action {
  type: "add" | "rem";
  url: Url;
}

export const reducer: Reducer<State, Action> = (state: State, action: Action): State => {
  const newState = { ...state };

  switch(action.type) {
    case "add":
      if (newState.urls.includes(action.url)) {
        break;
      }

      newState.urls.push(action.url);
      break;
    case "rem":
      if (!newState.urls.includes(action.url)) {
        break;
      }

      newState.urls.splice(state.urls.indexOf(
        state.urls.filter(u => u.targetUri == action.url.targetUri)[0]), 1);

      break;
  }

  return newState;
};

export interface LinkListProps {
  state: State;
  notifyHandler: (notifyHandlerProps: NotificationToastActionItem) => void;
  shortDispatcher: (action: Action) => void;
}

export default function LinkList({ state, notifyHandler, shortDispatcher }: LinkListProps) {
  const linkItems = state.urls.map(u => (
    <LinkItem key={u.targetUri} url={u} notifyHandler={notifyHandler} shortDispatcher={shortDispatcher}  />
  ));

  return (
    <Row xs={1} className="justify-content-center">
      {linkItems}
    </Row>
  )
}