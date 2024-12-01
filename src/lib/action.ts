"use server"

import { formSchema } from "@/components/hire-me-form";
import { writeClient } from "@/sanity/lib/writeClient";
import { z } from "zod";
import { parseServerActionResponse } from "./utils";

export async function createHireMe(values: z.infer<typeof formSchema>) {
    try {
        const { details, ...hireMe } = {
            ...values,
            services: values.services.join(","),
            budget: values.budget as string,
        }
        const result = await writeClient.create({
            _type: "hireMe",
            ...hireMe,
            detail: details
        })

        return parseServerActionResponse({
            ...result,
            error: "NO ERROR",
            success: true,
            status: "SUCCESS"
        })

    } catch (error) {
        return parseServerActionResponse({
            error: JSON.stringify(error),
            success: false,
            status: "ERROR"
        })
    }


}