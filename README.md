# 在浏览器中将css转换为行内css(行内样式)（Convert css to in-line css (in-line styles) in the browser）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./index.css">
    <script src="../css2inline.js"></script>
</head>
<body>
    <div class="out">
        <div class="inner">
            css2InlineCss
        </div>
    </div>
    <script>
        css2InlineCss('.out')
        css2InlineCss('.inner')
    </script>
</body>
</html>
```

> https://segmentfault.com/q/1010000015377033