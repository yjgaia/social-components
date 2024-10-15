import { DomNode, el } from "@common-module/app";
import AuthorAvatarDisplay from "../author/AuthorAvatarDisplay.js";
import AuthorNameDisplay from "../author/AuthorNameDisplay.js";
import ChatMessage from "./ChatMessage.js";
import ChatMessageContentDisplayGroup from "./ChatMessageContentDisplayGroup.js";
import ChatMessageContentDisplayManager from "./ChatMessageContentDisplayManager.js";
import ChatMessageGroup from "./ChatMessageGroup.js";

export default class ChatMessageListItem extends DomNode {
  private displayGroup: ChatMessageContentDisplayGroup;

  constructor(
    contentDisplayManager: ChatMessageContentDisplayManager,
    private messageGroup: ChatMessageGroup,
  ) {
    super("li.chat-message-list-item");

    this.append(
      el(".avatar", new AuthorAvatarDisplay(messageGroup.author)),
      el(
        "main",
        el(".author", new AuthorNameDisplay(messageGroup.author)),
        this.displayGroup = new ChatMessageContentDisplayGroup(
          contentDisplayManager,
          messageGroup.messages,
        ),
      ),
    );

    this.displayGroup.on("remove", () => this.remove());
  }

  public get authorId() {
    return this.messageGroup.author.id;
  }

  public addMessage(message: ChatMessage) {
    this.displayGroup.addMessage(message);
  }
}
