/**
 @ClassName:utlis
 @Author:TwT
 @Date:2023/7/20 15:03
 @Version:1.0
 **/

function helperCreateInTypeof(type) {
    return function (obj) {
        return typeof obj === type
    }
}

export const isFunction = helperCreateInTypeof('function')


export function moneyFormat(number, options) {
    const {sep = ",", fixed = 2} = {
        ...options
    }

    let strNumber = String(number);

    let parts = strNumber.split(".");
    let integerPart = parts[0];
    let decimalPart = parts.length > 1 ? parts[1] : "";

    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, sep);

    decimalPart = decimalPart.padEnd(fixed, "0");

    let formattedNumber = integerPart + "." + decimalPart;

    return formattedNumber;
}

/**
 *
 * @param executeArray [{
 *     w|weight,
 *     func
 * }]
 */
const randomExecute = (executeArray) => {
    if (!executeArray || executeArray.length == 0) return;
    // {weight:func}
    let weightObj = {}
    executeArray.forEach(item => {
        let weight = item.weight || item.w || 0
        while (weight > 10) {
            weight = Math.floor(weight / 10)
        }
        weightObj[weight] = item.func
    })
    // console.log(weightObj)
    //对权重进行排序
    const weightArray = Object.keys(weightObj).map(key => Number(key))
    // console.log("weightArray：", weightArray)
    weightArray.sort((a, b) => a - b > 0)
    // console.log("weightArray sorted：", weightArray)
    //求权重总和
    const sum = weightArray.reduce((a, b) => a + b)
    //计算区间
    let weightSection = []
    let s = 0;
    for (let i = 0; i < weightArray.length; i++) {
        let tmp = {
            start: s,
            end: s + weightArray[i],
            func: weightObj[weightArray[i]]
        }
        s = tmp.end
        weightSection.push(tmp)
    }
    //随机数
    const pitchNum = Math.floor(Math.random() * sum)
    let findSection = weightSection.find(section => {
        return section.start <= pitchNum && section.end > pitchNum
    })
    //判断隔哪边近
    const exec = findSection.func
    return new Promise((resolve, reject) => {
        let result = exec()
        resolve(result)
    })
}


export const parseFuncParams = (func) => {
    if (func && isFunction) {
        const funcStr = func.toString();
        const params = funcStr.slice(funcStr.indexOf("(") + 1, funcStr.indexOf(")")).match(/([^,]+)/g) || [];
        return params.map(param => param.trim());
    }
}
/*importDir: (dir) => {
    const files = require.context(dir, true, /.js$/)
    let res = []
    files.keys().forEach(key => {
        let items = files(key).default;
        if (!items) return
        if (Array.isArray(items)) {
            res.push(...items)
        } else {
            res.push(items)
        }
    })
    return res
}*/
