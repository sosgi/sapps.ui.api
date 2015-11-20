export class IApp{
    get name(){
    }
    get url(){
    }
    reload(){
    }
    show($dom){
    }
    hide(){
    }
}

export class IRouter{
    addRoute(route){

    }
    removeRoute(route){

    }
}
export class IRoute{
    match(url){

    }
}
export class IBrowser{
    /**
     *
     * @param {String{ url New url (when use as setter)
     * @param (boolean) replace
     */
    url(url, replace){

    }
    feature(name){

    }
}
