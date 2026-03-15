import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    // CREATE ACCOUNT
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );

            if (userAccount) {
                return await this.login({ email, password });
            }

            return userAccount;

        } catch (error) {
            console.log("Signup error:", error);
            throw error;
        }
    }

    // LOGIN USER
    async login({ email, password }) {
        try {

            // delete current session if exists
            await this.account.deleteSession("current").catch(() => {});

            // create new session
            return await this.account.createEmailPasswordSession(
                email,
                password
            );

        } catch (error) {
            console.log("Login error:", error);
            throw error;
        }
    }

    // GET CURRENT USER
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            return null;
        }
    }

    // LOGOUT USER
    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Logout error:", error);
        }
    }
}

const authService = new AuthService();
export default authService;