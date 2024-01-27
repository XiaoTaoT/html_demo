/*
闭包*/

function mockIdCard() {
    // 生成随机的出生日期，范围为1970年1月1日至2005年12月31日
    function getRandomBirthDate() {
        const minTimestamp = Date.parse('1970-01-01');
        const maxTimestamp = Date.parse('2005-12-31');
        const randomTimestamp = Math.floor(
            Math.random() * (maxTimestamp - minTimestamp + 1) + minTimestamp
        );
        return new Date(randomTimestamp);
    }

    // 格式化日期为身份证号码的出生日期部分
    function formatBirthDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}${month}${day}`;
    }

    // 生成随机的身份证号码（简化版）
    function generateRandomIdNumber() {
        const regionCode = '110101';  // 假设北京市东城区的行政区划码为110101
        const birthDate = formatBirthDate(getRandomBirthDate());
        const sequence = String(Math.floor(Math.random() * 1000)).padStart(3, '0');
        const checksum = calculateChecksum(`${regionCode}${birthDate}${sequence}`);
        return `${regionCode}${birthDate}${sequence}${checksum}`;
    }

    // 计算身份证号码校验码
    function calculateChecksum(idNumber) {
        const weightedFactors = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        const checksumDigits = '10X98765432';
        let sum = 0;
        for (let i = 0; i < idNumber.length; i++) {
            sum += parseInt(idNumber[i]) * weightedFactors[i];
        }
        const checksumIndex = sum % 11;
        return checksumDigits[checksumIndex];
    }


    // 生成一个随机身份证号码
    const randomIdNumber = generateRandomIdNumber();
    return randomIdNumber
}

function mockPhoneNumber() {
    function generateRandomPhoneNumber() {
        const prefixes = ["13", "14", "15", "16", "17", "18", "19"];
        const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const randomSuffix = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
        return randomPrefix + randomSuffix;
    }

    // 生成随机手机号码
    const phoneNumber = generateRandomPhoneNumber();

    return phoneNumber
};
document.activeElement.value = mockPhoneNumber();