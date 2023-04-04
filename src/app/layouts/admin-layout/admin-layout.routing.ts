import { Routes } from '@angular/router';
import { AuthGuardService } from 'app/auth-guard.service';


export const AdminLayoutRoutes: Routes = [
    { path: 'users', canActivateChild:[AuthGuardService],
      loadChildren: () => import('../../admin/users/user.module').then(m => m.UserModule),
    },
    { path: 'products',canActivateChild:[AuthGuardService],
    loadChildren: () => import('../../admin/products/product.module').then(m => m.ProductModule),
    },
    { path: 'attributes',canActivateChild:[AuthGuardService],
    loadChildren: () => import('../../admin/attributes/attribute.module').then(m => m.AttributeModule),
    }
];
