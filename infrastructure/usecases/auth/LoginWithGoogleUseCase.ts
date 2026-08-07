import type { AuthSession } from "@/domain/auth/AuthSession";
import type { GoogleCredential } from "@/domain/auth/GoogleCredential";
import type { IAuthRepository } from "@/domain/auth/IAuthRepository";

export class LoginWithGoogleUseCase {

    constructor(
        private readonly repository: IAuthRepository,
    ) {}

    async execute(
        credential: GoogleCredential,
    ): Promise<AuthSession> {

        return this.repository.loginWithGoogle(
            credential,
        );

    }

}