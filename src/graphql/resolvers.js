import { Query } from "./Query";
import { Mutation } from "./Mutations";
import { Relations } from "./Relations";

export const resolvers = {
  Query,
  Mutation,
  ...Relations,
};
