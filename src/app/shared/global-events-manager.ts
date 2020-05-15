import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalEventsManager {

    private _showNavBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public showNavBarEmitter: Observable<boolean> = this._showNavBar.asObservable();

    constructor() {}

    showNavBar(ifShow: boolean) {
        this._showNavBar.next(ifShow);
    }


}