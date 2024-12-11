"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "@/lib/prisma";

export type FormData = {
  name: string;
  description: string;
  location: string;
  entrance: string;
  stream: string;
  author: string;
  img: string;
  collegeType: string;
  collegeUrl: string;
};

export async function createCollege(data: FormData) {
  await prisma.collegeList.create({
    data: {
      name: data.name,
      description: data.description,
      location: data.location,
      entrance: data.entrance,
      stream: data.stream,
      author: data.author,
      img: data.img,
      collegeType: data.collegeType,
      collegeUrl: data.collegeUrl,
    },
  });

  revalidatePath("/create");
}