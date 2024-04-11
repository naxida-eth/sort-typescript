import { cloneDeep } from "lodash";

// 选择排序的思路是 每次找到最小的数，放到数组的最前面

// 找最小的数
const findMin = (arr: number[]) => {
  let minItem = arr[0];
  let minCurrent = 0;
  for (let i = 0; i < arr.length; i++) {
    const indexItem = arr[i];
    if (minItem >= indexItem) {
      minItem = indexItem;
      minCurrent = i;
    }
  }

  return {
    min: minItem,
    current: minCurrent,
  };
};

const selectSort = (arr: number[]) => {
  const reArr: number[] = cloneDeep(arr);
  const sortArr: number[] = [];
  const minArrCurrent: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    const { min, current } = findMin(reArr);
    if (typeof min === "number" && typeof current === "number") {
      minArrCurrent.push(current);
      sortArr.push(min);
      reArr.splice(current, 1);
    }
  }
  console.log({
    sortArr,
  });
};

export { selectSort };
