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