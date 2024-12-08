import { DomNode } from "@common-module/app";
import ChatContentListItem from "./ChatContentListItem.js";
export default class ChatContentList extends DomNode {
    children = [];
    constructor(firstMessage) {
        super("ul.chat-content-list");
        this.addMessage(firstMessage);
    }
    addMessage(message) {
        this.append(new ChatContentListItem(message));
    }
    updateMessage(message) {
        const item = this.children.find((item) => item.getMessageId() === message.id);
        item?.updateMessage(message);
    }
    removeMessage(messageId) {
        const item = this.children.find((item) => item.getMessageId() === messageId);
        item?.remove();
    }
    addChunk(messageId, chunk) {
        const item = this.children.find((item) => item.getMessageId() === messageId);
        item?.addChunk(chunk);
    }
}
//# sourceMappingURL=ChatContentList.js.map