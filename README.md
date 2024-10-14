# Angular
Let's learn angular
## Lecture 2

**MVVM** : Model View View-Model

- **Model**
  - Row data
  - Logic to retrive data
  - No logic to display data

- **View**
   - User interface
   - Html / Css
   - Naver change the data
   - No handle Js event

- **View-Model**
   - Representation of data 
   - Presentation logic
   - No code about HTML / CSS

- **Declarative Binder** 
   - `Mode + View + View-Model` 👈 `Framework`

   ![MVVM](/Media/mvvm.png)

## Lecture 4

**🌱 Install Angularjs 1.x version** : 
[Install AngularJs](https://code.angularjs.org/)

```html
<html ng-app="moduleName">
    ...
<div ng-Controller="NameOfController"></div>
```

`ng-app` : ng stnd for angular


```js
(
    function(){
      'use strict'
       angular.module("moduleName", [])
      .Controller('NameOfController', callBack);   
    }
)();
```

`angular.module` : It's helps to hold the dependancy.

`.Controller` : It's helps to bind the `view` and `view-model`.

 `'use strict'` is a good practice as it helps write cleaner and safer JavaScript code by enforcing stricter parsing and error handling.

## Lecture 5
 
**Sharing data with the view through `$scope`**

```JS
(
   function (){
      'use strict'
      angular.module('moduleName', [])
      .Controller('nameCont', ($scope))

      $scope.name = "Prince";
      $scope.invite = () => "A🍎 Apple is better then 🍌 banana";
   }
)();
```

`$scope`: prefix `$` is a reserved keyword for angular.
`$scope.name` : name variable is created and value also share to the   `ng-module` and `{{name}}` to the view `Controller`.

**How to access `$scope` data to view ❔**

In the `<div ng-Controller="nameCont">...</div>` use : 
- `{{ name }}` to access the variable.
- `{{ invite() }}` to access the function.
- `ng-module="name"` to set the value as attribute.

```html
<div ng-Controller="nameCont">
    <h5>Name:{{name}}</h5> //Prince
    {{ invite() }} // 🍎 Apple is better then 🍌 banana
    <input type="text" ng-module="name"> //set value
</div>
```
## Lecture 9

**Dependancy Injection 💉**
```
Design pattern used to pass the dependencies (objects or services)... that a class or function needs, instead of creating them inside.... It implements Inversion of Control (IoC) by delegating the responsibility of dependency creation to an external system.
```

**How Dependency injection works in JavaScript ?**
---
`$filter`: It is used to formate the data.

`$injector`: It is used to check all the service dependancy of controller under the hood.