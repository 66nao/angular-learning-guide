# AngularJs
## 为了克服HTML在构建应用上的不足而设计

[AngularJS](https://angularjs.org/)诞生于2009年，由Misko Hevery等人创建，后为Google所收购。
是一款优秀的前端JS框架，已经被用于Google的多款产品当中。AngularJS有着诸多特性，
最为核心的是：`MVVM`、`模块化`、`双向数据绑定`、`语义化标签`、`依赖注入`等等。

> 它的设计理念和功能非常强大，它快速成为了 JavaScript 的主流框架，简化了前端开发的负担，来帮助开发者从事 web 开发。

### SPA 和 MVVM
*SPA*：单页面应用是指用户通过浏览器加载独立的 HTML 页面并且无需离开此导航页面。
对用户操作来说，一旦加载和执行单个页面应用程序通常会有更多的响应，这就需要返回到后端 Web 服务器，
而单页面应用为用户提供了一个更接近本地移动或桌面应用程序的体验，这就是单页面应用的优势所在。

*MVVM*：模型(Model)－视图(View)－视图模型(ViewModel，提供数据绑定和CRUD操作)的缩写。
MVVM模式利用框架内置的双向绑定技术对MVP（Model-View-Presenter）模式的变型，
引入了专门的ViewModel（视图模型）来实现View和Model的粘合，让View和Model的进一步分离和解耦。
MVVM模式的优势有如下四点：
- 低耦合：View可以独立于Model变化和修改，同一个ViewModel可以被多个View复用；并且可以做到View和Model的变化互不影响；
- 可重用性：可以把一些视图的逻辑放在ViewModel，让多个View复用；
- 独立开发：开发人员可以专注与业务逻辑和数据的开发（ViewModel），界面设计人员可以专注于UI(View)的设计；
- 可测试性：清晰的View分层，使得针对表现层业务逻辑的测试更容易，更简单。
具体可参阅这篇文章[angular中的MVVM模式](http://www.cnblogs.com/whitewolf/p/4581254.html)

虽然在angular社区一直将angular统称为前端MVC框架，同时angular团队也称它为MVW（Whatever）框架，
但angular框架整体上更接近MVVM模式，所以有时候统称为`MV*`模式

AngularJS 不仅仅是一个类库，而是提供了一个完整的框架。它避免了您和多个类库交互，需要熟悉多套接口的繁琐工作。
它由Google Chrome的开发人员设计，引领着下一代Web应用开发。引用官网的一段话来说明Angularjs：

> HTML enhanced for web apps!
