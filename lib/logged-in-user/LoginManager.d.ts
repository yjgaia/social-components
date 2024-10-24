import { EventContainer } from "@common-module/ts";
export default abstract class LoginManager extends EventContainer<{
    loginStatusChanged: () => void;
}> {
    abstract get isLoggedIn(): boolean;
    abstract get loggedInUser(): string | undefined;
}
//# sourceMappingURL=LoginManager.d.ts.map