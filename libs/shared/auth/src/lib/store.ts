import { BehaviorSubject } from "rxjs";
import { map } from 'rxjs/operators';
import { Action } from "./models/action";

export class Strore<T> {

  private _state$: BehaviorSubject<T>;
  private _actions$: BehaviorSubject<Action>;

  constructor(initialState: T) {

    this._state$ = new BehaviorSubject( this.getClone(initialState) );

    const initialAction: Action = {
      type: 'INITIAL',
      payload: initialState,
    };
    this._actions$ = new BehaviorSubject(initialAction);
  }

  setState(newState: T){
    this._state$.next( this.getClone(newState) );
  }

  getSnapshot() {
    return this.getClone(this._state$.value);
  }

  getState$(){
    return this._state$.asObservable().pipe(map(state => this.getClone(state) ));
  }

  private getClone(source: T): T{
    return {... source};
  }

}
