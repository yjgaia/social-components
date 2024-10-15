import { DropdownMenu } from "@common-module/app-components";
import ChatMessageManager from "./ChatMessageManager.js";
export default class ChatMessageMenu extends DropdownMenu {
    constructor(left: number, top: number, options: {
        messageManager: ChatMessageManager;
        author: string;
        messageId: number;
        onEdit: () => void;
    });
    private deleteMessage;
}
//# sourceMappingURL=ChatMessageMenu.d.ts.map