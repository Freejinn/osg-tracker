import { createAction, props } from "@ngrx/store";
import { User } from "./models/user.model";

export const login = createAction(
    "[login Page], User Login",
    props<{user:User}>()
)