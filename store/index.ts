import { proxy } from "valtio";

interface StoreType {
  todos: {
    title: string;
    done: boolean;
    created: Date;
  }[];
}

export const state = proxy<StoreType>({
  todos: [],
});
