import config from '../config/config'
import { Client, Account, ID, Databases, Query } from "appwrite";

export class Service {

    client = new Client();
    databases;
    bucket;

    constructor() {
        this.clinet
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, fetaturedIamge, status, userID }) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    fetaturedIamge,
                    status,
                    userID,
                }
            )
        } catch (error) {
            console.error(error);
        }
    }

    async updatePost(slug, { title, content, fetaturedIamge, status }) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug, {
                title,
                content,
                fetaturedIamge,
                status,
            }
            );
        }
        catch (error) {
            console.error("Appwrite Service :: updatePost ", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId, config.appwriteCollectionId,
                slug
            );
            return true
        } catch (error) {
            console.error("Appwrite Service :: deletePost ", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId, config.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.error("Appwrite Service :: getPost ", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            )
        }
        catch (error) {
            console.error("Appwrite Service getPosts :: ", error);
            return false;
        }
    }

    // FIle upload Service

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("Appwrite Serivices :: uploadFiles ", error);
        }
    }

    async deleteFile(fileID) {
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileID,
            )
            return true;
        } catch (error) {
            console.log("Appwrite Serivices :: deleteFile ", error);
            return false;
        }
    }

    getFilePreview(fileID) {
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileID
        )
    }
}
const service = new Service();

export default service;