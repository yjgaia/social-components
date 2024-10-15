import { DomNode } from "@common-module/app";
import Author from "../author/Author.js";
import ChatMessage from "./ChatMessage.js";
import ChatMessageGroup from "./ChatMessageGroup.js";
import ChatMessageListItem from "./ChatMessageListItem.js";
import { MessageActions } from "./ChatMessageManager.js";
export default class ChatMessageList extends DomNode {
    private messageManager;
    children: ChatMessageListItem[];
    constructor(messageGroups: ChatMessageGroup[], actions: MessageActions);
    addMessage(author: Author, message: ChatMessage): void;
    editMessage(messageId: number, newContent: string): void;
    deleteMessage(messageId: number): void;
}
//# sourceMappingURL=ChatMessageList.d.ts.map