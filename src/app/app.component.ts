import { Component } from '@angular/core';
import { DataManager, WebApiAdaptor, Query } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-autocomplete';
  public dataQuery : Query = new Query().select(['FirstName', 'EmployeeID']).take(10).requiresCount();
  public remoteDataFields : Object = {value: 'FirstName'};
  public remoteData : DataManager = new DataManager(
    {
      url : 'https://ej2services.syncfusion.com/production/web-services/api/Employees',
      adaptor : new WebApiAdaptor,
      crossDomain : true
    }
  );
  public dataFields : Object = {value : 'Game'};
  public localData : Object[] = [
    { Id: 'Game1', Game: 'American Football' },
    { Id: 'Game2', Game: 'Badminton' },
    { Id: 'Game3', Game: 'Basketball' },
    { Id: 'Game4', Game: 'Cricket' },
    { Id: 'Game5', Game: 'Baseball' },
    { Id: 'Game6', Game: 'Golf' },
    { Id: 'Game7', Game: 'Hockey' },
    { Id: 'Game8', Game: 'Rugby' },
    { Id: 'Game9', Game: 'Snooker' },
    { Id: 'Game10', Game: 'Tennis' }
  ];
}
