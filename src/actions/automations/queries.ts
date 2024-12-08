"use server"

import { client } from "@/lib/prisma";
import { getUserFromClerk } from "../user";


export const createAutomationQuery = async(clerkId: string) => {
    return await client.user.update({
      where: {
        clerkId,
      },
      data: {
        automations: {
          create: {
            // Creaing an empty atutomation
          }
        }
      }
    })
}

export const getAutomationsQuery = async(clerkId: string) => {
  return await client.user.findUnique({
    where: {
      clerkId,
    },
    select: {
      automations: {
        orderBy: {
          createdAt: "asc",
        },
        include: {
          keywords: true,
          listener: true
        }
      }
    }
  })
}