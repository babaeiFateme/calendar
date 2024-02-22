export const getDisCount = (discount: number, num: number): number => {
    let result = (discount / 100) * num
    return result;
}
