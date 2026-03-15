import conf from "../conf/conf.js";
import { Client, Databases, ID, Storage } from "appwrite";

export class Service {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  // ➜ Add Expense
  async addExpense({ name, amount, date, category, receiptId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        {
          name,
          amount,
          date,
          category,
          receiptId,
        }
      );
    } catch (error) {
      console.log("Add Expense Error:", error);
    }
  }

  // ➜ Get All Expenses
  async getExpenses() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId
      );
    } catch (error) {
      console.log("Get Expenses Error:", error);
    }
  }

  // ➜ Delete Expense
  async deleteExpense(documentId) {
    try {
      return await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        documentId
      );
    } catch (error) {
      console.log("Delete Expense Error:", error);
    }
  }

  // ➜ Update Expense
  async updateExpense(documentId, { name, amount, date, category }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        documentId,
        {
          name,
          amount,
          date,
          category,
        }
      );
    } catch (error) {
      console.log("Update Expense Error:", error);
    }
  }

  // ➜ Upload Receipt
  async uploadReceipt(file) {
    try {
      return await this.storage.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Upload Receipt Error:", error);
    }
  }

  // ➜ Delete Receipt
  async deleteReceipt(fileId) {
    try {
      return await this.storage.deleteFile(
        conf.appwriteBucketId,
        fileId
      );
    } catch (error) {
      console.log("Delete Receipt Error:", error);
    }
  }

  // ➜ Get Receipt Preview URL
  getReceiptPreview(fileId) {
    return this.storage.getFilePreview(
      conf.appwriteBucketId,
      fileId
    );
  }

  // ➜ Realtime Expense Sync
  syncExpenses() {
    return this.client.subscribe(
      `databases.${conf.appwriteDatabaseId}.collections.${conf.appwriteCollectionId}.documents`,
      (response) => {
        console.log("Realtime update:", response);
      }
    );
  }
}

const service = new Service();
export default service;