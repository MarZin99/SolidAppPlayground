import { createRESTApiHook } from "../services/createRESTApiHook";
import { User } from "../models/user.model";

const { Provider, useRESTApi } = createRESTApiHook<User>();

export { Provider as UsersProvider, useRESTApi as useUsers };
