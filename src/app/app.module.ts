import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FeaturedListComponent } from './components/featured-list/featured-list.component';
import { ProductComponent } from './components/product-list/product/product.component';
import { ParentComponent } from './components/lifecycle/parent/parent.component';
import { ChildComponent } from './components/lifecycle/child/child.component';
import { CurrencyInputDirective } from './shared/directives/currency-input.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { DeactivateGuard } from './shared/guard/deactivate.guard';
import { PipesExampleComponent } from './components/pipes-example/pipes-example.component';
import { ReversePipe } from './shared/pipes/reverse.pipe';
import { SqrootPipe } from './shared/pipes/sqroot.pipe';
import { ObservableComponent } from './components/observable/observable.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveFormV2Component } from './components/reactive-form-v2/reactive-form-v2.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { AsignmentComponent } from './components/asignment/asignment.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CommonInterceptor } from './shared/interceptors/common.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'product-list',
    pathMatch: 'full'
  },
  {
    path: 'product-list',
    component: ProductListComponent,

  },
  {
    path: 'ft-list',
    component: FeaturedListComponent,

  },
  {
    path: 'parent',
    component: ParentComponent
  },
  {
    path: 'pipes',
    component: PipesExampleComponent,
  },
  {
    path: 'post-list',
    component: PostsComponent
  },
  {
    path: 'post-list/:id',
    component: PostDetailComponent
  },
  {
    path: 'post-details',
    component: PostDetailComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'observable',
    component: ObservableComponent
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent
  },
  {
    path: 'template-driven-form',
    component: ReactiveFormV2Component
  },
  {
    path: 'invoice',
    component: InvoiceComponent
  },
  {
    path: 'asign-form',
    component: AsignmentComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  }
  
  // {
  //   path: '**',
  //   component: ChildComponent
  // }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    FeaturedListComponent,
    ProductComponent,
    ParentComponent,
    ChildComponent,
    CurrencyInputDirective,
    PostsComponent,
    PostDetailComponent,
    LoginComponent,
    PipesExampleComponent,
    ReversePipe,
    SqrootPipe,
    ObservableComponent,
    ReactiveFormComponent,
    ReactiveFormV2Component,
    InvoiceComponent,
    AsignmentComponent,
    CustomerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbPaginationModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CommonInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
