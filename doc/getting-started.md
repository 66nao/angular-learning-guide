# Getting started
## 准备开始Angular之旅
### 文件引入
Angular的使用需要引入`angular[.min].js`，可以通过cdn或者下载后复制到项目中，也可以使用`bower`管理。

```html
<script src="//cdn.bootcss.com/angular.js/1.4.7/angular.min.js"></script>
```

Angular的运行不依赖其它库，而且自带`jquery-lite`，当然你也可以引入完整的`jquery`，但是这种做法不推荐。

Angular默认是不和任何css框架绑定的，所以你可以使用任意的css框架。社区里面有个[AngularUI](https://angular-ui.github.io/)，
虽然不是官方开发的，但是也是得到官方的承认的，里面提供了很多常用的组件（日历控件、表格空间、路由控件等等），推荐使用。
比如引入angular版本的bootstrap：
```html
<link href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
<script src="//cdn.bootcss.com/angular-ui-bootstrap/0.14.3/ui-bootstrap.min.js"></script>
```

### 开始开发
1.在html/body上添加`ng-app`，表明此处是用angular控制的应用区域。

```html
<html ng-app>
    <head>
        <script src="//cdn.bootcss.com/angular.js/1.4.7/angular.min.js"></script>
    </head>
    <body>
        Hello {{'World'}}!
    </body>
</html>
```

2.需要添加controller,service,directive和其它文件时在页面中引入相应的js文件即可。

```html
<!-- index.html -->
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Angular Learning Guide">
    <title>Lesson 1</title>
    <base href="/">
    <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.5.0/pure-min.css">
    <link href="//cdn.bootcss.com/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet">
  </head>

  <body ng-app="myApp">
    <div ng-controller="myCtrl">
      <form class="pure-form">
        <input type="text" ng-model="search" placeholder="请输入搜索内容">
      </form>
      <table class="pure-table">
        <thead>
          <tr>
            <td>#</td>
            <td class="sortable" width="120">
              <span class="text">姓名</span>
              <span class="fa fa-angle-up upper" ng-click="fOrder('name',false)"></span>
              <span class="fa fa-angle-down down" ng-click="fOrder('name',true)"></span>
            </td>
            <td class="sortable" width="60">
              <span class="text">分数</span>
              <span class="fa fa-angle-up upper" ng-click="fOrder('score',false)"></span>
              <span class="fa fa-angle-down down" ng-click="fOrder('score',true)"></span>
            </td>
            <td>评价</td>
          </tr>
        </thead>
        <tbody>
          <tr ng-repeat="student in students | filter:search | orderBy:orderBy:orderReverse">
            <td ng-bind="$index+1"></td>
            <td ng-bind="student.name"></td>
            <td ng-bind="student.score"></td>
            <td ng-bind="student.score | evaluation"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <script src="//cdn.bootcss.com/angular.js/1.4.7/angular.min.js"></script>
    <script src="./index.js"></script>
  </body>

</html>
```

```js
// index.js
angular.module('myApp',[]);
angular.module('myApp').filter('evaluation', function() {
  return function(input) {
    var tmp = Math.ceil(parseInt(input) / 10);
    if (tmp >= 9) {
      return "优秀";
    } else if (tmp >= 6) {
      return "良好"
    } else {
      return "不及格";
    }
  }
})
.controller('myCtrl', ['$scope', function($scope) {
  $scope.students = [{
    name: 'Li Lei',
    score: 75,
  }, {
    name: 'Han Meimei',
    score: 82
  }, {
    name: 'Jerry',
    score: 59
  }, {
    name: 'Tom',
    score: 90
  }];
  $scope.orderBy = '';
  $scope.orderReverse = false;
  $scope.search = '';
  $scope.fOrder = function(name, reverse) {
    $scope.orderBy = name;
    $scope.orderReverse = reverse;
  }
}]);
```

### 虐心的填坑之旅
- Angularjs的学习曲线非常陡峭

![学习曲线](./image/learning-curve.png)

- Angularjs的调试比较痛苦，经常会出现一些你看不懂的错误。而且错误信息的查看需要翻墙！
不过好在现在学习资源多，多使用搜索一般是可以解决问题的。
- 抛弃jQuery转到Angularjs的转型是痛苦的，尤其是对指令不熟悉的时候，经常会出现这个在jQuery中
很容易操作的东西在Angularjs中不知道怎么写。
- 更多的坑欢迎你来踩。。。

### Angularjs与其它框架的比较
- 知乎一篇文章  
[AngularJS 于前端开发有什么作用，对比其它框架有何优点](http://www.zhihu.com/question/22079371)
- Angularjs和其它几个主流框架之间的对比  
[AngularJS 、Backbone.js 和 Ember.js 的比较](http://www.oschina.net/translate/javascript-framework-comparison)
