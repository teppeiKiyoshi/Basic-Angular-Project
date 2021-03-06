import { HttpClient } from "@angular/common/http";
import { Inject } from "@angular/core";

interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

@Inject({providedIn: 'root'})
export class AuthService{

    constructor(private http: HttpClient) {

    }
    
    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]',
        {
            email: email,
            password: password,
            returnSecureToken: true
        });
    }
}