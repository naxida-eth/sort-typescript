let data = [
  1, 654, 4464, 333, 254, 657, 334, 4545, 22226, 6879, 354578, 343434, 965874,
];

// 选择排序的思路是 每次找到最小的数，放到数组的最前面
let selectSortMin = () => {
  const sortArr: number[] = [];
  for (let i = 0; i < data.length; i++) {
    let min = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[j] < data[min]) {
        min = j;
      }
    }
    sortArr.push(data[min]);
  }
  console.log(sortArr);
};
selectSortMin();
