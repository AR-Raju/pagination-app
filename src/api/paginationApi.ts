export const getPaginationData = (pageNumber: number) => {
  return fetch(
    `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pageNumber}`
  ).then((res) => res.json());
};
