import { routerReducer } from '@angular-redux/router';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { CommonModule } from '@angular/common';
import { Inject, ModuleWithProviders, NgModule } from '@angular/core';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import persistState from 'redux-localstorage';
import { createLogger } from 'redux-logger';
import { ISpamReportsStore, SpamReportsReducer } from './spam-reports.reducer';
import { getConfig } from '../../../../environments/environment';
import { provideReduxForms } from '@angular-redux/form';
// const PERSIST_STATE = require('redux-localstorage');

export interface IAppState {
  spamReports?: ISpamReportsStore;
}

export const ROOT_REDUCER = combineReducers<IAppState> ({
  data: SpamReportsReducer,
});

// export const ENHANCERS =  [
//   persistState('spamReports', { key: '@angular-redux/store/spamreports' })
// ];

@NgModule({
  imports: [
    CommonModule,
    NgReduxModule
  ],
  declarations: []
})

export class StoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: StoreModule,
      providers: [
      ]
    };
  }
  constructor(
    public store: NgRedux<IAppState>,
    public devTool: DevToolsExtension,
  ) {
    store.configureStore(
      ROOT_REDUCER,
      {},
      getConfig().reduxLog ? [createLogger()] : []
      // ,
      // [... ENHANCERS, devTool.isEnabled() ? devTool.enhancer() : (f) => f]
    );
  }
}
