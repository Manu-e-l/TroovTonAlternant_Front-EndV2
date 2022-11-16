import { defineStore } from "pinia";
import { IObject } from "~~/types";
import useToast from "./useToast";

export const useObjectStore = defineStore("object-store", {
    state: () => ({
        // List of all books
        object: [] as IObject[],
    }),
    actions: {
        // Get all books from DB
        async getAll() {
            try {
                const data = await $fetch<IObject[]>("/api/object");
                this.user = data;
                return data as IObject[];
            } catch (e) {
                useToast().error(e.message);
            }
        },
        // Create a new object
        async create(object: IObject) {
            await $fetch("/api/object/create", {
                method: "POST",
                body: object,
            })
                .catch((e) => {
                    useToast().error(e.data.message);
                })
                .then(async () => {
                    await this.getAll();
                    useToast().success("Objet crée");
                });
        },
        // Update a book
        async update(id: string, object: IObject) {
            await $fetch(`/api/object/${id}`, {
                method: "PUT",
                body: object,
            })
                .catch((e) => {
                    useToast().error(e.data.message);
                })
                .then(async () => {
                    await this.getAll();
                    useToast().success("Objet modifié");
                });
        },
        // delete a book
        async remove(id: string) {
            await $fetch(`/api/object/${id}`, {
                method: "DELETE",
            })
                .catch((e) => {
                    useToast().error(e.data.message);
                })
                .then(async () => {
                    await this.getAll();
                    useToast().success("Objet supprimé");
                });
        },
    },
});