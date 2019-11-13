import React from 'react'
import {Router} from 'dva/router'

import routes from './router.config'
import RouterView from './RouterView'

function RouterConfig({history}){
    console.log('routes..',routes)
    return(
        <Router history={history}>
            <RouterView routes={routes.routes}/>
        </Router>
    )
}
export default RouterConfig