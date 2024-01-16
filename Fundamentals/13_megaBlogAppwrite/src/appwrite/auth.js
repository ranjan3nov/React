import config from '../config/config'
import { Client, Account, ID } from "appwrite";

export class AuthService {

    clinet = new Client();
    account;

    constructor() {
        this.clinet
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.clinet)
    }

    async createAccount({ email, password, }) {
        try {
            const userAccount = await this.accountcreate(ID.unique(), email, password);
            if (userAccount) {
                return this.login(email, password);
            }
            else {
                return null;
            }
        }
        catch (error) {
            console.error(" : " + error);
        }

    }

    async login({ email, password }) {
        try {
            await this.createEmailSession(email, password);
        }
        catch (error) {
            console.error(error);
        }

    }
    async getCurrentUser() {
        try {
            await this.account.get();
        } catch (error) {
            console.error(error);
        }
        return null;
    }
    
    async logout() {
        try {
            this.account.deleteSessions();

        } catch (error) {
            console.error(error);
        }
    }
}

const authService = new AuthService();

export default authService;
