// 숫자 1000단위마다 콤마 붙이는 hooks
export default function addComma(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
