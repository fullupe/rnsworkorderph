import { useFetchData } from "./useFetchData";




export const useFetchBrache =()=>{

    const {DataApi,fetchReflesh,setFetchReflesh}=useFetchData()
    
    //groupBy BRANCH
    const result = DataApi.reduce(function(r: { [x: string]: any[]; }, a: { branch: string | number; }){
    r[a.branch]=r[a.branch] || [];
    r[a.branch].push(a);
    return r;
    
    },Object.create(null));
    
    const BranchOffice = Object.entries(result)


    return {BranchOffice }

}
