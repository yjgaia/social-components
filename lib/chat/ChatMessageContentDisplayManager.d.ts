import ChatMessageContentDisplay from "./ChatMessageContentDisplay.js";
export default class ChatMessageManager {
    private contentDisplayMap;
    setContentDisplay(messageId: number, contentDisplay: ChatMessageContentDisplay): void;
    editMessage(messageId: number, newContent: string): void;
    deleteMessage(messageId: number): void;
}
//# sourceMappingURL=ChatMessageContentDisplayManager.d.ts.map