type method = 'GET'|'POST'|'PUT'|'DELETE';
export interface fetchArgument {route:string,method:method,body?:any,headers?:any};
const defaultArgument:fetchArgument = {route:'',method:'GET',body:undefined,headers:undefined}
const url = 'https://reqres.in/api/';

export const loginRequestObject:fetchArgument = {
    route:'login',
    method:'POST',
    body:{"email": "eve.holt@reqres.in","password": "cityslicka"},
    headers:undefined
}

export const takeUserObject:fetchArgument = {
    route:'users?page=1',
    method:'GET',
}

const fetchComponent = async({route,method,body,headers}:fetchArgument = defaultArgument) => new Promise( async(resolve,reject) => {

    const bundle:[string,any] = [`${url}${route}`,{method,mode:'cors',body,headers}] ;

    await fetch(...bundle)
    .then( resp => resp.json() )
    .then(resolve)
    .catch(reject)
    
});

export default fetchComponent
