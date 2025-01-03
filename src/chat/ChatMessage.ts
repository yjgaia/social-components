interface Rich {
}

interface Reaction {
  emoji: string;
  count: number;
  recentUsers: string[];
  hasReacted?: boolean;
}

export default interface ChatMessage {
  id: string;
  sender: string;
  replyTo?: number;

  content?: string;
  rich?: Rich;
  reactions?: Reaction[];

  isEdited?: boolean;
  createdAt: string;

  isTemp?: boolean;
}
