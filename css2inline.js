"use strict";
/**
 * 模式
 */
var MODE = {
    PART: 'part',
    ALL: 'all', // 全部设置
};
/**
 * getComputedStyle的返回值是 resolved values,
 * 通常跟CSS2.1中的computed values是相同的值。
 * 但对于一些旧的属性，比如width, height, padding
 * 它们的值又为 used values。 最初, CSS2.0定义的计
 * 算值Computed values 就是属性的最终值。 但是CSS2.1
 * 重新定义了 computed values 为布局前的值， used values
 * 布局后的值。 布局前与布局后的区别是， width 或者 height的
 * 百分比可以代表元素的宽度，在布局后会被像素值替换.
 */
function css2InlineCss(el /* DMO元素 | clsss | id */, normal /* 自定义常见样式 */, mode /* 设置类型 */) {
    if (mode === void 0) { mode = MODE.PART; }
    /** 常见样式 */
    var normalStyle = normal ? normal : [
        'color',
        'background',
        'margin',
        'padding',
        'text-align',
        'display',
        'font-size',
        'font-weight',
        'line-height',
        'white-space',
        'border',
        'border-radius',
        'text-decoration',
        'box-sizing',
        'cursor',
        'word-wrap',
        'font-family',
        'opacity',
    ];
    // 将normalStyle暴露出去
    css2InlineCss.normalStyle = normalStyle;
    // 获取dom元素
    var div = typeof el === 'string' ? document.querySelector(el) : el;
    // 获取getComputedStyle方法
    var getComputedStyle = (document.defaultView && document.defaultView.getComputedStyle) || window.getComputedStyle;
    // 执行getComputedStyle，获取所有style
    var styles = getComputedStyle(div, null);
    for (var key in styles /* 遍历styles，进行下一步操作 */) {
        if (mode === MODE.ALL /* 如果mode是all，则全部设置 */) {
            // 添加到行内样式中
            div.style[key] = styles[key];
            return;
        }
        // mode是part，则匹配部分设置
        if (styles[key] && // 值存在
            // styles[key] !== '0px' &&
            styles[key] !== 'none' && // 值存在不为'none'
            // styles[key] !== 'normal' &&
            // styles[key] !== 'auto' &&
            normalStyle.indexOf(key) > -1 // 值在map里面
        ) {
            // 添加到行内样式中
            div.style[key] = styles[key];
        }
    }
}
