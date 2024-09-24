import axios from "axios";

export const fetchProducts = async ({
  searchValue,
  categories,
  colors,
  sizes,
  dressStyles,
  limit,
  offset,
  gender,
  priceRange,
  sorting,
  sortingOrder,
}) => {
  try {
    const res = await axios.post(
      "/api/products",
      {
        searchValue,
        colors: colors,
        sizes: sizes,
        categories: categories,
        dress_styles: dressStyles,
        limit: limit,
        offset: offset,
        gender: gender,
        priceRange: priceRange,
        sortField: sorting,
        sortOrder: sortingOrder,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return res.data?.data;
  } catch (err) {
    return err;
  }
};

export const getProductById = async (id) => {
  try {
    const res = await axios.post(
      `/api/product`,
      {
        id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return res.data?.data;
  } catch (err) {
    return err;
  }
};
