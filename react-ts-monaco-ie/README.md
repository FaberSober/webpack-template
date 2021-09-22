# 不支持IE11
最后支持IE11的官方版本`0.18.1`。
参考问题：https://github.com/microsoft/monaco-editor/issues/1790

测试`react-monaco-editor`支持IE的最高版本为`0.26.2`，此时只需要安装`react-monaco-editor@0.26.2`即可。

如果要使用更高版本，则需要指定安装`monaco-editor@0.18.1`。

经测试，可以使用如下两种组合来兼容IE 11：
1. `yarn add react-monaco-editor@0.26.2`
2. `yarn add react-monaco-editor@0.34.0 monaco-editor@0.18.1`