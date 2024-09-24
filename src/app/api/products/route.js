import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      colors,
      sizes,
      categories,
      dress_styles,
      searchValue,
      limit,
      offset,
      gender,
      priceRange,
      sortField,
      sortOrder,
    } = await req.json();

    const client = await clientPromise;
    const db = client.db("euphoria");

    let filter = {};
    if (gender) filter.gender = gender;
    if (searchValue?.length)
      filter.item_name = { $regex: searchValue, $options: "i" };
    if (!!Array.isArray(colors) && colors.length)
      filter.color = { $in: colors };
    if (!!Array.isArray(sizes) && sizes.length) filter.size = { $in: sizes };
    if (!!Array.isArray(categories) && categories.length)
      filter.category = { $in: categories };
    if (!!Array.isArray(dress_styles) && dress_styles.length)
      filter.dress_style = { $in: dress_styles };
    if (Array.isArray(priceRange) && priceRange.length === 2) {
      filter.price = {
        // $gte: priceRange[0],
        $lte: priceRange[1],
      };
    }
    const sortOptions = {};
    if (sortField) {
      sortOptions[sortField] = sortOrder;
    }

    const items = await db
      .collection("products")
      .find(filter)
      .skip(offset)
      .sort(sortOptions)
      .limit(limit)
      .toArray();

    return NextResponse.json({ success: true, data: items });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}

// export async function POST() {
//   try {
//     const client = await clientPromise;
//     const db = client.db("euphoria");
//     const result = await db.collection("products").insertMany(dress);
//     return NextResponse.json(result);

//     // return NextResponse.json({ success: true, data: items });
//   } catch (error) {
//     return NextResponse.json({
//       success: false,
//       message: error?.message,
//     });
//   }
// }
