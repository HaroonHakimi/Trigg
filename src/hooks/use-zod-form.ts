import { UseMutateFunction } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { ZodSchema, z } from "zod";
import { zodResolver} from '@hookform/resolvers/zod'

export const useZodForm = (
    schema: ZodSchema,
    mutation: UseMutateFunction,
    defaultValues?: any
) => {
     const {} = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema)
     })
}