# angular5-demo

简要介绍开发流程，配套后端在[angular5-demo-nodejs-backend](https://github.com/shellqiqi/angular5-demo-nodejs-backend/tree/master)

## 环境配置

首先保证电脑上安装有npm，安装AngularCLI。

```
$ sudo npm install -g @angular/cil
```

## 项目流程

### 新建项目

使用AngularCLI新建项目，也可通过Webstorm直接生成。注意不要使用cnpm，老老实实走代理。

```
$ ng new ProjectName
```

### jQuery & Bootstrap

在项目内引入jQuery以及Bootstrap，这些都保存在`node_modules`中。为了让tslint对jQuery与Bootstrap生效，安装对应的类型描述文件。

```
$ npm install jquery --save
$ npm install bootstrap --save
$ npm install @types/jquery --save-dev
$ npm install @types/bootstrap --save-dev
```

添加到`.angular-cli.json`

```js
{
  "apps": [{ // ...
    "styles": [
      "styles.css",
      "../node_modules/bootstrap/dist/css/bootstrap.css" // add here
    ],
    "scripts": [
      "../node_modules/jquery/dist/jquery.js", // add here
      "../node_modules/bootstrap/dist/js/bootstrap.js" // add here
    ], // ...
  }]
}
```

### 路由

由于使用了Angular的路由模块，浏览器请求的URL并不一定是合法的，需要更改地址策略

```js
@NgModule({ // ...,
  providers: [ // ...
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ] // ...
})
```

### 开发环境与生产环境

```
$ ng serve --target=?
```

### 项目发布

```
$ ng build -prod
```

## 版本过渡的问题

### Angular5

抛弃了Http类，改为了HttpClient类，其中方法中的URL参数改为了HttpParams，它是不可更改的，修改的方法返回新的实例。\
大幅度缩减了Rxjs对程序员的可见性，内置了许多对`Observable`类的方法。

### Bootstrap4

抛弃了Glyphicons，该项目用[Font Awesome](https://fontawesome.com/)作为替代，其拥有十分风骚的引入方法。\
抛弃了panels, thumbnails, and wells，使用cards组件作为替代。\
更改了一些样式，比如`.pull-right`变为`.float-right`。\
更多参阅[Migrating to v4](http://getbootstrap.com/docs/4.0/migration/)

# Auction

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
