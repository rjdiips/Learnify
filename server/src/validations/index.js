import { z } from "zod";

export const userRegistrationSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters long")
    .nonoptional(" Full name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonoptional("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(100, "Password must be at most 100 characters long")
    .nonoptional("Password is required"),
});

export const userLoginSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonoptional("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(100, "Password must be at most 100 characters long")
    .nonoptional("Password is required"),
});
