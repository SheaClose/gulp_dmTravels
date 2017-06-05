#### Add controller to state object

Now that we have created our controllers and added the script tags to the index.html we need to tell the router what controller it needs to use. On the packages, booked and location states add a controller property with the value as whatever you named the associated controller.
Now when you navigate to a view the router will know what controller it needs to be using

####
```javascript
   $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })
            .state('adventurers',{
                url:'/adventurers',
                parent:'home',
                templateUrl: "../views/about-adventurers.html"
            })
            .state('contact',{
                url:'/contact',
                parent:'home',
                templateUrl: "../views/contact.html"
            })
            .state('packages',{
                url:'/packages/:country',
                templateUrl: "../views/packages.html",
                controller: 'packagesCtrl'
            })
            .state('booked',{
                url:'/booked/:id',
                templateUrl: "../views/booked.html",
                controller: 'bookedCtrl'
            })
            .state('locations',{
                url:'/locations',
                templateUrl: "../views/locations.html",
                controller: 'locationsCtrl'
            });
```
### Test Controllers

####

Create a test variable in your controller called $scope.test and give it some value. In the associated template file that you created in the last step, put {{test}} somewhere in the file. Make sure that the value that you gave to $scope.test pops up on the view.


### Setup the templates

####

Now that our templates and controllers have been injected into each of the states, we need to add some markup to the templates to get them to work.

Go ahead to your browser and test your content. Now that we have created templates that are linked to the state config, we should be able to see them appear when the url has an appropriate extension.
For example use the following url extension to test the packages page : http://localhost:8080/#/packages.

If everything works correctly, go through the index.html file and the template files, and add any ui-sref attributes that would be necessary to connect to the different views. The templates we need to make changes to are the booked.html,locations.html and the packages.html. Open up those files and you will see comments guiding you through the steps



### Getting Data from service

####

Now that we have tested the controllers and know they work we can get the data we need from the service
We want to gain access to the travelInfo and packageInfo data that is present in our mainSrv by calling to the service through our controllers.

Go ahead and delete the test variables you made and create new $scope variables that are accessible in the html view and associate them with the data that was pulled from the service files.

If you followed the steps located in the views then you should see the data from the service on the page. If you dont see anything make sure your getting the data in your controller from the service.

* Note: The information on the booked.html view  will not display until we configure the data to the specific state by id.



### Finish the booked.html view

####

Let's start by injecting $state into the bookedCtrl, if you console.log($state) you will see that we get a ton of info about our application state. What we need is the $state.params, this will give us the id being passed though the url params

Now that we have the $state.params "id" we can loop over the data we are getting from our service and check if we have a object that has the same id as the $state.params, if we find a object that has that id then set that object on a $scope variable and then attach that variable to the booked view using {{}}


### Resources

####

* Controller scopes http://jsfiddle.net/8pX7p/
* ng-repeat http://jsfiddle.net/PhCUk/1/
* Filter http://jsfiddle.net/WS8gS/1/
* http://docs.angularjs.org/guide/concepts



### Contributions

####

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.


### Copyright

####

© DevMountain LLC, 2016. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
