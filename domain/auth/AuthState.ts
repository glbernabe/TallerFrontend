import { User } from "./User";
import { AuthSession } from "./AuthSession";

export interface AuthState {

    isAuthenticated: boolean;

    isLoading: boolean;

    user: User | null;

    session: AuthSession | null;

}