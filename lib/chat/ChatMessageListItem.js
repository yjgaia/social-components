import { DomNode, el } from "@common-module/app";
import UserAvatarDisplay from "../user/UserAvatarDisplay.js";
import UserNameDisplay from "../user/UserNameDisplay.js";
import ChatMessageContentDisplayGroup from "./ChatMessageContentDisplayGroup.js";
export default class ChatMessageListItem extends DomNode {
    messageGroup;
    displayGroup;
    constructor(messageManager, messageGroup) {
        super("li.chat-message-list-item");
        this.messageGroup = messageGroup;
        this.append(el(".avatar", new UserAvatarDisplay(messageGroup.author)), el("main", el(".author", new UserNameDisplay(messageGroup.author)), this.displayGroup = new ChatMessageContentDisplayGroup(messageManager, messageGroup)));
        this.displayGroup.on("remove", () => this.remove());
    }
    get authorId() {
        return this.messageGroup.author.id;
    }
    addMessage(message) {
        this.displayGroup.addMessage(message);
    }
}
//# sourceMappingURL=ChatMessageListItem.js.map