import {createElement,render,renderDom} from './element'
import {diff} from './diff'
import patch from './patch'
let virtualDom1 = createElement("ul", { class: "list" }, [
    createElement("li", { class: "item" }, ["a"]),
    createElement("li", { class: "item" }, ["b"]),
    createElement("li", { class: "item" }, ["c"])
]);
let virtualDom2 = createElement("ul", { class: "list-g" }, [
    createElement("li", { class: "item" }, ["1"]),
    createElement("li", { class: "item" }, ["b"]),
    createElement('div', { class: "item" }, ["3"]),
]);

// 将虚拟dom转化成了真实DOM渲染到页面上
let el = render(virtualDom1)
renderDom(el,window.root)
// 补丁
let patches = diff(virtualDom1,virtualDom2);

// 给元素打补丁 重新更新视图
patch(el,patches)


