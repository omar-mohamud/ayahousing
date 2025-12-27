import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city") || undefined;
  const type = searchParams.get("type") || undefined;
  const status = searchParams.get("status") || undefined;
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const bedrooms = searchParams.get("bedrooms");
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = Math.min(parseInt(searchParams.get("pageSize") || "12", 10), 50);
  const skip = (page - 1) * pageSize;

  const where: any = { approved: true };
  if (city) where.city = { contains: city, mode: "insensitive" };
  if (type) where.type = type;
  if (status) where.status = status;
  if (bedrooms) where.bedrooms = { gte: Number(bedrooms) };
  if (minPrice || maxPrice) {
    where.price = {};
    if (minPrice) where.price.gte = Number(minPrice);
    if (maxPrice) where.price.lte = Number(maxPrice);
  }

  const [items, total] = await Promise.all([
    prisma.property.findMany({ where, skip, take: pageSize, orderBy: { createdAt: "desc" } }),
    prisma.property.count({ where }),
  ]);

  return NextResponse.json({ items, page, pageSize, total });
}


