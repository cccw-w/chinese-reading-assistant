// เก็บข้อความจีนทั้งหมด
const chineseTexts = [];

// ตรวจว่ามีอักษรจีนหรือไม่
function containsChinese(text) {
    return /[\u4E00-\u9FFF]/.test(text);
}

// เดินทุก Text Node
function walk(node) {
    // ถ้าเป็น Text Node
    if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent.trim();

        // ข้ามข้อความว่าง
        if (!text) return;

        // ถ้ามีภาษาจีน
        if (containsChinese(text)) {
            chineseTexts.push({
                node: node,
                text: text
            });
        }

        return;
    }

    // ข้ามพวก script / style
    if (
        node.nodeName === "SCRIPT" ||
        node.nodeName === "STYLE" ||
        node.nodeName === "NOSCRIPT"
    ) {
        return;
    }

    // เดินลูกทุกตัว
    node.childNodes.forEach(walk);
}

// เริ่มทำงาน
walk(document.body);

// แสดงผล
console.clear();

console.log("===== Chinese Text Nodes =====");

console.table(
    chineseTexts.map(item => ({
        text: item.text
    }))
);

console.log(chineseTexts);
console.log("Hi");
