import * as v from "valibot";

export const UserValidationSchema = v.object({
  name: v.string([v.minLength(1, "Please enter your name.")]),
  nickName: v.string([
    v.minLength(3, "Nickname should be 3 or more character long."),
  ]),
});
