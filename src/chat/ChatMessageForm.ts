import { DomNode, el } from "@common-module/app";
import { Button, ButtonType, Input } from "@common-module/app-components";
import SocialCompConfig from "../SocialCompConfig.js";

export default class ChatMessageForm extends DomNode {
  private input: Input;

  constructor(onSend: (message: string) => void) {
    super(".chat-message-form");
    this.append(el(
      "form",
      this.input = new Input({
        placeholder: "Type a message...",
      }),
      el(
        ".actions",
        new Button({
          type: ButtonType.Circle,
          icon: SocialCompConfig.sendButtonIcon.clone(),
        }),
      ),
      {
        onsubmit: (event: Event) => {
          event.preventDefault();
          onSend(this.input.value);
          this.input.value = "";
        },
      },
    ));
  }
}
