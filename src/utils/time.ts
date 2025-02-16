// 封装一个函数判断是早上、上午、下午或晚上
export const getTime = ():string => {
    let message = '';
    let hours = new Date().getHours();
    console.log(hours)
    if (hours <= 9) {
        message = '早上';
    } else if (hours <= 12) {
        message = '上午';
    } else if (hours <= 18) {
        message = '下午';
    } else {
        message = '晚上';
    }
    return message;
}