import vine from "@vinejs/vine";

export const registerUserValidatorSchema = vine.object({
  name: vine.string().trim().minLength(2).maxLength(20),
  email: vine.string().email().trim(),
  password: vine.string().trim().minLength(6).maxLength(20).confirmed(),
  credential: vine.enum(["google", "custom", "facebook"]),
});

export const loginUserValidatorSchema = vine.object({
  email: vine.string().email().trim(),
  password: vine.string().trim().minLength(6).maxLength(20),
});
