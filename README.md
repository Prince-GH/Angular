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

**🌱 Install Angularjs 1.x version**
[Install AngularJs](https://code.angularjs.org/)

```html
<html ng-app="moduleName">
  ...
  <div ng-Controller="NameOfController"></div>
</html>
```

`ng-app` : ng stnd for angular

```js
;(function () {
  'use strict'
  angular.module('moduleName', []).Controller('NameOfController', callBack)
})()
```

`angular.module` : It's helps to hold the dependancy.

`.Controller` : It's helps to bind the `view` and `view-model`.

`'use strict'` is a good practice as it helps write cleaner and safer JavaScript code by enforcing stricter parsing and error handling.

## Lecture 5

---

## **Sharing data with the view through `$scope`**

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
`$scope.name` : name variable is created and value also share to the `ng-module` and `{{name}}` to the view `Controller`.

**How to access `$scope` data to view ❔**

In the `<div ng-Controller="nameCont">...</div>` use :

- `{{ name }}` to access the variable.
- `{{ invite() }}` to access the function.
- `ng-module="name"` to set the value as attribute.

```html
<div ng-Controller="nameCont">
  <h5>Name:{{name}}</h5>
  //Prince {{ invite() }} // 🍎 Apple is better then 🍌 banana
  <input type="text" ng-module="name" /> //set value
</div>
```

## Lecture 9

---

**Dependancy Injection 💉**

```
Design pattern used to pass the dependencies (objects or services)... that a class or function needs, instead of creating them inside.... It implements Inversion of Control (IoC) by delegating the responsibility of dependency creation to an external system.
```

## **How Dependency injection works in JavaScript ?**

`$filter`: It is used to formate the data.

`$injector`: It is used to check all the service dependancy of controller under the hood.

## Lecture 10

---

## **Protecting dependency injection from minification**

> "`🔍minification` is a process of **removing** all unnessary characters from source code without changing its functionality"

eg:

```js
!(function () {
  function e(e, n) {
    ;(e.name = 'Prince'),
      (e.upCase = function () {
        let c = n('uppercase')
        e.name = c(e.name)
      })
  }
  angular.module('DIapp', []).controller('DIcontroller', e),
    (e.$inject = ['$scope', '$filter'])
})()
```

---

**Two ways to add the Injection 💉**

**1 .** Inject as an array.

```js
;(function () {
  angular
    .module('DIapp', [])
    .controller('DIcontroller', ['$scope', '$filter', DIcontroller])

  function DIcontroller($scope, $filter) {
    $scope.name = 'Prince'
    $scope.upCase = function () {
      let upcase = $filter('uppercase')
      $scope.name = upcase($scope.name)
    }
  }
})()
```

**2 .** Inject as an `$inject`.

```js
;(function () {
  angular.module('DIapp', []).controller('DIcontroller', DIcontroller)

  DIcontroller.$inject = ['$scope', '$filter']

  function DIcontroller($scope, $filter) {
    $scope.name = 'Prince'
    $scope.upCase = function () {
      let upcase = $filter('uppercase')
      $scope.name = upcase($scope.name)
    }
  }
})()
```

---

## Lecture 11

---

**Expression**

- An expression is anything that evaluates to a value.
- In Angular, expressions are tied to the scope they belong to.
- They do not throw TypeError or ReferenceError if the value is undefined or invalid.
- Syntax: {{ expression }}

**Interpolation**

- Interpolation replaces placeholders in a string with dynamic values.
- In Angular, placeholders are typically expressions.
- The result is automatically updated when the value of the placeholder changes.

---

## Lecture 12

---

### **$filter**

- `uppercase`:
  - `let output = $filter('uppercase')(value);`: In Js
  - `{{vlaue | uppercase}}`: In html
- `currency`:

  - `let output = $filter('currency')(value, "$", decimalPoint)`
  - `{{value | currency : "$" : decimalPoint}}`

  eg:

  ```html
  <div ng-controller="filter-control">
    <input type="number" placeholder="Salary" ng-model="Salary" />
    <!-- <H2>Salary: {{ExchangeSalary()}}</H2> -->
    <h2>Salary: {{Salary | currency}}</h2>
  </div>
  ```

  ```js
  ;(function () {
    angular.module('filter-app', []).controller('filter-control', fc)

    fc.$inject = ['$scope', '$filter']

    function fc($scope, $filter) {
      $scope.Salary = ''
      $scope.ExchangeSalary = () => $filter('currency')($scope.Salary, '$ ', 2)
    }
  })()
  ```

  ***

  ## Lecture 13

  ***

  ### **Custome Filter**

  - **In JavaScript**

    - ```js
      ;(function () {
        'use strict'

        angular
          .module('app', [])
          .controller('ctrl', ctrl)
          //Register filter factory with module
          .filter('sqrt', CustomeFilterFactory)

        //inject in with name"Filter"
        ctrl.$inject = ['$scope', 'sqrtFilter']

        function ctrl($scope, sqrtFilter) {
          $scope.num = 0
          $scope.output = () => sqrtFilter($scope.num)
        }

        //Define filter factory function
        function CustomeFilterFactory() {
          return function (input) {
            return input * input
          }
        }
      })()
      ```

  - **In Html**
    - ```html
      {{text}}
      <hr />
      {{replaceText()}}
      ```

  ### **Custome Filter with multiple argument**

  - **In JavaScript**

    - ```js
      ;(function () {
        'use strict'

        angular
          .module('app', [])
          .controller('ctrl', ctrl)
          //Register filter factory with module
          .filter('replaceText', CustomeFilterFactory)

        //inject in with name"Filter"
        ctrl.$inject = ['$scope', 'replaceTextFilter']

        function ctrl($scope, replaceTextFilter) {
          $scope.text = ''
          $scope.target = ''
          $scope.replace = ''
          $scope.replaceText = replaceTextFilter(
            $scope.text,
            $scope.target,
            $scope.replace
          )
        }

        //Define filter factory function
        function CustomeFilterFactory() {
          return function (input, target, replace) {
            let targetAll = new RegExp(target, 'gi')
            return input.replace(targetAll, replace)
          }
        }
      })()
      ```

  - **In Html**
    - ```html
      {{replaceText | "Arjun" : "Shiva"}}
      ```

---

## Lecture 14

---

### 🔁 Digest Cycle

![alt text](/Media/digestCycle.png)

---

## ⚔ Event Handling in Angular

### ⚔ Event Queue

- All event handling in Angular is managed through the event queue, which organizes and processes events as they occur.

### ⚔ ng-events

- Refers to anonymous events and special events specific to Angular. These events enable dynamic interaction within Angular applications.

### ⚔ $digest Cycle

- A special mechanism in Angular that processes `ng-events` and ensures that changes are propagated throughout the application. It runs a series of checks to update the view when the model changes.

### ⚔ Watchers

- Functions that monitor specific properties in the scope for changes. When a watched property is modified, the associated handler is invoked to update the UI accordingly.

### ⚔ Digest Loop

- This loop checks for changes in the values of the watchers. If changes are detected, it updates the relevant properties; if not, it maintains the current state. This loop runs automatically during events but can also be triggered manually.

### ⚔ Dirty Checking

- A process that repeatedly checks the state of watchers to determine if any value has changed. If a change is detected, the digest cycle is initiated to update the application state.

---

eg:<br>

```JavaScript
(function (){
    'use strict'

    angular.module('watcherApp', [])
    .controller('watcherControl',ctrlWatcher)
    $inject.ctrlWatcher = ['$scope', '$filter'];
    function ctrlWatcher ($scope){

        $scope.Count = 0;
        $scope.CountInc = 0;

        $scope.WatcherCount = function () {
            console.log($scope);
            console.log("No. of watchers: ",$scope.$$watchersCount);

        }

        $scope.OnceCount = function () {
            $scope.Count = 1;
        }

        $scope.OnceCountIncrement = function () {
            $scope.CountInc++;
        }


        //Watcher 1 to focus on Count
        $scope.$watch('Count',function (newVal, oldVal) {
            console.log("Old Value: ",oldVal);
            console.log("New Value: ",newVal);
        })

        //Watcher 2 to focus on CountInc
        $scope.$watch('CountInc', (newVal, oldVal)=>{
            console.log("Inc newVal: ",newVal);
            console.log("Inc oldVal: ",oldVal);
        })
    }
})();
```
