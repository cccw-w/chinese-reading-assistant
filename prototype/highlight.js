function walk(node) {
    if (node.nodeType === 3) {
        if (node.textContent.includes("你")) {
            const span = document.createElement("span");
            span.style.background = "yellow";
            span.textContent = node.textContent;

            node.parentNode.replaceChild(span, node);
        }
    } else {
        node.childNodes.forEach(walk);
    }
}

walk(document.body);